import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((article) => article.data.language === 'ja')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Grok Bot Forum</title>
    <description>Grok Botのニュースを日本と世界で共有するサイト</description>
    <link>${context.site}</link>
    <language>ja</language>
    <atom:link href="${new URL('/feed.xml', context.site)}" rel="self" type="application/rss+xml" />
    ${articles.map(article => {
      const slug = article.id.replace(/^articles\//, '').replace(/\.md$/, '');
      const url = new URL(`/articles/${slug}/`, context.site);
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
