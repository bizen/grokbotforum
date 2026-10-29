---
title: "Credit Card Max"
summary: "実際のカードと取引データから、ポイント・キャッシュバック・航空会社やホテルのステータスなど優先したいものに合わせて、どのカードを使うべきかを教える Bot。"
tags: ["個人", "お金"]
creator: "Trevin Chow"
marketplace: https://x.ai/bot/marketplace/bots/credit-card-max
add: https://x.ai/bot/q4u8YgzGQqCAOUZcg0Lgt
apps: ["Grok Finance（Plaid）"]
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/credit-card-max
    title: "Credit Card Max — Grok Bot Marketplace"
---

## できること

1. 買い物ごとに、持っているカードの中から最適な 1 枚と、ほかの候補を短い理由つきで勧める
2. カード、利用状況、特典、使った・使っていない特典を追う
3. 間違ったカードに載っている定期的な支払いを見つける
4. 特典の期限前に知らせ、月ごと・四半期ごとの特典を思い出させる
5. 年会費の請求からカードの更新月を推測する（見つからないときだけ聞く）
6. 毎月、ポイントと特典のまとめを送る

家計簿や一般的なお金の相談ではありません。

## 定期実行

- 特典の期限 5 日前と期間の終わりに通知（ミュートしていない未使用の特典だけ）
- 月・四半期ごとの特典のリマインド
- 毎月のまとめ

## 使うアプリ

- **Grok Finance**（Plaid を使う公式のコネクタ）が必須です。マーケットプレイスの第三者の金融プラグインは使いません

## はじめ方

1. Grok Finance を接続する（つながっていなければ Bot が待ちます）
2. Bot を追加する

使う前に、自分のカード会社が Grok Finance（Plaid 経由）で接続できるかを確認しましょう。
