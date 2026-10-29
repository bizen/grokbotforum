import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, localizedPath, type Lang } from './i18n';

export const COLLECTIONS = ['docs', 'guides', 'bots', 'prompts', 'news'] as const;
export type CollectionName = (typeof COLLECTIONS)[number];
export type Item = CollectionEntry<CollectionName>;

/** Languages each collection is published in. `docs` exists only because the official docs have no Japanese edition. */
const COLLECTION_LANGS: Record<CollectionName, readonly Lang[]> = {
  docs: ['ja'],
  guides: LANGS,
  bots: LANGS,
  prompts: LANGS,
  news: LANGS,
};

export function collectionsFor(lang: Lang): CollectionName[] {
  return COLLECTIONS.filter((c) => COLLECTION_LANGS[c].includes(lang));
}

export function hasLang(collection: CollectionName, lang: Lang): boolean {
  return COLLECTION_LANGS[collection].includes(lang);
}

export const COLLECTION_META: Record<
  CollectionName,
  Record<Lang, { label: string; description: string }>
> = {
  docs: {
    ja: { label: 'ドキュメント', description: '公式の Grok Bot ドキュメントを、日本語で解説。各ページに原文へのリンクつき。' },
    en: { label: 'Docs (Japanese)', description: 'Japanese explanations of the official Grok Bot docs.' },
  },
  guides: {
    ja: { label: 'ガイド', description: 'Grok Bot を使いこなすための手順と解説。' },
    en: { label: 'Guides', description: 'Step-by-step guides for getting real work done with Grok Bot.' },
  },
  bots: {
    ja: { label: 'ボット', description: 'Grok Bot に任せられる役割と、それを始める最初のメッセージ。' },
    en: { label: 'Bots', description: 'Jobs you can hand a Grok Bot, with the first message that sets each one up.' },
  },
  prompts: {
    ja: { label: 'プロンプト', description: 'Bot にそのまま渡せる依頼文とレシピ。' },
    en: { label: 'Prompts', description: 'Requests and recipes you can hand to a Bot as-is.' },
  },
  news: {
    ja: { label: 'ニュース', description: 'Grok Bot と xAI の動きを、出典つきで短く。' },
    en: { label: 'News', description: 'Short, source-cited updates on Grok Bot and xAI.' },
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

/** Collections that have at least one item in `lang` — used for navigation. */
export async function getNavCollections(lang: Lang): Promise<CollectionName[]> {
  const counts = await Promise.all(collectionsFor(lang).map(async (c) => (await getItems(c, lang)).length));
  return collectionsFor(lang).filter((_, i) => counts[i] > 0);
}

const NEW_DAYS = 7;

/** Updated or published within the last week, relative to build time. */
export function isNew(item: Item, now = new Date()): boolean {
  return now.getTime() - itemDate(item).getTime() < NEW_DAYS * 24 * 60 * 60 * 1000;
}

/** The same slug in the other language, if it exists. */
export async function getTranslation(item: Item): Promise<Item | undefined> {
  const { lang, slug } = splitId(item.id);
  const target = LANGS.find((l) => l !== lang)!;
  const items = await getItems(item.collection, target);
  return items.find((i) => splitId(i.id).slug === slug);
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
