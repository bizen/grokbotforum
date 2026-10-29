---
title: "Talent Discovery"
summary: "1 つの募集職種について、条件に合う人を公開情報から探し、すでに選考中の人を除いて、日付つきの候補リストを作るスカウト用の Bot。"
tags: ["採用・人事"]
creator: "Tommy Hansen"
marketplace: https://x.ai/bot/marketplace/bots/sherlock
add: https://x.ai/bot/vIX2YW6rr6nQnf8-Rhyzc
apps: ["Ashby / Greenhouse / Lever / Workday（任意）"]
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/sherlock
    title: "Talent Discovery — Grok Bot Marketplace"
---

## できること

1. 職種の要件を、書き出した評価基準（スコアカード）にする
2. 必須条件を満たす人を名前つきで探し、**主張ごとに出典リンク**をつける
3. 既存の選考パイプラインと照らして重複を除く
4. 候補リストを保ち、選別の判断を見直す
5. 最初の声かけを下書きする（送るのはあなた）
6. 頼まれればチームにリストを共有する

応募者の選考や採用の判断はしません。

## 定期実行（有効にするまでオフ）

- 毎日の候補探し（指定の時刻）
- 週 1 回のまとめ

## 承認なしにはしないこと・やらないこと

- 候補者へのメッセージ、メール、投稿
- 年齢、性別、人種、国籍、宗教、障害、健康、家族構成の記録や推測、写真からの読み取り
- 人物や「興味がある」ことのでっち上げ
- 「連絡しない」と指定した人を含めること

## はじめ方

1. 職種とレベル、譲れない条件と即不可の条件を伝える
2. 応募管理システム（ATS）を接続するか、CSV や除外リストを渡す
3. タイムゾーン、1 回の人数（既定 10）、声かけの送り主、毎日の時刻、届け先を決める
