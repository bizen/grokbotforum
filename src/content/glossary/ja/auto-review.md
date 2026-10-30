---
title: "Auto Review"
summary: 危険になり得る操作を、実行前に「進める・承認を求める・拒否する」に振り分ける独立した審査モデル。
yomi: おーとれびゅー
en: "Auto Review"
docs: [security, teams-and-enterprises]
tags: [セキュリティ]
updated: 2026-10-31
sources:
  - url: https://docs.x.ai/grok-bot/security
    title: Approvals, security, and privacy — Grok Bot
  - url: https://docs.x.ai/grok-bot/teams-and-enterprises
    title: Grok Bot for teams and enterprises
---

- 対象：シェルコマンド、アプリの呼び出し、画面操作、ルーティン、委任など
- 個人のルールは **設定 → General → Auto-review** の **Custom Rules** で追加します
  - **Ask first**：必ず止まる
  - **Allow automatically**：ほかに止める理由がなければ進める
- 衝突したら Ask first が優先。ルールは狭く具体的に書きます
- 記憶の書き込みや多くの設定変更は審査の対象外です
- Enterprise では管理者が **Enforce Auto-review** でオフにできなくできます

送信・公開・削除・購入・本番の変更には、狭い Ask first ルールを入れておくのがおすすめです。
