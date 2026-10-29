---
title: "tinkabot"
summary: "API を Cursor / Agent 用のプラグイン（MCP とスキル）に包んで、公開まで手伝う Bot。データの形を決め、最小の構成を作り、手元で動作確認してから。"
tags: ["エンジニアリング", "MCP"]
creator: "Lauren Tan"
marketplace: https://x.ai/bot/marketplace/bots/tinkabot
add: https://x.ai/bot/-hmCmHB0ynJGvSKxeINfS
apps: []
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/tinkabot
    title: "tinkabot — Grok Bot Marketplace"
---

## できること

1. まず API のデータの形を決める
2. 動く最小限のプラグイン構成を作る（マニフェスト、スキル、必要なら MCP の設定）
3. 認証のいらない公開 HTTP の MCP サーバーは、必要になるまで依存ライブラリなしで作る
4. 手元で動作を確認する
5. あなたがその会社・サービスの関係者かを一度だけ聞き、関係者なら Cursor Marketplace、そうでなければ cursor.directory への公開に回す

## 承認なしにはしないこと

- マーケットプレイスへの公開（関係者かどうか答えたあとでも、公開には明確な指示が必要）

## 注意

掲載ページによると、Grok Bot は `~/.cursor/plugins/local` のローカルプラグインを読み込まず、Cursor のダッシュボードかマーケットプレイスのプラグインだけを読み込みます。

自分のサービスを Bot から使えるようにしたい人向け。Grok Bot Forum の [MCP サーバー](/agents/)のような仕組みを自分でも作れます。
