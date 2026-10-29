// Table of contents of the official Grok Bot docs (docs.x.ai/grok-bot/...).
// Pages with a matching item in src/content/docs/ja/<slug>.md link to our Japanese explanation;
// the rest link straight to the official page.
export const OFFICIAL_DOCS_BASE = 'https://docs.x.ai/grok-bot/';

export const OFFICIAL_DOCS: { group: string; pages: { slug: string; title: string }[] }[] = [
  {
    group: 'はじめに',
    pages: [
      { slug: 'overview', title: 'Grok Bot とは' },
      { slug: 'get-started', title: 'はじめる' },
      { slug: 'use-cases', title: 'ユースケース' },
    ],
  },
  {
    group: '使い方',
    pages: [
      { slug: 'bots', title: 'Bot の使い方' },
      { slug: 'computer-and-apps', title: 'コンピューターとアプリ' },
      { slug: 'chat-and-collaboration', title: 'チャットと共同作業' },
      { slug: 'skills-routines-and-automations', title: 'スキルとルーティン' },
      { slug: 'shared-bots', title: '共有 Bot' },
      { slug: 'mobile', title: 'モバイル' },
      { slug: 'tag-on-x', title: 'X で @bot' },
    ],
  },
  {
    group: '管理者向け',
    pages: [
      { slug: 'teams-and-enterprises', title: 'チームと企業' },
      { slug: 'security', title: 'セキュリティ' },
      { slug: 'deployment', title: '配布' },
      { slug: 'faq', title: 'FAQ' },
    ],
  },
];
