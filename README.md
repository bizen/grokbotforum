# grokbotforum.com

A news site that bridges Grok Bot news between Japan and the world. Global Grok Bot news is published in Japanese; Japan-origin Grok Bot news is published in English plus the Japanese original.

## 🚀 Technology

- **Framework**: Astro (static site generator)
- **Deployment**: Vercel
- **Languages**: Japanese (default) and English

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── articles/    # Article markdown files
│   │   │   ├── ja/      # Japanese articles
│   │   │   └── en/      # English articles
│   │   └── config.ts    # Content collection configuration
│   ├── data/
│   │   └── recommended-bots.json  # Recommended bots data
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── articles/
│   │   │   └── [slug].astro     # Article page template
│   │   ├── en/                   # English pages
│   │   ├── index.astro           # Japanese home page
│   │   ├── bots.astro            # Japanese bots page
│   │   ├── templates.astro       # Japanese templates page
│   │   ├── feed.xml.ts           # Japanese RSS feed
│   │   └── sitemap.xml.ts        # Sitemap
│   └── utils/
│       └── i18n.ts               # Internationalization utilities
├── astro.config.mjs
├── package.json
└── vercel.json
```

## ✍️ Adding Content

### Adding an Article

Articles are markdown files stored in `src/content/articles/ja/` (Japanese) or `src/content/articles/en/` (English).

#### Step 1: Create the markdown file

For a **Japanese article**, create a file in `src/content/articles/ja/`:

```bash
# Example: src/content/articles/ja/my-article-slug.md
```

For an **English article**, create a file in `src/content/articles/en/`:

```bash
# Example: src/content/articles/en/my-article-slug.md
```

#### Step 2: Add front matter and content

```markdown
---
title: "Article Title"
date: 2026-10-29
language: ja
description: "Optional short description for SEO and previews"
translationSlug: "my-article-slug"  # Optional: slug of the translation in the other language
sources:
  - "https://example.com/source1"
  - "https://example.com/source2"
---

Your article content goes here in Markdown format.

## Headings

Support all standard Markdown features:

- Lists
- **Bold** and *italic*
- [Links](https://example.com)
- Images, code blocks, etc.
```

**Important fields:**
- `title`: The article title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `language`: Either `ja` or `en` (required)
- `sources`: Array of source URLs (required, must not be empty)
- `translationSlug`: If this article has a translation, provide the slug (filename without extension) of the translated version
- `description`: Optional description for SEO and article previews

#### Step 3: Build and deploy

The article will automatically appear on the home page (newest first) and be accessible at:
- Japanese: `https://grokbotforum.com/articles/my-article-slug/`
- English: `https://grokbotforum.com/en/articles/my-article-slug/`

### Adding a Recommended Bot

Recommended bots are stored in `src/data/recommended-bots.json`.

#### Edit the JSON file

Add a new entry to the array:

```json
[
  {
    "name": "Bot Name",
    "job": "What this bot does in one sentence",
    "link": "https://link-to-template-or-source.com"
  }
]
```

**Fields:**
- `name`: The bot's name (required)
- `job`: A short description of what the bot does (required)
- `link`: URL to the bot's template, source code, or documentation (required)

The bot will automatically appear on:
- Japanese: `https://grokbotforum.com/bots/`
- English: `https://grokbotforum.com/en/bots/`

## 🛠️ Development

### Prerequisites

- Node.js 22.23.4 or higher
- npm 10.9.9 or higher

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Visit `http://localhost:4321`

### Build for production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## 🚢 Deployment to Vercel

### Initial Setup

1. Push this repository to GitHub
2. Connect the repository to Vercel
3. Vercel will automatically detect the Astro framework
4. Use these settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add the custom domain `grokbotforum.com` in Vercel's domain settings

### Automatic Deployments

Every push to the `main` branch will trigger an automatic deployment.

## 📄 License

Copyright © 2026 Grok Bot Forum
