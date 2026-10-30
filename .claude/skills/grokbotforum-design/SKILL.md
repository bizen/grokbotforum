---
name: grokbotforum-design
description: Design system and UI rules for grokbotforum.com. Use whenever creating or changing any page, layout, component, or style in this repo — home, guides, bots, prompts/recipes, news, article pages — and when deciding how content is structured so it stays machine-readable (MCP, Grok custom bot, llms.txt, JSON).
---

# grokbotforum design system

grokbotforum.com is an **unofficial, information-first knowledge base about Grok bots**
(Japanese explanations of the official docs, Bot roles, prompts, news). It is not a fan site. Every page should feel like
a calm, precise reference tool — in the lineage of grok.com, chatgpt.com, and
platform docs from AI labs — not a marketing landing page.

The long-term goal: the site is useful even when no human visits it. Content is
data first, HTML second. MCP servers, Grok custom bots, and crawlers read the same
source as the pages.

## 1. Principles (in priority order)

1. **Content is the interface.** Text, structure, and sources do the work. No decorative
   imagery, no illustrations of robots, no stock photos.
2. **Monochrome first.** Black, white, and greys. Color appears only to carry meaning
   (link, status, warning) — never to decorate.
3. **Quiet confidence.** Large, tight headlines; small, calm UI chrome. One focal point
   per screen.
4. **Every claim has a source and a date.** Show `updated` and sources visibly on
   every content item. Stale info is worse than no info.
5. **Machine-readable by default.** Anything shown on a page must also exist as
   structured data (see §7).
6. **Japanese only.** The site serves Japanese readers; English readers already have the
   official docs. `/en/` is a gateway (`EnglishGate.astro`) that offers the Japanese site or
   docs.x.ai, and non-Japanese browsers see the same choice once as a dialog. Never claim
   "No.1" without dated, verifiable grounds (景品表示法).

### Never
- Gradient text, glassmorphism cards, glowing borders, neon "AI" purple/blue gradients.
- Cards that lift/scale on hover. Hover = subtle background or text color change only.
- Emoji as icons. Icons: simple 1.5px-stroke SVG, inline, `currentColor`.
- Implying affiliation with xAI or X: never use the Grok logo, xAI marks, or
  "official" wording. Keep the "Unofficial" note in the footer and about page.
- Animations longer than 200ms or anything that moves on scroll except a fade-in.

## 2. Tokens

Define everything as CSS custom properties in `BaseLayout.astro` (`:root`). Components
use tokens only — no raw hex values in components.

```css
:root {
  /* surface */
  --bg: #ffffff;
  --bg-subtle: #f7f7f8;      /* sidebars, code, input fields */
  --bg-hover: #f0f0f1;
  --border: #e6e6e8;
  --border-strong: #d0d0d4;

  /* text */
  --fg: #0d0d0d;
  --fg-muted: #5d5d63;       /* secondary text, meta — passes AA on --bg */
  --fg-subtle: #8e8e93;      /* only for non-essential meta ≥ 14px */

  /* inverse (primary buttons, selected chips) */
  --inverse-bg: #0d0d0d;
  --inverse-fg: #ffffff;

  /* meaning-only color */
  --link: #0d0d0d;           /* links are underlined, not colored */
  --accent: #2f6bff;         /* focus ring, active state indicator */
  --ok: #1a7f37;
  --warn: #b25e00;
  --danger: #c4314b;

  /* type */
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans",
               "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic UI", Meiryo, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  /* space: 4px base */
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px; --s-5: 24px;
  --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px; --s-10: 128px;

  /* radius */
  --r-sm: 6px;   /* chips, inline code */
  --r-md: 12px;  /* inputs, code blocks, list containers */
  --r-lg: 20px;  /* large panels, the search/command box */
  --r-pill: 999px; /* buttons */

  /* layout */
  --w-page: 1200px;
  --w-content: 720px;  /* reading width */
  --nav-h: 56px;

  --ease: cubic-bezier(0.2, 0, 0, 1);
  --dur: 150ms;
}

:root[data-theme="dark"] { /* and @media (prefers-color-scheme: dark) unless data-theme="light" */
  --bg: #0a0a0a;
  --bg-subtle: #141414;
  --bg-hover: #1c1c1c;
  --border: #262626;
  --border-strong: #3a3a3a;
  --fg: #ededed;
  --fg-muted: #a1a1a1;
  --fg-subtle: #6e6e6e;
  --inverse-bg: #ededed;
  --inverse-fg: #0a0a0a;
  --link: #ededed;
  --accent: #6b9bff;
}
```

