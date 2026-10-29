import type { APIContext } from 'astro';
import { COLLECTIONS, getAllItems, getTranslation, hasLang, itemPath } from '../lib/content';
import { LANGS, isoDate, localizedPath } from '../lib/i18n';

export async function GET({ site }: APIContext) {
  const abs = (path: string) => new URL(path, site).href;
  const pages: { loc: string; lastmod?: string; alternates: Record<string, string> }[] = [];

  const indexPages = [
    ...['/', '/about/', '/agents/'].map((path) => ({ path, langs: LANGS })),
    ...COLLECTIONS.map((c) => ({ path: `/${c}/`, langs: LANGS.filter((l) => hasLang(c, l)) })),
  ];
  for (const { path, langs } of indexPages) {
    const alternates = Object.fromEntries(langs.map((l) => [l, abs(localizedPath(path, l))]));
    for (const lang of langs) pages.push({ loc: alternates[lang], alternates });
  }

  for (const item of await getAllItems()) {
    const translation = await getTranslation(item);
    const alternates: Record<string, string> = { [item.id.split('/')[0]]: abs(itemPath(item)) };
    if (translation) alternates[translation.id.split('/')[0]] = abs(itemPath(translation));
    pages.push({ loc: abs(itemPath(item)), lastmod: isoDate(item.data.updated), alternates });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>${p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : ''}
${Object.entries(p.alternates)
  .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`)
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
