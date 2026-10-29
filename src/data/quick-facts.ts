// Frequently looked-up facts, shown in the home page sidebar and published in /index.json.
// Re-check against `source` whenever `checked` is more than a month old.
export const QUICK_FACTS_CHECKED = '2026-10-30';

export const QUICK_FACTS: { label: string; value: string; source: string }[] = [
  {
    label: '対象プラン',
    value: 'X Subscription の Premium / Super / Ultra ほか',
    source: 'https://docs.x.ai/grok-bot/overview',
  },
  {
    label: '対応端末',
    value: 'macOS・Windows・Linux／iPhone・Android',
    source: 'https://docs.x.ai/grok-bot/overview',
  },
  {
    label: '使用量',
    value: '週ごとにリセット',
    source: 'https://docs.x.ai/grok-bot/overview',
  },
  {
    label: 'X で @bot',
    value: 'EU・英国・豪州など一部地域は未対応',
    source: 'https://docs.x.ai/grok-bot/tag-on-x',
  },
  {
    label: 'ルーティン',
    value: '1 Bot あたり 50 件、最短 5 分間隔',
    source: 'https://docs.x.ai/grok-bot/skills-routines-and-automations',
  },
  {
    label: '実演で教える',
    value: '画面操作を最大 10 分まで記録',
    source: 'https://docs.x.ai/grok-bot/skills-routines-and-automations',
  },
];
