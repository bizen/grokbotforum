---
title: "Executive Assistant"
summary: "役員秘書（EA）のための Bot。会議室の手配表、面接準備、役員の連絡依頼の管理、Slack チャンネルの棚卸し、表とカレンダーの突き合わせなど。"
tags: ["オペレーション"]
creator: "Natasha Kuo"
marketplace: https://x.ai/bot/marketplace/bots/frank
add: https://x.ai/bot/_DnP777DCicZpaTtm9_h5
apps: ["Google カレンダー", "Gmail", "Slack", "Notion / スプレッドシート"]
updated: 2026-10-30
sources:
  - url: https://x.ai/bot/marketplace/bots/frank
    title: "Executive Assistant — Grok Bot Marketplace"
---

## できること

1. その日の会議を時系列の表にし、会議室が必要なものに印をつける
2. 会議室のルールを守る：少人数は小部屋、連続する会議はまとめる、休憩なしで階を移動させない
3. 役員がリモート・出張・休暇なら手配表を作らない
4. Slack に来た役員への連絡依頼を追い、送った・未対応を記録する
5. スプレッドシートとカレンダーの突き合わせ、Slack チャンネルの棚卸し
6. 面接準備、誕生日や記念日のカレンダー登録

## 定期実行

- 平日に、2 営業日先の会議室手配表を出す

## 承認なしにはしないこと

- メールや Slack の送信（あなたが下書きをそのまま読んで承認してから）
- 休憩なしで役員の階を移動させる予定

## 注意

この Bot の記憶には、作者が担当する役員の好み（タイムゾーン、手配表の形、会議室の好み）が入っています。追加したら、まず自分の環境に合わせて直してもらいましょう。
