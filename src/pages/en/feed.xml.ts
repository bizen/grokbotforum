import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((article) => article.data.language === 'en')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Grok Bot Forum</title>
    <description>A news site bridging Grok Bot news between Japan and the world</description>
    <link>${context.site}</link>
    <language>en</language>
    <atom:link href="${new URL('/en/feed.xml', context.site)}" rel="self" type="application/rss+xml" />
    ${articles.map(article => {
      const slug = article.id.replace(/^articles\//, '').replace(/\.md$/, '');
      const url = new URL(`/en/articles/${slug}/`, context.site);
      return `
    <item>
      <title><![CDATA[${article.data.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${article.data.date.toUTCString()}</pubDate>
      ${article.data.description ? `<description><![CDATA[${article.data.description}]]></description>` : ''}
    </item>`;
    }).join('')}
  </channel>
</rss>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    }
  );
}
