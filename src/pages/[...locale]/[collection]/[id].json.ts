import type { APIContext } from 'astro';
import { getAllItems, splitId, toRecord, type Item } from '../../../lib/content';
import { localeParam } from '../../../lib/i18n';

export async function getStaticPaths() {
  const items = await getAllItems();
  return items.map((item) => {
    const { lang, slug } = splitId(item.id);
    return { params: { locale: localeParam(lang), collection: item.collection, id: slug }, props: { item } };
  });
}

export function GET({ props, site }: APIContext) {
  return Response.json(toRecord(props.item as Item, site!, { body: true }));
}
