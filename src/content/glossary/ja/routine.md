---
title: "ルーティン"
summary: 1 つの Bot に「いつワークフローを動かすか」を教えるもの。スケジュールかイベント（トリガー）で起動し、クラウドで動く。
yomi: るーてぃん
en: "Routine"
docs: [skills-routines-and-automations]
tags: [自動化]
updated: 2026-10-31
sources:
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
---

- スケジュールは自然な言葉で伝え、**When to run** で保存内容を確認します
- 新しいルーティンは作成時には動かず、次の予定時刻を待ちます。すぐ試すなら **Test**（使用量を消費します）
- 1 つの Bot に 50 個まで、最短間隔は 5 分、1 時間あたりの実行は全体で 300 回まで
- 上限を超えると `Automation run rate limit exceeded` で失敗します
- ルーティンから送るメールは常に下書き止まりです

数値の一覧は[上限値まとめ](/reference/limits/)にあります。
