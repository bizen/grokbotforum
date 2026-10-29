export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'ja';

export const translations = {
  ja: {
    'site.title': 'Grok Bot Forum',
    'site.description': 'Grok Botのニュースを日本と世界で共有するサイト',
    'nav.home': 'ホーム',
    'nav.bots': 'おすすめbot',
    'nav.templates': 'テンプレートとレシピ',
    'nav.language': '言語',
    'home.title': '最新記事',
    'home.empty': 'まだ記事はありません',
    'article.sources': '出典',
    'article.readMore': '続きを読む',
    'bots.title': 'おすすめbot',
    'bots.empty': 'まだbotの紹介はありません',
    'bots.job': '役割',
    'templates.title': 'テンプレートとレシピ',
    'templates.empty': 'まだテンプレートはありません',
  },
  en: {
    'site.title': 'Grok Bot Forum',
    'site.description': 'A news site bridging Grok Bot news between Japan and the world',
    'nav.home': 'Home',
    'nav.bots': 'Recommended Bots',
    'nav.templates': 'Templates & Recipes',
    'nav.language': 'Language',
    'home.title': 'Latest Articles',
    'home.empty': 'No articles yet',
    'article.sources': 'Sources',
    'article.readMore': 'Read more',
    'bots.title': 'Recommended Bots',
    'bots.empty': 'No bots yet',
    'bots.job': 'What it does',
    'templates.title': 'Templates & Recipes',
    'templates.empty': 'No templates yet',
  },
} as const;

export function t(lang: Language, key: keyof typeof translations['ja']): string {
  return translations[lang][key];
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === 'ja' ? 'en' : 'ja';
}
