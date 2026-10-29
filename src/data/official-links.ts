// Official destinations Grok Bot users bounce between (X / Grok / Cursor / xAI).
// Shown on the home page; keep every URL to an official domain.
export const OFFICIAL_LINKS: { group: string; links: { label: string; url: string; note?: string }[] }[] = [
  {
    group: 'Grok Bot',
    links: [
      { label: 'Grok Bot 公式', url: 'https://x.ai/bot', note: 'ダウンロード' },
      { label: 'マーケットプレイス', url: 'https://x.ai/bot/marketplace' },
      { label: '公式ドキュメント', url: 'https://docs.x.ai/grok-bot/overview' },
      { label: '更新履歴', url: 'https://x.ai/changelog/bot' },
      { label: '稼働状況', url: 'https://status.x.ai' },
    ],
  },
  {
    group: 'アカウント・料金',
    links: [
      { label: '使用量（X 経由）', url: 'https://grok.com/dashboard' },
      { label: 'Cursor ダッシュボード', url: 'https://cursor.com/dashboard' },
      { label: 'Grok アカウント', url: 'https://accounts.x.ai' },
      { label: 'Grok プランの紐づけ', url: 'https://cursor.com/bot/onboarding' },
    ],
  },
  {
    group: '関連サービス',
    links: [
      { label: 'Grok', url: 'https://grok.com' },
      { label: 'X', url: 'https://x.com' },
      { label: 'Cursor', url: 'https://cursor.com' },
      { label: 'xAI API コンソール', url: 'https://console.x.ai' },
    ],
  },
];
