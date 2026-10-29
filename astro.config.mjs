// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://grokbotforum.com',
  trailingSlash: 'ignore',
  // Static by default; only routes with `prerender = false` (the MCP endpoint) run as functions.
  adapter: vercel(),
  // Bot roles moved from /bots/ to /prompts/ when /bots/ became the marketplace guide.
  redirects: Object.fromEntries(
    ['chief-of-staff', 'bug-reproducer', 'x-trend-watcher', 'gbf-navi', 'gbf-docs-watcher'].map((slug) => [
      `/bots/${slug}`,
      { status: 308, destination: `/prompts/${slug}/` },
    ]),
  ),
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
