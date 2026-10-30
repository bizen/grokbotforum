import type { APIContext } from 'astro';
import { QUICK_FACTS, QUICK_FACTS_CHECKED } from '../data/quick-facts';
import { COLLECTIONS, COLLECTION_META, getAllItems, itemPath, splitId, toRecord } from '../lib/content';

// Site-wide index: metadata for every item (no bodies). Also powers on-site search.
export async function GET({ site }: APIContext) {
  const items = await getAllItems();
  return Response.json({
    name: 'Grok Bot Forum',
    description: 'Unofficial, source-cited knowledge base about Grok Bot: guides, bots, prompts, news.',
    site: site!.href,
    generated: new Date().toISOString(),
    docs: {
      llms: new URL('/llms.txt', site).href,
      collections: Object.fromEntries(COLLECTIONS.map((c) => [c, new URL(`/${c}.json`, site).href])),
      item: 'Replace the trailing slash of any item URL with .json',
      tierList: new URL('/tier-list.json', site).href,
    },
    facts: { lang: 'ja', checked: QUICK_FACTS_CHECKED, items: QUICK_FACTS },
    items: items.map((item) => ({
      ...toRecord(item, site!),
      collectionLabel: COLLECTION_META[item.collection][splitId(item.id).lang].label,
      path: itemPath(item),
    })),
  });
}
