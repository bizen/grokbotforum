import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  
  const urls = [
    { url: '/', lastmod: new Date(), priority: 1.0, lang: 'ja' },
    { url: '/en/', lastmod: new Date(), priority: 1.0, lang: 'en' },
    { url: '/bots/', lastmod: new Date(), priority: 0.8, lang: 'ja' },
    { url: '/en/bots/', lastmod: new Date(), priority: 0.8, lang: 'en' },
    { url: '/templates/', lastmod: new Date(), priority: 0.7, lang: 'ja' },
    { url: '/en/templates/', lastmod: new Date(), priority: 0.7, lang: 'en' },
  ];
  
  for (const article of articles) {
    const isJapanese = article.data.language === 'ja';
    const slug = article.id.replace(/^articles\//, '').replace(/\.md$/, '');
    const path = isJapanese 
      ? `/articles/${slug}/`
      : `/en/articles/${slug}/`;
    
    urls.push({
      url: path,
      lastmod: article.data.date,
      priority: 0.6,
      lang: article.data.language,
    });
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ url, lastmod, priority, lang }) => {
  const fullUrl = new URL(url, context.site).href;
  const alternateLang = lang === 'ja' ? 'en' : 'ja';
  const alternateUrl = lang === 'ja' 
    ? url === '/' ? '/en/' : url.replace(/^\//, '/en/')
    : url.replace(/^\/en\//, '/');
  const fullAlternateUrl = new URL(alternateUrl, context.site).href;
  
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod.toISOString()}</lastmod>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${fullAlternateUrl}" />
    <xhtml:link rel="alternate" hreflang="${lang}" href="${fullUrl}" />
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
