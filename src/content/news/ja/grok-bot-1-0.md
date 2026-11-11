---
title: "Grok Bot 1.0 が公開。チームで共有する Bot、Microsoft Teams、会議への参加"
summary: "公式アカウント @bot が Grok Bot 1.0 を発表した。Bot をチームで共有して Slack や Microsoft Teams、ビデオ会議で一緒に働かせる方向に大きく寄せた更新で、changelog の最新は v1.0.1 になった。"
tags: ["公式", "アップデート", "Team Bot", "会議"]
updated: 2026-11-12
published: 2026-11-12
image:
  src: /news/grok-bot-1-0.webp
  alt: 「Introducing Grok Bot 1.0」と書かれた公式の告知画像
  credit: SpaceXSI（x.ai）
  creditUrl: https://x.ai/news/grok-bot-1-0
sources:
  - url: https://x.ai/news/grok-bot-1-0
    title: "Introducing Grok Bot 1.0（x.ai）"
  - url: https://x.com/bot/status/2120582957782200586
    title: "Grok Bot (@bot) on X（1.0 の発表）"
  - url: https://x.com/elonmusk/status/2120584535423565889
    title: "Elon Musk (@elonmusk) on X"
  - url: https://x.ai/changelog/bot
    title: "Grok Bot Changelog（v1.0.1）"
---

Grok Bot の公式アカウント @bot が日本時間11月12日3時22分、「Introducing Grok Bot 1.0」と X に投稿しました。うたい文句は「チーム全員と一緒に働く AI のチームメイト」です。Bot を共有して、Slack や Teams で一緒に作業し、会議に呼び、使ううちに学んで役に立つようになる、と書かれています。

6分後にはイーロン・マスクがこの投稿を引用して「Grok @Bot を同僚として雇って、いちばん難しい仕事を任せよう」と投稿しました。

## 公式ブログに書かれていること

x.ai の発表記事では、ベータ版からの大きな変更を3つ挙げています。

- **チームで使える**：Bot を共有し、Slack、Microsoft Teams、ビデオ会議に連れていける。一緒に働く全員から学び、チームの知識や好みを覚えていく。
- **自分から動く**：やるべき仕事に気づいて引き受けを申し出る。やりかけの作業をフォローし、人の判断が必要なところでは人を呼ぶ。
- **できることが増えた**：ブラウザ操作が速く確実になり、文書やプレゼン資料づくりも良くなった。同じ作業に必要なリソースも減らした。

共有の場で使うための安全策として、Bot は一人ひとりの権限を守り、重要な操作の前には確認を取り、公開チャンネルに出してよい情報かどうかも確かめる、とあります。

Team Bot は Team と Enterprise プランで使えます。会議への参加は Team、Enterprise、Ultra プランが対象で、Enterprise では管理者が設定で会議機能をオンにします。

## changelog の v1.0.1（11月11日）

同じ日に changelog も v1.0.1（1.0.0 を含む）に更新されました。主な項目はこうです。

- Team、Enterprise、Ultra プランで、Bot がリンクから Google Meet、Zoom、Microsoft Teams の通話に参加し、会議チャットで答え、終わったあとに要約を送る。
- Team Bot が Microsoft Teams に入れるようになった。チーム管理者がオンにし、オーナーか Manager が Bot をつなぎ、Teams の管理者が承認する流れ。
- チーム管理者が「Allow Shared Logins」をオンにすると、オーナーや Manager が自分のアプリのログインを共有コネクターとして渡せる。
- チームメイトが Team Bot に教えた内容は「Review learnings」に入り、オーナーか Manager が承認するまで反映されない。
- Bot の Voice メニューに 0.5倍から2倍の速度スライダーが付いた。
- 何も報告することがないターンでは、「終わりました」とだけ伝えるメッセージを送らなくなった。

会議への参加は、このサイトでも[11月7日に段階展開の様子を取り上げました](/news/grok-bot-meetings/)。その機能が今回 changelog に正式に載った形です。ほかにも細かい改善と修正が多く入っているので、全項目は公式の changelog で確認できます。
