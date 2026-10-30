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

// Shortcuts beside the home logo, Yahoo! JAPAN–style. Each mark is the service's own, shown only
// to link to it (nominative use); Grok Bot uses our own mascot drawing. Monochrome, currentColor.
// Sources: X and Cursor from Simple Icons, Grok from grok.com's favicon.
export const SHORTCUTS: {
  label: string;
  url: string;
  side: 'left' | 'right';
  icon: { viewBox: string; paths: string[] } | 'bot';
}[] = [
  { label: 'X', url: 'https://x.com', side: 'left', icon: { viewBox: '0 0 24 24', paths: ['M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z'] } },
  { label: 'Grok', url: 'https://grok.com', side: 'left', icon: { viewBox: '56 56 400 400', paths: ['M210.484 312.759L343.465 210.383C349.984 205.364 359.302 207.322 362.408 215.117C378.758 256.231 371.454 305.64 338.925 339.563C306.397 373.487 261.137 380.927 219.768 363.983L174.577 385.803C239.394 432.008 318.104 420.581 367.289 369.251C406.303 328.564 418.386 273.104 407.088 223.091L407.19 223.198C390.807 149.726 411.218 120.359 453.03 60.3072C454.02 58.8833 455.01 57.4595 456 56L400.978 113.382V113.204L210.45 312.794', 'M183.042 337.641C136.519 291.294 144.54 219.567 184.236 178.203C213.59 147.59 261.683 135.096 303.666 153.464L348.755 131.75C340.632 125.627 330.221 119.042 318.275 114.414C264.277 91.2407 199.63 102.774 155.735 148.516C113.513 192.549 100.236 260.254 123.036 318.027C140.069 361.206 112.148 391.748 84.0229 422.575C74.0561 433.503 64.0553 444.431 56 456L183.007 337.677'] } },
  { label: 'Grok Bot', url: 'https://x.ai/bot', side: 'right', icon: 'bot' },
  { label: 'Cursor', url: 'https://cursor.com', side: 'right', icon: { viewBox: '0 0 24 24', paths: ['M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23'] } },
];
