---
title: "ネットワーク制御"
summary: Bot のコンピューターがどこと通信できるかを、チームで制限する Enterprise の設定。
yomi: ねっとわーくせいぎょ
en: "Network Controls"
docs: [security, teams-and-enterprises]
tags: [チーム, セキュリティ]
updated: 2026-10-31
sources:
  - url: https://docs.x.ai/grok-bot/security
    title: Approvals, security, and privacy — Grok Bot
  - url: https://docs.x.ai/grok-bot/teams-and-enterprises
    title: Grok Bot for teams and enterprises
---

- 「すべて許可」「既定 + 許可リスト」「許可リストのみ」から選びます。未設定はすべて許可
- 変更は動いているコンピューターに約 1 分で反映されます
- アプリをブロックしても、そのサービスの Web サイトは塞がりません。両方を塞ぐにはネットワーク方針も必要です
- リモートの MCP サーバーは **Apply to MCP servers** をオンにしないと対象になりません
