import type { APIContext } from 'astro';
import { COLLECTIONS, getAllItems, itemPath } from '../lib/content';
import { isoDate } from '../lib/i18n';

export async function GET({ site }: APIContext) {
  const abs = (path: string) => new URL(path, site).href;
  const pages: { loc: string; lastmod?: string }[] = [
    ...['/', '/about/', '/operator/', '/agents/', ...COLLECTIONS.map((c) => `/${c}/`)].map((path) => ({ loc: abs(path) })),
    ...(await getAllItems()).map((item) => ({ loc: abs(itemPath(item)), lastmod: isoDate(item.data.updated) })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url>\n    <loc>${p.loc}</loc>${p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : ''}\n  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
