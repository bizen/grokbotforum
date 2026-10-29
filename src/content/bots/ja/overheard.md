---
title: "Overheard"
summary: "Reddit、Hacker News、ニュース、X で、あなたの名前・ブランド・URL が言及されたら平日にまとめて知らせる Bot。何もない日は黙っている。"
tags: ["注目", "マーケティング"]
creator: "Lenny Rachitsky"
marketplace: https://x.ai/bot/marketplace/bots/overheard
add: https://x.ai/bot/NIEguoGUjA648fUPle8F5
featured: true
apps: ["X（任意）", "Slack（任意）"]
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/overheard
    title: "Overheard — Grok Bot Marketplace"
---

## できること

- 最初の聞き取りで、名前・ブランド・URL の監視リストを作る
- Reddit、Hacker News、ニュースサイト、X を検索（YouTube、Instagram、TikTok は希望すれば追加）
- 自分の投稿、スパム、Bot、転載の重複を除き、**第三者による注目すべき言及だけ**を拾う
- 各件に実在するリンクと 1 行の要約をつけて、平日にチャットで届ける。何もない日は送らない
- 毎回の結果を日付つきの記録ファイルに保存

## 定期実行

- 平日の毎朝（既定は 8:30）に言及チェック。最初は無効で作られ、有効にするか一度だけ聞かれます

## 承認なしにはしないこと

- SNS への投稿や外部への送信
- Slack へのまとめ送信
- 頼まれていないのに LinkedIn を監視対象に加えること
- 見つかっていない言及をでっち上げること、「今日は言及なし」と送ること

## はじめ方

1. 追加して、監視リスト（名前・ブランド・URL）の聞き取りに答える
2. 届けてほしい時刻を決める
3. 案内が来たら毎日のチェックを有効にする
4. 必要なら X や Slack を接続する（X をつなぐと X の網羅性が上がります）
