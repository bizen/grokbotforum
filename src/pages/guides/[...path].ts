import type { APIRoute } from 'astro';

// The guides collection was folded into docs; send old URLs to the matching docs page.
export const prerender = false;

const MOVED: Record<string, string> = {
  'getting-started': '/docs/get-started/',
  'tag-bot-on-x': '/docs/tag-on-x/',
  'skills-and-routines': '/docs/skills-routines-and-automations/',
};

export const GET: APIRoute = ({ params, redirect }) => {
  const slug = (params.path ?? '').replace(/\/$/, '').replace(/\.json$/, '');
  return redirect(MOVED[slug] ?? '/docs/', 308);
};
