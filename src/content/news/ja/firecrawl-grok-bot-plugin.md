---
title: "Firecrawl が Grok Bot 用プラグインを公開、Web の検索や読み取りを Bot に任せられる"
summary: "Web のデータを AI エージェント向けに取ってくるサービスの Firecrawl が11月19日（米国時間）、Grok Bot 用のプラグインを公開した。Web 検索、ページの読み取り、サイトのクロール、フォーム入力ができ、データツール集の Alexandria にもつながる。"
tags: ["プラグイン", "連携"]
updated: 2026-11-22
published: 2026-11-22
image:
  src: /news/firecrawl-grok-bot-plugin.webp
  alt: Firecrawl の炎のロゴと Grok Bot のアイコンの下に「Firecrawl is now available in Grok Bot」と書かれた告知画像
  credit: Firecrawl
  creditUrl: https://www.firecrawl.dev/changelog/grok-bot-mcp
sources:
  - url: https://x.com/firecrawl/status/2123458806122267041
    title: "Firecrawl (@firecrawl) on X"
  - url: https://www.firecrawl.dev/changelog/grok-bot-mcp
    title: "Introducing the Firecrawl plugin for Grok Bot（Firecrawl Changelog）"
  - url: https://x.ai/bot/plugin/789
    title: "Firecrawl for Grok Bot"
  - url: https://www.firecrawl.dev/integrations/grok-bot
    title: "Firecrawl in Grok Bot（Firecrawl）"
  - url: https://docs.firecrawl.dev/quickstarts/grok-bot
    title: "Firecrawl in Grok Bot（Firecrawl Docs）"
  - url: https://github.com/firecrawl/firecrawl-grok-plugin
    title: "firecrawl/firecrawl-grok-plugin（GitHub）"
---

Web のデータを AI エージェント向けに取ってくるサービスの Firecrawl が11月19日（米国時間）、Grok Bot 用のプラグインを公開しました。プラグインのページ「Firecrawl for Grok Bot」から追加できます。発行元は Firecrawl 自身です。

Firecrawl の説明では、このプラグインでできるのは次のようなことです。

- Web を検索して、出てきたページの中身まで読む
- URL を Markdown や、指定した項目の JSON に変換する
- サイトの URL を一覧にしたり、ドキュメントのような一部分をまとめてクロールしたりする
- 動きのあるページで移動、クリック、フォーム入力をする
- Alexandria というデータツール集から使えるものを探し、入力と値段を確かめてから実行する

Firecrawl は、Alexandria には3,300以上のデータツールがあり、Grok Bot に最初から入っている Web ツールより回答の質が21%上がると発表しています。21%は Firecrawl 自身が出している数字です。

## 入れ方

1. プラグインのページで「Add to Grok Bot」を押すか、サイドバーの Connect apps で Firecrawl を探して追加する
2. ブラウザで Firecrawl にサインインし、チームを選んで許可する。アカウントがなければ、その場で無料で作れる
3. チャットで @ を打って Firecrawl を選び、頼みたいことを書く

API キーのコピーや MCP サーバーの設定はいりません。つないだアプリはアカウント単位なので、一度サインインすれば同じアカウントのどの Bot でも使えます。ルーティンからも使えるので、競合の料金ページや changelog を定期的に見に行かせる使い方が例に挙がっていました。

料金は、つないだ Firecrawl チームのプランに沿います。プラグインに入っているスキルの説明によると、Alexandria のツールを探すのは無料で、実行するとツールごとに表示された値段がかかります。
