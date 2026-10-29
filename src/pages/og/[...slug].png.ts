import type { APIContext } from 'astro';
import { COLLECTIONS, COLLECTION_META, getAllItems, splitId, type Item } from '../../lib/content';
import { t } from '../../lib/i18n';
import { prepareFonts, renderOgImage } from '../../lib/og';

// /og/default.png, /og/<collection>.png, /og/<collection>/<slug>.png
interface Card {
  label: string;
  title: string;
  summary?: string;
}

export async function getStaticPaths() {
  const items: Item[] = await getAllItems();
  const cards: { slug: string; card: Card }[] = [
    { slug: 'default', card: { label: t('ja', 'home.eyebrow'), title: t('ja', 'home.title'), summary: t('ja', 'site.description') } },
    ...COLLECTIONS.map((c) => ({
      slug: c,
      card: { label: 'Grok Bot Forum', title: COLLECTION_META[c].ja.label, summary: COLLECTION_META[c].ja.description },
    })),
    ...items.map((item) => ({
      slug: `${item.collection}/${splitId(item.id).slug}`,
      card: { label: COLLECTION_META[item.collection].ja.label, title: item.data.title, summary: item.data.summary },
    })),
  ];
  await prepareFonts(cards.map(({ card }) => `${card.label}${card.title}${card.summary ?? ''}`).join(''));
  return cards.map(({ slug, card }) => ({ params: { slug }, props: { card } }));
}

export async function GET({ props }: APIContext) {
  const png = await renderOgImage(props.card as Card);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
}
