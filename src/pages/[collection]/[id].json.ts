import type { APIContext } from 'astro';
import { getAllItems, splitId, toRecord, type Item } from '../../lib/content';

export async function getStaticPaths() {
  const items = await getAllItems();
  return items.map((item) => {
    return { params: { collection: item.collection, id: splitId(item.id).slug }, props: { item } };
  });
}

export function GET({ props, site }: APIContext) {
  return Response.json(toRecord(props.item as Item, site!, { body: true }));
}
