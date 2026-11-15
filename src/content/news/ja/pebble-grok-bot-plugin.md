---
title: "指輪に話しかけて Grok Bot へ。Pebble のアプリストアに Grok Bot プラグイン、日本でも試す人が増えている"
summary: "Pebble のアプリストアに、Pebble 自身が出している Grok Bot プラグインがある。スマートリング Index 01 のボタンを押して話すと、その内容が Grok Bot に届く。日本のユーザーが週末に相次いで試していて、Pebble 創業者の Eric Migicovsky さんも日本語の投稿をリポストした。"
tags: ["日本", "連携", "プラグイン"]
updated: 2026-11-16
published: 2026-11-16
xPost: https://x.com/pcefancom/status/2121870059304095777
sources:
  - url: https://apps.repebble.com/grok-bot_9757f79d9055457eb6fd9008
    title: "Grok Bot - Pebble Appstore"
  - url: https://x.com/pcefancom/status/2121870059304095777
    title: "タケイマコト (@pcefancom) on X"
  - url: https://x.com/taishiyade/status/2121767429898641843
    title: "Taishi (@taishiyade) on X"
  - url: https://x.com/kkazuya/status/2121961041609585136
    title: "kkazuya (@kkazuya) on X"
  - url: https://cg-method.com/ai/pebble-index-grok-bot-webhook/
    title: "スマートリングPebble Index 01でGrok Botを動かす｜Webhook連携と415エラーの解決法（AIメソッド）"
---

Pebble のスマートリング「Index 01」から Grok Bot に話しかける使い方が、日本のユーザーの間で広がっています。

きっかけの一つは、Pebble のアプリストアにある Grok Bot プラグインです。開発元の欄は Pebble になっています。説明によると、できることは次のとおりです。

- Index 01 の「Hold & Talk」（ボタンを押しながら話す）の送り先に Grok Bot を選べる。または「Send to Grok Bot」と言ってから用件を話す
- 送り先は既定の Bot か、名前を言った Bot やグループ。Bot には「work」のような呼びやすいあだ名を付けられる
- Bot の返事は「最新の返信」を頼めば読める。Pebble の腕時計からも使える
- メッセージはスマホから Grok Bot 側へ HTTPS で送られ、Pebble（Core Devices）のサーバーは通らない。ソースコードは GitHub で公開

設定は、プラグインを入れてスマホのブラウザでサインインし、既定の Bot を選ぶだけです。サインインはおよそ60日で切れるので、そのたびにやり直します。プラグイン機能自体がまだ開発者向けのプレビューで、Pebble アプリの設定で先に有効にする必要があります。

日本時間11月15日には、タケイマコトさん（@pcefancom）が「Webhook を使わなくても Muse、Grok Bot、Claude、ChatGPT と連携できた」と投稿しました。Grok Bot では送る Bot も指定できる、と書いています。同じ日、Taishi さん（@taishiyade）は Index 01 を中指につけて Grok Bot や Muse に話しかける様子を動画付きで紹介し、この投稿を Pebble 創業者の Eric Migicovsky さんがリポストしました。夜には kkazuya さん（@kkazuya）も、Index 01 と M5Stack Stopwatch から音声で Grok Bot に指示できるようにしたと投稿しています。

プラグインが出る前は、Webhook で Grok Bot のルーティンにつなぐ方法が使われていました。ただ Pebble はフォーム形式でしか送れず、JSON を受け取る Grok Bot の Webhook に直接つなぐと 415 エラーになります。日本語のサイト「AIメソッド」の11月4日の記事では、間に Cloudflare Worker を挟んで形式を直す手順が紹介されています。ルーティンで内容を担当の Bot に振り分けたい人には、今もこちらのやり方が使えます。
