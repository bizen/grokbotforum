// Minimal stateless MCP server (Streamable HTTP transport, JSON responses only).
// Spec: https://modelcontextprotocol.io/specification — tools only, no sessions, no SSE.
import { OFFICIAL_DOCS, OFFICIAL_DOCS_BASE } from '../data/official-docs';
import { QUICK_FACTS, QUICK_FACTS_CHECKED } from '../data/quick-facts';
import { COLLECTIONS, COLLECTION_META, getAllItems, getItems, splitId, toRecord, type CollectionName, type Item } from './content';
import type { Lang } from './i18n';

const SUPPORTED_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'];
const SERVER_INFO = { name: 'grokbotforum', title: 'Grok Bot Forum（非公式）', version: '1.0.0' };

const INSTRUCTIONS = `Grok Bot Forum（grokbotforum.com）の非公式 Grok Bot 日本語ナレッジベースです。
- 「〇〇をする Bot はある？」には collection: bots で search し、add（Grok Bot に追加するリンク）を案内してください。
- まず search で探し、get_page で本文を読んでから答えてください。
- 回答には該当ページの url と、docs コレクションなら official（公式ページ）を出典として添えてください。
- 料金・上限など変わりやすい情報は quick_facts の checked 日付を確認し、古ければ公式ページの再確認を勧めてください。
- 公式ドキュメントとの対応表は official_docs_map で取得できます。
- 「〇〇とは？」のような用語の質問には collection: glossary で search してください（英語の UI 表記 en でも引けます）。
Unofficial Japanese knowledge base about xAI's Grok Bot. Not affiliated with xAI.`;

type JsonRpcId = string | number | null;
interface JsonRpcRequest {
  jsonrpc: '2.0';
  id?: JsonRpcId;
  method: string;
  params?: Record<string, any>;
}

class RpcError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

const collectionEnum = { type: 'string', enum: [...COLLECTIONS] };

const TOOLS = [
  {
    name: 'search',
    title: 'ナレッジベースを検索',
    description:
      'Grok Bot の日本語ドキュメント解説・用語集・公式マーケットプレイスの Bot 紹介・プロンプト・まとめを検索します。結果の collection と id を get_page に渡すと本文を読めます。',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: '検索語（日本語・英語どちらでも可。例: ルーティン 上限）' },
        collection: { ...collectionEnum, description: '絞り込むコレクション（省略可）' },
        limit: { type: 'integer', minimum: 1, maximum: 20, default: 5 },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_page',
    title: 'ページ本文を取得',
    description:
      '1 ページの本文（Markdown）とメタデータを返します。collection + id、または grokbotforum.com のページ URL で指定します。Bot は creator・add（追加リンク）・marketplace、プロンプトは prompt を含みます。',
    inputSchema: {
      type: 'object',
      properties: {
        collection: collectionEnum,
        id: { type: 'string', description: 'ページの id（例: tag-on-x）' },
        url: { type: 'string', description: 'ページ URL（例: https://grokbotforum.com/docs/tag-on-x/）' },
      },
    },
  },
  {
    name: 'list_pages',
    title: 'ページ一覧',
    description: 'コレクション内のページ一覧（id・タイトル・要約・更新日）を返します。',
    inputSchema: {
      type: 'object',
      properties: { collection: collectionEnum },
      required: ['collection'],
    },
  },
  {
    name: 'official_docs_map',
    title: '公式ドキュメント対応表',
    description:
      'docs.x.ai/grok-bot の各公式ページと、このサイトの日本語解説ページの対応表を返します。更新日つきなので、公式側の変更検知に使えます。',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'quick_facts',
    title: 'Grok Bot 早見表',
    description: '対象プラン・対応端末・上限値など、よく調べられる事実を出典と確認日つきで返します。',
    inputSchema: { type: 'object', properties: {} },
  },
].map((tool) => ({ ...tool, annotations: { readOnlyHint: true, openWorldHint: false } }));

function site(): URL {
  return new URL('https://grokbotforum.com');
}

// --- Search ---------------------------------------------------------------

function normalize(s: string): string {
  return s.normalize('NFKC').toLowerCase();
}

function bigrams(s: string): Set<string> {
  const out = new Set<string>();
  const t = s.replace(/\s+/g, '');
  for (let i = 0; i < t.length - 1; i++) out.add(t.slice(i, i + 2));
  return out;
}

