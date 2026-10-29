import type { APIRoute } from 'astro';
import { CORS_HEADERS, handleMcpPost } from '../lib/mcp';

// Remote MCP endpoint: https://grokbotforum.com/mcp (rendered on demand; the rest of the site stays static).
export const prerender = false;

export const POST: APIRoute = ({ request }) => handleMcpPost(request);

export const OPTIONS: APIRoute = () => new Response(null, { status: 204, headers: CORS_HEADERS });

// Stateless server: no server-initiated SSE stream.
export const GET: APIRoute = () =>
  new Response('grokbotforum MCP server. Send JSON-RPC over POST. Setup guide: https://grokbotforum.com/agents/', {
    status: 405,
    headers: { ...CORS_HEADERS, Allow: 'POST, OPTIONS', 'Content-Type': 'text/plain; charset=utf-8' },
  });
