import type { APIContext } from 'astro';
import { COLLECTION_META, getAllItems, itemDate, itemPath } from '../lib/content';
import { localizedPath, t } from '../lib/i18n';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ site }: APIContext) {
  const lang = 'ja';
  const items = (await getAllItems(lang))
    .sort((a, b) => itemDate(b).getTime() - itemDate(a).getTime())
    .slice(0, 50);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>grokbotforum</title>
    <description>${escape(t(lang, 'site.description'))}</description>
    <link>${new URL(localizedPath('/', lang), site)}</link>
    <language>${lang}</language>
    <atom:link href="${new URL(localizedPath('/feed.xml', lang), site)}" rel="self" type="application/rss+xml" />
${items
  .map((item) => {
    const url = new URL(itemPath(item), site).href;
    return `    <item>
      <title>${escape(item.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <category>${escape(COLLECTION_META[item.collection][lang].label)}</category>
      <pubDate>${itemDate(item).toUTCString()}</pubDate>
      <description>${escape(item.data.summary)}</description>
    </item>`;
  })
  .join('\n')}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
