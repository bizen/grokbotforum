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

// A Bot "role": one focused job for a Grok Bot, plus the first message that sets it up.
const bots = defineCollection({
  loader: loader('bots'),
  schema: base.extend({
    job: z.string(),
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
  }),
});

const news = defineCollection({
  loader: loader('news'),
  schema: base.extend({
    published: z.coerce.date(),
  }),
});

export const collections = { docs, reference, bots, prompts, news };
