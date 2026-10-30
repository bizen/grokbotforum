---
title: "Vault"
summary: Bot が使うログイン情報やカードを保存しておく場所。値は参照で入力され、モデルには渡らない。
yomi: ぼると
en: "Vault"
docs: [computer-and-apps, security, bots]
tags: [セキュリティ]
updated: 2026-10-31
sources:
  - url: https://docs.x.ai/grok-bot/computer-and-apps
    title: Use the computer and apps — Grok Bot
  - url: https://docs.x.ai/grok-bot/security
    title: Approvals, security, and privacy — Grok Bot
  - url: https://docs.x.ai/grok-bot/bots
    title: Create and manage Bots — Grok Bot
---

- ログインは Vault → 接続済みのパスワードマネージャー（1Password）→ [Secure Form](/glossary/secure-form/) の順に試されます
- Bot の記憶には、ログイン情報・カード・住所や電話番号を残しません。これらは Vault に保存します
- Vault のカードは支払いのたびの承認なしで使われます。毎回承認したいなら保存しないこと
