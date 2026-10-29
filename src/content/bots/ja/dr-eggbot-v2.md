---
title: "dr eggbot (v2)"
summary: "Grok Bot を設計して作ってくれる Bot。いくつか質問に答えるだけで、仕事を 1 つに絞り「やらないこと」まで決めた Bot を作成する。"
tags: ["注目", "Bot づくり"]
creator: "Lauren Tan"
marketplace: https://x.ai/bot/marketplace/bots/dr-eggbot-v2
add: https://x.ai/bot/_jOdbfkB16zxu7MRcmReE
featured: true
apps: []
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/dr-eggbot-v2
    title: "dr eggbot (v2) — Grok Bot Marketplace"
---

## できること

- 好みについていくつか質問し、その答えから新しい Bot を作る
- 各 Bot に**仕事を 1 つ・話し方を 1 つ**だけ与え、「下書きはするが送らない」「調べるが投稿しない」のような**やらないこと**を明示する
- コーディング用の Bot には、独自の厳しい作業基準（poteto mode）を適用する
- 平日朝に会話のつまずきを、毎週月曜にトークン消費のムダを点検する 2 つのルーティンを持つ。提案がなければ黙っている

## 承認なしにはしないこと

- 点検レポートから、あなたが選ぶ前に何かを作ること

## はじめ方

1. 追加後、最初のセットアップ（pstack の準備）を実行する
2. 実際のリポジトリがあれば、検証用スキルを作る
3. 2 つの点検ルーティンがあるか確認し、なければ作る

「1 つの Bot に 1 つの仕事」は公式も勧める考え方です（[Bot の使い方](/docs/bots/)）。Bot を増やしたいけれど設計に迷う人向け。
