// The site is Japanese-only. English visitors get a gateway page at /en/ (see src/pages/en/index.astro).
export const LANGS = ['ja'] as const;
export type Lang = (typeof LANGS)[number];

/** Kept as a seam in case another locale is added later. */
export function localizedPath(path: string, _lang: Lang = 'ja'): string {
  return path;
}

export function formatDate(date: Date, _lang: Lang = 'ja'): string {
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

const strings = {
  ja: {
    'site.name': 'Grok Bot Forum',
    'site.description':
      'Grok Bot の公式ドキュメント日本語解説、マーケットプレイスの Bot 紹介、プロンプトを出典つきで整理する非公式ナレッジベース。',
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
    'common.shareX': 'X でシェア',
    'common.openJson': 'JSON を開く',
    'common.open': '開く',
    'common.prompt': 'プロンプト',
    'common.apps': '使うアプリ',
    'docs.notice': '非公式の日本語解説です。正確な内容は公式ドキュメント（英語）で確認してください。',
    'docs.official': '公式ページ',
    'bots.creator': '作者',
    'bots.source': '提供',
    'bots.team': 'Grok Bot チーム',
    'bots.community': 'コミュニティ',
    'bots.add': 'Grok Bot に追加',
    'bots.marketplace': 'マーケットプレイスで見る',
    'bots.notice':
      'マーケットプレイスの掲載内容を日本語で解説した非公式ページです。Bot は英語で作られているので、日本語で使うなら追加後に「日本語で返答して」と伝えて覚えてもらいましょう。',
    'portal.updated': '更新',
    'portal.more': 'もっと見る',
    'portal.officialToc': '公式ドキュメント',
    'portal.officialTocNote': '↗ は未解説（公式ページへ）',
    'portal.facts': 'Grok Bot 早見表',
    'portal.checked': '確認日',
    'portal.marketplace': 'マーケットプレイスの注目 Bot',
    'portal.latest': '新着',
    'search.noResults': '一致する項目はありません',
    'search.hint': '↑↓ で移動、Enter で開く、Esc で閉じる',
    'footer.unofficial':
      '非公式サイトです。xAI および X Corp. とは関係ありません。Grok は xAI の商標です。',
    'footer.data': 'データ',
    'footer.site': 'サイト',
  },
} as const;

export type StringKey = keyof (typeof strings)['ja'];

export function t(lang: Lang, key: StringKey): string {
  return strings[lang][key];
}
