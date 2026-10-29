import type { APIContext } from 'astro';
import { COLLECTIONS, COLLECTION_META, getItems, itemJsonPath, itemPath } from '../lib/content';

// https://llmstxt.org
export async function GET({ site }: APIContext) {
  const abs = (path: string) => new URL(path, site).href;
  const sections = await Promise.all(
    COLLECTIONS.map(async (c) => {
      const items = await getItems(c, 'en').then(async (en) => (en.length ? en : getItems(c, 'ja')));
      const lines = items.map((i) => `- [${i.data.title}](${abs(itemJsonPath(i))}): ${i.data.summary} (HTML: ${abs(itemPath(i))})`);
      return `## ${COLLECTION_META[c].en.label}\n\n${COLLECTION_META[c].en.description} Full collection: ${abs(`/${c}.json`)}\n\n${lines.join('\n') || '- (empty)'}`;
    }),
  );

  const text = `# grokbotforum

> Unofficial, source-cited knowledge base about Grok Bot (xAI): guides, bots, prompts, and news. Not affiliated with xAI or X Corp. Content exists in Japanese (default) and English.

Every item is available as JSON: replace the trailing slash of an item URL with \`.json\`. Each record has id, collection, lang, title, summary, tags, updated, sources, url, and body (Markdown). English URLs are prefixed with /en/.

- Site index (all items, metadata only): ${abs('/index.json')}
- All content as plain text: ${abs('/llms-full.txt')}

${sections.join('\n\n')}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
