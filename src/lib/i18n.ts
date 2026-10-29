export const LANGS = ['ja', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ja';

export const LANG_LABEL: Record<Lang, string> = { ja: '日本語', en: 'English' };

/** `/guides/` -> `/guides/` (ja) or `/en/guides/` (en). */
export function localizedPath(path: string, lang: Lang): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** Route param for `[...locale]` pages. */
export function localeParam(lang: Lang): string | undefined {
  return lang === DEFAULT_LANG ? undefined : lang;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'ja' ? 'en' : 'ja';
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: lang === 'ja' ? 'numeric' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

const strings = {
  ja: {
    'site.name': 'grokbotforum',
    'site.description':
      'Grok Bot のガイド、ボット、プロンプト、ニュースを出典つきで整理する非公式ナレッジベース。',
    'nav.search': '検索',
    'nav.theme': 'テーマを切り替え',
    'nav.menu': 'メニュー',
    'nav.about': 'このサイトについて',
    'home.eyebrow': '非公式 · Grok Bot ナレッジベース',
    'home.title': 'Grok Bot の知識を、ひとつの場所に。',
    'home.lede':
      'ガイド、ボット、プロンプト、ニュースを出典つきで整理しています。人にも、AI エージェントにも読みやすく。',
    'home.searchPlaceholder': 'ドキュメント、ボット、プロンプトを検索',
    'home.agents.title': 'エージェントのために',
    'home.agents.lede':
      'すべてのコンテンツは構造化データとしても公開しています。Grok Bot や MCP サーバーから、そのまま読めます。',
    'common.viewAll': 'すべて見る',
    'common.updated': '更新',
    'common.published': '公開',
    'common.sources': '出典',
    'common.sourceCount': '件の出典',
    'common.sourcesCount': '件の出典',
    'common.items': '件',
    'common.all': 'すべて',
    'common.empty': 'まだありません。',
    'common.onThisPage': 'このページ',
    'common.copy': 'コピー',
    'common.copied': 'コピーしました',
    'common.copyMarkdown': 'Markdown をコピー',
    'common.openJson': 'JSON を開く',
    'common.otherLang': 'English 版',
    'common.open': '開く',
    'common.prompt': 'プロンプト',
    'common.firstMessage': '最初のメッセージ',
    'common.apps': '使うアプリ',
    'docs.notice': '非公式の日本語解説です。正確な内容は公式ドキュメント（英語）で確認してください。',
    'docs.official': '公式ページ',
    'portal.updated': '更新',
    'portal.more': 'もっと見る',
    'portal.officialToc': '公式ドキュメント',
    'portal.officialTocNote': '↗ は未解説（公式ページへ）',
    'portal.facts': 'Grok Bot 早見表',
    'portal.checked': '確認日',
    'portal.firstMessages': '最初のメッセージ集',
    'portal.latest': '新着',
    'search.noResults': '一致する項目はありません',
    'search.hint': '↑↓ で移動、Enter で開く、Esc で閉じる',
    'footer.unofficial':
      '非公式サイトです。xAI および X Corp. とは関係ありません。Grok は xAI の商標です。',
    'footer.data': 'データ',
    'footer.site': 'サイト',
  },
  en: {
    'site.name': 'grokbotforum',
    'site.description':
      'An unofficial, source-cited knowledge base of Grok Bot guides, bots, prompts, and news.',
    'nav.search': 'Search',
    'nav.theme': 'Toggle theme',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'home.eyebrow': 'Unofficial · Grok Bot knowledge base',
    'home.title': 'Everything useful about Grok Bot, in one place.',
    'home.lede':
      'Guides, bots, prompts, and news — organized and source-cited. Readable by people and by agents.',
    'home.searchPlaceholder': 'Search guides, bots, prompts',
    'home.agents.title': 'Built for agents',
    'home.agents.lede':
      'Every page is also published as structured data, so Grok Bots and MCP servers can read it directly.',
    'common.viewAll': 'View all',
    'common.updated': 'Updated',
    'common.published': 'Published',
    'common.sources': 'Sources',
    'common.sourceCount': 'source',
    'common.sourcesCount': 'sources',
    'common.items': 'items',
    'common.all': 'All',
    'common.empty': 'Nothing here yet.',
    'common.onThisPage': 'On this page',
    'common.copy': 'Copy',
    'common.copied': 'Copied',
    'common.copyMarkdown': 'Copy as Markdown',
    'common.openJson': 'Open JSON',
    'common.otherLang': '日本語版',
    'common.open': 'Open',
    'common.prompt': 'Prompt',
    'common.firstMessage': 'First message',
    'common.apps': 'Apps',
    'docs.notice': 'Unofficial Japanese explanation. Check the official docs for authoritative details.',
    'docs.official': 'Official page',
    'portal.updated': 'Updated',
    'portal.more': 'More',
    'portal.officialToc': 'Official docs',
    'portal.officialTocNote': '↗ links to the official page',
    'portal.facts': 'Grok Bot at a glance',
    'portal.checked': 'Checked',
    'portal.firstMessages': 'First messages',
    'portal.latest': 'New',
    'search.noResults': 'No matching items',
    'search.hint': '↑↓ to move, Enter to open, Esc to close',
    'footer.unofficial':
      'Unofficial. Not affiliated with xAI or X Corp. Grok is a trademark of xAI.',
    'footer.data': 'Data',
    'footer.site': 'Site',
  },
} as const;

export type StringKey = keyof (typeof strings)['ja'];

export function t(lang: Lang, key: StringKey): string {
  return strings[lang][key];
}
