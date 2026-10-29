import { getCollection, type CollectionEntry } from 'astro:content';
import { localizedPath, type Lang } from './i18n';

export const COLLECTIONS = ['docs', 'bots', 'prompts', 'news'] as const;
export type CollectionName = (typeof COLLECTIONS)[number];
export type Item = CollectionEntry<CollectionName>;

export const COLLECTION_META: Record<
  CollectionName,
  Record<Lang, { label: string; description: string }>
> = {
  docs: {
    ja: { label: 'ドキュメント', description: '公式の Grok Bot ドキュメントを、日本語で解説。各ページに原文へのリンクつき。' },
  },
  bots: {
    ja: { label: 'ボット', description: 'Grok Bot に任せられる役割と、それを始める最初のメッセージ。' },
  },
  prompts: {
    ja: { label: 'プロンプト', description: 'Bot にそのまま渡せる依頼文とレシピ。' },
  },
  news: {
    ja: { label: 'ニュース', description: 'Grok Bot と xAI の動きを、出典つきで短く。' },
  },
};

/** `ja/xai-api-quickstart` -> { lang: 'ja', slug: 'xai-api-quickstart' } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export function itemPath(item: Item): string {
  const { lang, slug } = splitId(item.id);
  return localizedPath(`/${item.collection}/${slug}/`, lang);
}

export function itemJsonPath(item: Item): string {
  return itemPath(item).replace(/\/$/, '.json');
}

/** The date an item is sorted and displayed by. */
export function itemDate(item: Item): Date {
  return item.collection === 'news' ? item.data.published : item.data.updated;
}

export async function getItems(collection: CollectionName, lang?: Lang): Promise<Item[]> {
  const items: Item[] = await getCollection(collection);
  return items
    .filter((item) => !lang || splitId(item.id).lang === lang)
    .sort((a, b) => itemDate(b).getTime() - itemDate(a).getTime());
}

export async function getAllItems(lang?: Lang): Promise<Item[]> {
  const groups = await Promise.all(COLLECTIONS.map((c) => getItems(c, lang)));
  return groups.flat();
}

/** Collections that have at least one item — used for navigation. */
export async function getNavCollections(lang: Lang): Promise<CollectionName[]> {
  const counts = await Promise.all(COLLECTIONS.map(async (c) => (await getItems(c, lang)).length));
  return COLLECTIONS.filter((_, i) => counts[i] > 0);
}

const NEW_DAYS = 7;

/** Updated or published within the last week, relative to build time. */
export function isNew(item: Item, now = new Date()): boolean {
  return now.getTime() - itemDate(item).getTime() < NEW_DAYS * 24 * 60 * 60 * 1000;
}

/** Public, stable JSON shape for an item. Consumed by /*.json, llms.txt, and future MCP tools. */
export function toRecord(item: Item, site: URL, { body = false } = {}) {
  const { lang, slug } = splitId(item.id);
  const data: Record<string, unknown> = { ...item.data };
  for (const [key, value] of Object.entries(data)) {
    if (value instanceof Date) data[key] = value.toISOString().slice(0, 10);
  }
  return {
    id: slug,
    collection: item.collection,
    lang,
    ...data,
    url: new URL(itemPath(item), site).href,
    json: new URL(itemJsonPath(item), site).href,
    ...(body ? { body: item.body ?? '' } : {}),
  };
}
