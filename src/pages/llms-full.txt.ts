import type { APIContext } from 'astro';
import { getAllItems, itemPath, splitId } from '../lib/content';

export async function GET({ site }: APIContext) {
  const items = await getAllItems();
  const blocks = items.map((item) => {
    const { data } = item;
    const sources = data.sources.map((s) => `- ${s.title}: ${s.url}`).join('\n');
    const prompt = item.collection === 'prompts' ? `\n\n### Prompt\n\n\`\`\`\n${data.prompt}\n\`\`\`` : '';
    return `# ${data.title}

- collection: ${item.collection}
- lang: ${splitId(item.id).lang}
- updated: ${data.updated.toISOString().slice(0, 10)}
- url: ${new URL(itemPath(item), site).href}

> ${data.summary}${prompt}

${(item.body ?? '').trim()}${sources ? `\n\n### Sources\n\n${sources}` : ''}`;
  });
  return new Response(blocks.join('\n\n---\n\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
