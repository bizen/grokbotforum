import type { APIContext } from 'astro';
import { COLLECTIONS, COLLECTION_META, getItems, toRecord, type CollectionName } from '../lib/content';

export function getStaticPaths() {
  return COLLECTIONS.map((collection) => ({ params: { collection } }));
}

export async function GET({ params, site }: APIContext) {
  const collection = params.collection as CollectionName;
  const items = await getItems(collection);
  return Response.json({
    collection,
    label: COLLECTION_META[collection].ja.label,
    count: items.length,
    items: items.map((item) => toRecord(item, site!, { body: true })),
  });
}
