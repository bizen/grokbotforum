# grokbotforum.com

An unofficial, source-cited knowledge base about [Grok Bot](https://docs.x.ai/grok-bot/overview): guides, bot roles, prompts, and news — in Japanese (default) and English.

The site is built to be useful without a human in the loop. Every page is also published as JSON and through `llms.txt`, so Grok Bots, MCP servers, and crawlers can read the same content people do.

Not affiliated with xAI or X Corp.

## Stack

- [Astro](https://astro.build) (static output), deployed on Vercel
- No UI framework; plain CSS with design tokens in `src/styles/global.css`
- Design rules: `.claude/skills/grokbotforum-design/SKILL.md`

## Structure

```
src/
├── content/                 # Markdown content, one folder per collection
│   ├── docs/ja/             # Japanese explanations of docs.x.ai/grok-bot (one per official page)
│   ├── guides/{ja,en}/
│   ├── bots/{ja,en}/        # Bot roles: a job + the first message that sets it up
│   ├── prompts/{ja,en}/
│   └── news/{ja,en}/
├── content.config.ts        # Schemas for every collection
├── data/                    # Official docs TOC, quick facts
├── lib/
│   ├── content.ts           # Collection helpers + the public JSON record shape
│   ├── i18n.ts              # Locales, paths, UI strings
│   └── search.ts            # Client-side ⌘K search over /index.json
├── components/
├── layouts/BaseLayout.astro
└── pages/
    ├── [...locale]/         # Every HTML page, for ja (/) and en (/en/)
    ├── [collection].json.ts # /guides.json, /bots.json, ...
    ├── index.json.ts        # /index.json — metadata for every item
    ├── llms.txt.ts          # /llms.txt
    ├── llms-full.txt.ts     # /llms-full.txt
    └── sitemap.xml.ts
```

## Adding content

Create `src/content/<collection>/<lang>/<slug>.md`. Use the same slug in `ja/` and `en/` to link translations. The slug becomes the URL and the stable id, so don't rename published files.

Every item needs:

```yaml
---
title: Getting started with Grok Bot
summary: One sentence. Shown in lists, search, JSON, and llms.txt.
tags: [Basics, Setup]
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/get-started
    title: Get started — Grok Bot
---
```

Extra fields by collection (see `src/content.config.ts`):

| Collection | Extra fields |
|---|---|
| `docs` (ja only) | `official`: URL of the official page. Explain in your own words — no verbatim translation (docs.x.ai has no license). |
| `guides` | `level`: `beginner` \| `intermediate` \| `advanced` |
| `bots` | `job` (first message, required), `apps` |
| `prompts` | `prompt` (required); `sources` optional |
| `news` | `published` (required) |

## Machine-readable endpoints

| URL | Contents |
|---|---|
| `/llms.txt` | Index for LLMs ([llmstxt.org](https://llmstxt.org)) |
| `/llms-full.txt` | All content as plain text |
| `/index.json` | Metadata for every item |
| `/<collection>.json` | Every item in a collection, with Markdown body |
| `<item URL>.json` | One item, e.g. `/en/bots/chief-of-staff.json` |
| `/feed.xml`, `/en/feed.xml` | RSS |

## Development

Requires Node.js ≥ 22.23.4.

```bash
npm install
npx astro dev --background   # http://localhost:4321
npm run build
```
