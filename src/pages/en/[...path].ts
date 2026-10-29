import type { APIRoute } from 'astro';

// The English pages were removed; every old /en/* URL goes to the English gateway.
export const prerender = false;

export const GET: APIRoute = ({ redirect }) => redirect('/en/', 308);
