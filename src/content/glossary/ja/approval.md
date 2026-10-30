---
title: "承認"
summary: 重要な操作の前に、Bot が操作内容を示して許可を求める仕組み。Allow once・Always allow・Deny から選ぶ。
yomi: しょうにん
en: "Approvals"
docs: [security, faq]
tags: [セキュリティ]
updated: 2026-10-31
sources:
  - url: https://docs.x.ai/grok-bot/security
    title: Approvals, security, and privacy — Grok Bot
  - url: https://docs.x.ai/grok-bot/faq
    title: FAQ — Grok Bot
---

- **Allow once**：今回だけ許可
- **Always allow**：同じ操作を今後も許可するルールを保存
- **Deny**：止める。次にメッセージを送るまで再試行しません
- ルーティンや他の Bot からの承認依頼は約 30 分で期限切れになります
- 対象や影響がわからない操作は承認しないこと。お金やアカウントに関わる操作は Always allow より Allow once

何に承認が必要かは [Auto Review](/glossary/auto-review/) が判定します。