Dark mode is a peer, not an afterthought — Grok's own UI is dark-first. Support
`prefers-color-scheme` plus a manual toggle persisted in `localStorage` (wrap in try/catch).

## 3. Typography

| Role | Size | Weight | Line-height | Tracking (en) |
|---|---|---|---|---|
| Display (home hero only) | `clamp(40px, 6vw, 72px)` | 600 | 1.05 | -0.035em |
| H1 (page title) | `clamp(32px, 4vw, 48px)` | 600 | 1.1 | -0.025em |
| H2 | 24px | 600 | 1.25 | -0.015em |
| H3 | 18px | 600 | 1.4 | -0.01em |
| Body | 16px | 400 | 1.65 (en) / 1.85 (ja) | 0 |
| UI / meta | 14px | 400–500 | 1.4 | 0 |
| Label / eyebrow | 12px | 500 | 1.3 | 0.02em, uppercase (en only) |

- Headings never bolder than 600. Hierarchy comes from size and space, not weight.
- Japanese: `font-feature-settings: "palt"` on headings only; `word-break: auto-phrase`
  on headings; no letter-spacing tightening; no uppercase transforms.
- Load Inter + JetBrains Mono from Google Fonts with `display=swap`; JP falls back to
  system fonts (no web-font JP — too heavy).
- Numbers in tables/meta: `font-variant-numeric: tabular-nums`.

## 4. Layout

- **Top nav** (56px, sticky, `--bg` at 85% opacity + `backdrop-filter: blur(12px)`,
  1px bottom border only after scroll): wordmark left · section links center/left ·
  search trigger (`⌘K`), theme toggle, language switch right. Mobile: wordmark +
  search + menu button; menu is a full-screen sheet.
- **Wordmark**: text only, `grokbotforum` in 600 weight, optionally a small
  monochrome glyph. No Grok/xAI marks.
- **Home**: one centered hero — short headline, one-line subtitle, and a large
  search/command box (`--r-lg`, `--bg-subtle`, like the chat input on grok.com /
  chatgpt.com) with suggestion chips below. Then dense, scannable sections:
  "Latest", "Guides", "Bots", "Prompts". Each section = heading + "View all →" + list.
- **Index pages** (guides, bots, prompts, news): left filter rail (≥1024px) or filter
  chips (mobile) + list. Prefer **lists with dividers** over card grids. A row shows
  title, one-line summary, tags, updated date.
- **Detail pages**: reading column `--w-content`; on ≥1200px a right-side "On this
  page" TOC and a meta panel (updated, sources, language versions, "Copy as
  Markdown", "Open JSON").
- Section spacing: `--s-9` desktop / `--s-8` mobile between major sections.
- Mobile gutter 16px; no horizontal scroll at 360px width.

## 5. Components

- **Button**: pill. Primary = `--inverse-bg`/`--inverse-fg`. Secondary = transparent
  with `--border-strong`. Height 40px (36px compact). Hover: opacity .85 or `--bg-hover`.
- **Chip / tag**: 28px tall, `--r-pill`, `--bg-subtle`, 13px text. Selected = inverse.
- **Search box**: 56–64px tall, `--r-lg`, placeholder in `--fg-subtle`, `⌘K` hint at right.
- **List row**: full-width link, padding `--s-4` 0, bottom border `--border`; hover
  changes title to underline — nothing moves.
- **Code / prompt block**: `--bg-subtle`, `--r-md`, mono 14px, header bar with label
  and a "Copy" button. Prompts are the product — make copying effortless.
- **Callout**: left 2px border in meaning color, no fill or a very faint one.
- **Meta line**: `更新 2026/10/30 · 3 件の出典` in 14px `--fg-muted`.
- **Focus**: `outline: 2px solid var(--accent); outline-offset: 2px` on every
  interactive element. Touch targets ≥ 44px, but don't force `min-height` on inline
  text links.

## 6. Motion