// Split on whitespace/punctuation, and on particles sitting between kanji/katakana words
// (承認の期限 → 承認, 期限) so unspaced Japanese queries still match term by term.
const PARTICLE = /(?<=[\p{Script=Han}\p{Script=Katakana}ー])[のをがはにでとやへも](?=[\p{Script=Han}\p{Script=Katakana}ー])/gu;

function splitTerms(query: string): string[] {
  return normalize(query).replace(PARTICLE, ' ').split(/[\s、。・,]+/).filter(Boolean);
}

function scoreItem(item: Item, query: string): number {
  // Glossary terms also match their English UI name (e.g. "Auto Review", "Routine").
  const title = normalize(`${item.data.title} ${'en' in item.data ? item.data.en : ''}`);
  const meta = normalize(`${item.data.summary} ${item.data.tags.join(' ')}`);
  const body = normalize(item.body ?? '');
  const terms = splitTerms(query);

  let score = 0;
  let matchedAll = true;
  for (const term of terms) {
    let s = 0;
    if (title.includes(term)) s += 6;
    if (meta.includes(term)) s += 3;
    if (body.includes(term)) s += Math.min(body.split(term).length - 1, 5);
    if (s === 0) matchedAll = false;
    score += s;
  }
  if (matchedAll && score > 0) return score + 10;

  // Japanese queries often have no spaces: fall back to character-bigram overlap.
  const q = bigrams(normalize(query));
  if (q.size === 0) return score;
  const hay = bigrams(`${title} ${meta} ${body}`);
  let hits = 0;
  for (const g of q) if (hay.has(g)) hits++;
  const ratio = hits / q.size;
  return ratio >= 0.6 ? score + ratio * 5 : score;
}

function snippet(item: Item, query: string): string {
  const body = (item.body ?? '').replace(/\s+/g, ' ');
  const term = splitTerms(query).find((t) => normalize(body).includes(t));
  if (!term) return body.slice(0, 160);
  const at = normalize(body).indexOf(term);
  const start = Math.max(0, at - 60);
  return (start > 0 ? '…' : '') + body.slice(start, start + 180) + '…';
}

// --- Tool handlers --------------------------------------------------------

function textResult(text: string, structuredContent?: unknown) {
  return { content: [{ type: 'text', text }], ...(structuredContent ? { structuredContent } : {}) };
}

function itemFromUrl(items: Item[], raw: string): Item | undefined {
  let path: string;
  try {
    path = new URL(raw, site()).pathname;
  } catch {
    return undefined;
  }
  const m = path.match(/^\/([a-z]+)\/([^/]+?)(?:\.json)?\/?$/);
  if (!m) return undefined;
  const [, collection, slug] = m;
  return items.find((i) => i.collection === collection && splitId(i.id).slug === slug);
}

