---
title: "Home robots"
summary: "ロボット芝刈り機やロボット掃除機などの家庭用ロボットを、チャットから動かす Bot。Segway Navimow、Matic、Matter 対応のロボットなど。"
tags: ["個人", "スマートホーム"]
creator: "Sawyer Merritt"
marketplace: https://x.ai/bot/marketplace/bots/home-robots
add: https://x.ai/bot/c47Jj2QSSR1UXEcuBgUtQ
apps: ["Segway Navimow", "Home Assistant（Matter）"]
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/home-robots
    title: "Home robots — Grok Bot Marketplace"
---

## できること

1. 対応ロボットの開始・一時停止・停止・充電台への帰還をチャットで頼める
2. 接続したロボットの状態を報告する
3. Navimow の芝刈り機は Segway の公式クラウド SDK で、Matic の掃除機は Home Assistant の公式 Matter 連携で動かす
4. その他のロボットは、カタログのコネクタ、Home Assistant の公式連携、メーカーが公開しているクラウド SDK で扱う

## 安全のための確認

- **芝刈りの開始・再開**の前に、庭に人やペットがいないか確認を求める
- **掃除の開始**の前に、床にペット、ケーブル、小物がないか確認を求める
- 一時停止・停止・帰還は確認なしで実行
- Navimow のアクセストークンは手元の認証情報ファイルだけに保存し、チャットや記憶には残さない
- 非公式のツールは使わない

## はじめ方

1. 追加する
2. ロボットごとに、メーカーの公式の方法で一度だけ接続する
3. あとはチャットで指示する
