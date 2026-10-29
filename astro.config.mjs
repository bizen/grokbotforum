// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://grokbotforum.com',
  trailingSlash: 'ignore',
  // Static by default; only routes with `prerender = false` (the MCP endpoint) run as functions.
  adapter: vercel(),
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
