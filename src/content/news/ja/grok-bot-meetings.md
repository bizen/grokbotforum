---
title: "Grok Bot が Zoom・Google Meet・Teams の会議に参加できるように。段階展開中"
summary: "Grok Bot がビデオ会議に参加してメモや決定事項をまとめる機能が、一部アカウントで有効になり始めた。公式 changelog にはまだ載っていない。"
tags: ["公式", "アップデート", "会議"]
updated: 2026-11-07
published: 2026-11-07
image:
  src: /news/grok-bot-meetings.webp
  alt: Grok Bot の会議参加画面（ユーザー投稿のスクリーンショット）
  credit: Alex (@alexmichael) on X
  creditUrl: https://x.com/alexmichael/status/2118496036293677303
sources:
  - url: https://x.com/alexmichael/status/2118496036293677303
    title: "Alex (@alexmichael) on X（機能の報告）"
  - url: https://x.com/grok/status/2118619906807583148
    title: "Grok (@grok) on X（Meet/Zoom/Teams・listen-only・チャット返信の説明）"
  - url: https://x.com/BrianRoemmele/status/2118524832568713655
    title: "Brian Roemmele (@BrianRoemmele) on X"
  - url: https://x.com/kinopee_ai/status/2118532891361820941
    title: "Kinopee (@kinopee_ai) on X（0.79.2 との関連の報告）"
  - url: https://x.com/zeetakou/status/2118627192657834495
    title: "kou (@zeetakou) on X（実際に参加できた報告）"
  - url: https://grokbot.guru/videos/meetings/
    title: "Send your bot to a meeting（grokbot.guru）"
---

Alex さん（@alexmichael）が日本時間11月6日未明（2026-11-06T00:09 UTC）、自分のアカウントで Grok Bot がビデオ会議に参加できるようになったと X に投稿しました。Meet、Zoom、Teams のいずれかのリンクを貼って参加するよう伝えるか、カレンダーからリンクを取得させれば、Bot が会議に入ってメモを取り、決定事項とアクションアイテムをまとめてくれるという内容です。会議中のチャットに返信させることもできるそうです。

Grok（@grok）はこの投稿への返信で、Bot は会議の「listen-only」の参加者であり、音声で発言するわけではないと説明しています。また X Spaces への参加はまだ対応しておらず、現時点では Spaces を探したり管理したりする機能だけだとも補足しています。

公式の changelog はまだ10月27日付の v0.78.1 が最新で、この会議参加機能は載っていません。Kinopee さん（@kinopee_ai）は、デスクトップ版の v0.79.2 と、Bot ごとの新しい「Meetings」UI が関係しているのではないかと報告しています。

日本のユーザーからも報告があります。kou さん（@zeetakou）は実際に会議の URL を貼ったところ、Grok Bot が会議に参加できたと投稿しました。

Brian Roemmele さん（@BrianRoemmele）は、Zoom の会議向けに使える相棒 Bot のテンプレートを公開しています（https://x.ai/bot/s81dzLlb2LIy7uEVtBrl6）。同氏によると、カメラにはデフォルトでアバターが映るだけで、Bot 自身が話すわけではないとのことです。

この機能は全員に一度に展開されているわけではなく、まだ使えないアカウントもあります。日本での利用可否については、現時点でユーザー個別の報告以上のことは分かっていません。
