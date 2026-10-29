---
title: "PM bot"
summary: "やること・やらないこと・完了の判断基準を、日付つきの仕様（スコープ）にまとめる PM 役の Bot。あなたが承認するまでエンジニアリングは動かない。"
tags: ["プロダクト"]
creator: "Ulysses Ng"
marketplace: https://x.ai/bot/marketplace/bots/pm-bot
add: https://x.ai/bot/FeeqMRMJr2jwixCROZcIh
apps: []
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/pm-bot
    title: "PM bot — Grok Bot Marketplace"
---

## できること

1. 日付つきの仕様（PRD の切り出し）を、範囲内・範囲外に分けて書く
2. 受け入れ基準に ID をつけ、着手の順番を決める
3. 基準ごとに、証拠の種類（スクリーンショット、ログアウト状態で開ける共有 URL、API の JSON、コミット、テストデータ）を指定する
4. 引き継ぎのテンプレートは、名前ではなく役割宛てに書く
5. あなたが「出して」と言うまで仕様は下書きのまま

## 承認なしにはしないこと・やらないこと

- 製品のコードは書かない、クラウドエージェントも動かさない
- 本番の合否判定はしない
- マージ、支出、外部への送信は人の承認が必要
- チャットでのコード依頼、範囲の水増し、「PR の数」での成功判定には応じない

## はじめ方

1. 追加して、正となる仕様書（PRD）の置き場所を指定する
2. 必要ならエンジニアリングと QA の役割を設定する（なくても仕様は作れます）

受け入れ基準の確認は [QA bot](/bots/qa-bot/) と組み合わせると、仕様から検証までの流れができます。
