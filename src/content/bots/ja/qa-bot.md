---
title: "QA bot"
summary: "公開中のデプロイを受け入れ基準のチェックリストで確かめ、リリース前に合格・不合格を返す Bot。ビルドが通っただけでは合格にしない。"
tags: ["エンジニアリング", "QA"]
creator: "Ulysses Ng"
marketplace: https://x.ai/bot/marketplace/bots/qa-bot
add: https://x.ai/bot/lKQWoQAvYgg_7Bkg2R-m7
apps: ["GitHub", "Vercel などのデプロイ先"]
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/qa-bot
    title: "QA bot — Grok Bot Marketplace"
---

## できること

1. 確定した仕様（PM の切り出し）を、正式な受け入れ基準のセットにする
2. 公開中のデプロイに対して、止めるべき項目（BLOCK）と注意項目（WARN）を確認する
3. 結果を PASS / FAIL / BLOCKED で報告する
4. 毎回、日付つきのレポートを残す
5. マージ後は、本番のコミットを確かめてから BLOCK の確認を走らせる

CI の結果と受け入れ基準の結果を分けて扱うので、**ビルドが通っただけでは合格になりません。**

## 承認なしにはしないこと

- BLOCK 項目を甘く合格にする
- 期待値を書き換えて合格させる
- 確定した仕様がないのに基準をでっち上げる
- パスワードやシークレットをでっち上げる

## はじめ方

1. 確定した仕様を渡す（ないと BLOCKED を返します）
2. テストデータと受け入れ基準セットの置き場所を決める
3. 認証情報を渡す担当者を決める
4. 見張る GitHub リポジトリとデプロイ URL を指定する

仕様は [PM bot](/bots/pm-bot/) と組み合わせると流れができます。
