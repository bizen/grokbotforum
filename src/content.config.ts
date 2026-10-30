import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files live at src/content/<collection>/ja/<slug>.md (the site is Japanese-only).
const loader = (name: string) => glob({ pattern: 'ja/**/*.md', base: `./src/content/${name}` });

const source = z.object({
  url: z.url(),
  title: z.string(),
});

const base = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  updated: z.coerce.date(),
  sources: z.array(source).min(1),
});

// Japanese explanations of the official Grok Bot docs, one item per official page.
// Written in our own words — never a verbatim translation (see SKILL.md §7).
const docs = defineCollection({
  loader: loader('docs'),
  schema: base.extend({
    official: z.url(),
  }),
});

// Cross-cutting reference pages (limits, plan comparison…) compiled from several official pages.
const reference = defineCollection({
  loader: loader('reference'),
  schema: base,
});

// Japanese guide to a Bot published on the official Grok Bot Marketplace (x.ai/bot/marketplace).
// Explained in our own words from the listing page — never copied verbatim.
const bots = defineCollection({
  loader: loader('bots'),
  schema: base.extend({
    creator: z.string(),
    /** Marketplace listing page. */
    marketplace: z.url(),
    /** "Import Bot" link, when the listing exposes one. */
    add: z.url().optional(),
    /** Shown under "From Grok Bot Team" on the marketplace. */
    team: z.boolean().default(false),
    /** Shown in the marketplace's featured row. */
    featured: z.boolean().default(false),
    apps: z.array(z.string()).default([]),
  }),
});

const prompts = defineCollection({
  loader: loader('prompts'),
  schema: base.extend({
    // The prompt itself. Kept in front matter so tools get it without parsing Markdown.
    prompt: z.string(),
    // Prompts are original work, so sources are optional here.
    sources: z.array(source).default([]),
    // Apps the prompt expects the Bot to have connected.
    apps: z.array(z.string()).default([]),
  }),
});

// One term per item. `yomi` (hiragana) sorts the index; `docs` lists the official page slugs that
// explain the term, so docs pages can show the terms they use.
const glossary = defineCollection({
  loader: loader('glossary'),
  schema: base.extend({
    yomi: z.string(),
    /** The term as it appears in the (English) app UI or official docs. */
    en: z.string(),
    docs: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  loader: loader('news'),
  schema: base.extend({
    published: z.coerce.date(),
  }),
});

export const collections = { docs, reference, glossary, bots, prompts, news };