- Transitions: `color`, `background-color`, `border-color`, `opacity` at `--dur`.
- Page sections may fade in once (opacity 0→1, translateY 8px→0, 300ms). Nothing else.
- Respect `prefers-reduced-motion`: disable all of the above.

## 7. Content & machine-readability

Content lives in Astro content collections (`src/content/<collection>/<lang>/<slug>.md`,
schemas in `src/content.config.ts`). Language comes from the folder; the same slug in
`ja/` is the only locale. Every item has:

```yaml
title: ...
summary: one sentence      # used in lists, OG, JSON, MCP tool results
tags: [...]
updated: 2026-10-30        # required
sources:                   # required (optional for prompts), real URLs
  - url: https://...
    title: ...
```

Per collection: `bots` are Japanese guides to Bots on the official Marketplace (x.ai/bot/marketplace) —
`creator`, `marketplace`, `add`, `team`, `featured`, `apps`, paraphrased from the listing; first-message
recipes of our own live in `prompts`; `prompts` add `prompt` (the text
to copy); `news` add `published`. The slug is the stable id — never rename a
published file.

Write content only from primary sources (docs.x.ai/grok-bot/…, official posts). Paraphrase;
don't copy docs verbatim. If a fact can't be verified, leave it out.

**`docs` collection (Japanese only)** — the official Grok Bot docs have no Japanese edition,
so `src/content/docs/ja/<slug>.md` explains each official page, with `<slug>` equal to the
official path segment and `official:` set to its URL. Translation policy (decided
2026-10-30): docs.x.ai states no license, so default copyright applies — **no full or
line-by-line translation**. Explain in our own words, restructure freely, keep any quote
short and clearly marked, and always link the original. A full translation needs written
permission from xAI (legal@x.ai). The official table of contents lives in
`src/data/official-docs.ts`; pages without an explanation link out with ↗.

**`glossary` collection** — one Grok Bot term per item (`src/content/glossary/ja/<slug>.md`), with
`yomi` (hiragana reading, sorts the kana-row index), `en` (the English UI name, also searchable),
and `docs` (official page slugs that explain it). Docs pages list the terms whose `docs` include
them; term pages link back. Write definitions only from what our docs explanations already state.

**Docs pages read as a book**: a left sidebar in the official order (`src/data/official-docs.ts`)
on ≥1200px, a collapsible table of contents below that, and previous / next links at the end.

**Home** (`HomeJa.astro`) is a dense, Yahoo! JAPAN–style
portal (search tabs, timestamped headlines with NEW badges, official-docs rail, quick-facts
box). Borrow Yahoo's information
density, never its colors, icons, or ads. Quick facts live in `src/data/quick-facts.ts` with
a source per fact and a `checked` date.

For every collection, also emit:
- `/<collection>.json` (all languages) and `<item URL without trailing slash>.json`
  (e.g. `/bots/chief-of-staff.json`) — the same fields plus `body` as Markdown.
- `/index.json` — every item's metadata; also powers on-site search.
- `/llms.txt` (index of sections and items) and `/llms-full.txt` (all content).
- schema.org JSON-LD on detail pages (`Article`, `HowTo`, `SoftwareApplication` as fits).
- Stable anchors on every heading (`id` from slug) so tools can deep-link.

These endpoints are the contract a future MCP server and Grok custom bot will read.
Don't rename fields without updating every consumer.

### Markdown gotcha (Japanese)

Bold can't close right after full-width punctuation when text follows: `**…）**が` renders the
asterisks literally. Keep closing punctuation outside the bold (`**…**（…）が`). Astro 7's default
Markdown processor doesn't run remark plugins, so there is no plugin fix.

## 8. Writing style (UI copy)

- Short, plain, declarative. Sentence case in English. No exclamation marks.
- Japanese UI copy uses です・ます sparingly; labels are nouns (「ガイド」「ボット」「プロンプト」).
- Never "awesome", "ultimate", "revolutionary". Let usefulness speak.

## 9. Checklist before finishing a UI change

- [ ] Looks right in light **and** dark, ja **and** en, at 360px and 1440px.
- [ ] Only tokens used; no new raw colors.
- [ ] Every new content field exists in the schema and the JSON endpoint.
- [ ] Sources and updated date visible.
- [ ] Keyboard: tab order sane, focus visible, `⌘K` works.
- [ ] `npm run build` passes with no warnings.
