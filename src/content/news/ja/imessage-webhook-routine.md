---
title: "iPhone に届いた iMessage で Grok Bot のルーティンを動かす。ショートカットと Webhook の組み合わせ"
summary: "特定のキーワードを含む iMessage が届くと、iPhone のショートカットが Grok Bot のルーティンを Webhook で起動し、メッセージの本文も渡す。その設定手順を Michael Fenech さん（@Michael_Fenech_）が X で紹介した。"
tags: ["使い方", "ルーティン", "Webhook", "iPhone"]
updated: 2026-11-11
published: 2026-11-11
xPost: https://x.com/Michael_Fenech_/status/2119885990437200101
sources:
  - url: https://x.com/Michael_Fenech_/status/2119885990437200101
    title: "Michael | AI + Agents (@Michael_Fenech_) on X"
---

AI エージェントを作っている Michael Fenech さん（@Michael_Fenech_）が、日本時間11月10日の朝に、iPhone の出来事をきっかけに Grok Bot のルーティンを動かす方法を X に投稿しました。試したのは、奥さんがキーワード入りの iMessage を送ると、それで Grok Bot のルーティンが始まり、メッセージの本文もルーティンに渡る、という流れです。

## 設定の手順

投稿にある手順をまとめるとこうなります（項目名は投稿の英語表示のままです）。

1. Grok Bot で、Webhook をトリガーにした新しいルーティンを作る。やらせる仕事と、許す範囲をはっきり書いておく
2. ルーティンのサイドパネルから Webhook の URL と認証ヘッダーをコピーする。リクエストの本文の形は Grok Bot に聞く
3. iPhone のショートカットアプリで「Automation」の「+」から「Message」を選ぶ
4. 送信者を選び、「Message Contains」にキーワードを入れる。「Confirm Before Run」はオフにする
5. 「Get Contents of URL」アクションを足し、Webhook の URL、POST メソッド、Grok Bot に教わった Authorization と Content-Type のヘッダーを設定する
6. 本文を JSON にして、`source` に `imessage-shortcut`、`message` に受信メッセージの変数を入れる（固定の文字列ではなく）
7. 誰かにキーワードを送ってもらい、ルーティンが本文を受け取って動くか確かめる

## どう使うか

Fenech さんは、「GROK BRIEF」で予定とメールの要約、「GROK RESEARCH: テーマ」で調べもの、といった具合に、キーワードごとに決まった仕事だけを始めるルーティンにする案を挙げています。ただし、こうしたコマンドの例は設定の提案で、本人が試したのは iMessage でルーティンが起動して本文が届くところまでだと断っています。

Bot が定期的に何かを確かめに行くのではなく、ほかのアプリで起きたことが Bot の仕事を始める合図になる、というのが投稿の主旨です。日本時間11月11日朝の時点で、ブックマークは205件あります。

iPhone のショートカットと Grok Bot の組み合わせでは、Siri から音声チャットを開く方法も以前紹介しました（[「Hey Siri, Grok Bot」で音声チャットを開く、iPhone のショートカット設定](/news/hey-siri-grok-bot/)）。