async function callTool(name: string, args: Record<string, any> = {}) {
  const lang: Lang = 'ja';

  switch (name) {
    case 'search': {
      const query = String(args.query ?? '').trim();
      if (!query) throw new RpcError(-32602, 'query is required');
      const limit = Math.min(Math.max(Number(args.limit) || 5, 1), 20);
      const pool = args.collection ? await getItems(args.collection as CollectionName, lang) : await getAllItems(lang);
      const results = pool
        .map((item) => ({ item, score: scoreItem(item, query) }))
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ item }) => {
          const r = toRecord(item, site());
          return { ...r, snippet: snippet(item, query) };
        });
      const text = results.length
        ? results
            .map((r, i) => `${i + 1}. [${r.collection}/${r.id}] ${r.title}\n   ${r.summary}\n   ${r.url}`)
            .join('\n')
        : `「${query}」に一致するページはありません。list_pages で一覧を確認してください。`;
      return textResult(text, { query, results });
    }

    case 'get_page': {
      const all = await getAllItems();
      let item: Item | undefined;
      if (args.url) item = itemFromUrl(all, String(args.url));
      else if (args.collection && args.id)
        item = all.find((i) => i.collection === args.collection && splitId(i.id).slug === args.id);
      else throw new RpcError(-32602, 'collection + id, or url is required');
      if (!item) return { ...textResult('ページが見つかりません。search で id を確認してください。'), isError: true };

      const record = toRecord(item, site(), { body: true }) as Record<string, any>;
      const header = [
        `# ${record.title}`,
        `> ${record.summary}`,
        `- url: ${record.url}`,
        record.official ? `- 公式ページ: ${record.official}` : '',
        record.creator ? `- 作者: ${record.creator}` : '',
        record.add ? `- Grok Bot に追加: ${record.add}` : '',
        record.marketplace ? `- マーケットプレイス: ${record.marketplace}` : '',
        `- 更新: ${record.updated}`,
        record.sources?.length ? `- 出典: ${record.sources.map((s: any) => s.url).join(', ')}` : '',
      ].filter(Boolean);
      const extra = record.prompt ? `\n\n## プロンプト\n\n${record.prompt}` : '';
      return textResult(`${header.join('\n')}${extra}\n\n${record.body}`, record);
    }

    case 'list_pages': {
      const collection = args.collection as CollectionName;
      if (!COLLECTIONS.includes(collection)) throw new RpcError(-32602, `collection must be one of ${COLLECTIONS.join(', ')}`);
      const items = (await getItems(collection, lang)).map((i) => {
        const { body: _, ...r } = toRecord(i, site()) as Record<string, any>;
        return r;
      });
      const text = items.length
        ? `${COLLECTION_META[collection][lang].label}（${items.length} 件）\n` +
          items.map((r) => `- ${r.id}: ${r.title} — ${r.summary}（更新 ${r.updated}）`).join('\n')
        : 'まだページがありません。';
      return textResult(text, { collection, items });
    }

    case 'official_docs_map': {
      const docs = await getItems('docs', 'ja');
      const map = OFFICIAL_DOCS.flatMap((g) =>
        g.pages.map((p) => {
          const doc = docs.find((d) => splitId(d.id).slug === p.slug);
          return {
            group: g.group,
            title: p.title,
            official: OFFICIAL_DOCS_BASE + p.slug,
            japanese: doc ? new URL(`/docs/${p.slug}/`, site()).href : null,
            updated: doc ? doc.data.updated.toISOString().slice(0, 10) : null,
          };
        }),
      );
      const text = map
        .map((m) => `- ${m.title}: ${m.official} → ${m.japanese ?? '（未解説）'}${m.updated ? `（更新 ${m.updated}）` : ''}`)
        .join('\n');
      return textResult(text, { pages: map });
    }

    case 'quick_facts': {
      const text =
        QUICK_FACTS.map((f) => `- ${f.label}: ${f.value}（出典 ${f.source}）`).join('\n') +
        `\n\n確認日: ${QUICK_FACTS_CHECKED}`;
      return textResult(text, { checked: QUICK_FACTS_CHECKED, facts: QUICK_FACTS });
    }

    default:
      throw new RpcError(-32602, `Unknown tool: ${name}`);
  }
}

// --- JSON-RPC dispatch ----------------------------------------------------

async function dispatch(req: JsonRpcRequest): Promise<unknown> {
  switch (req.method) {
    case 'initialize': {
      const requested = req.params?.protocolVersion;
      return {
        protocolVersion: SUPPORTED_VERSIONS.includes(requested) ? requested : SUPPORTED_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      };
    }
    case 'ping':
      return {};
    case 'tools/list':
      return { tools: TOOLS };
    case 'tools/call':
      return callTool(req.params?.name, req.params?.arguments);
    default:
      throw new RpcError(-32601, `Method not found: ${req.method}`);
  }
}

async function handleMessage(msg: JsonRpcRequest): Promise<object | null> {
  const isNotification = msg.id === undefined;
  try {
    if (msg?.jsonrpc !== '2.0' || typeof msg.method !== 'string') throw new RpcError(-32600, 'Invalid Request');
    const result = await dispatch(msg);
    return isNotification ? null : { jsonrpc: '2.0', id: msg.id, result };
  } catch (err) {
    if (isNotification) return null;
    const code = err instanceof RpcError ? err.code : -32603;
    const message = err instanceof Error ? err.message : 'Internal error';
    return { jsonrpc: '2.0', id: msg.id ?? null, error: { code, message } };
  }
}

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Mcp-Session-Id, MCP-Protocol-Version',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id',
};

export async function handleMcpPost(request: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const messages = Array.isArray(payload) ? payload : [payload];
  const responses = (await Promise.all(messages.map((m) => handleMessage(m as JsonRpcRequest)))).filter(Boolean);

  // Only notifications / responses were sent: acknowledge with no body.
  if (responses.length === 0) return new Response(null, { status: 202, headers: CORS_HEADERS });
  return Response.json(Array.isArray(payload) ? responses : responses[0], { headers: CORS_HEADERS });
}
