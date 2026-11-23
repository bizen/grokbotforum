---
title: "米国外から Grok Bot に電話をかけさせる、Twilio と Grok Voice を使った自前のしくみ"
summary: "Grok Bot の電話機能は今のところ米国のユーザーが米国の番号にかける場合だけ使える。アイルランド在住の Chris さんが、Twilio の番号と xAI の Grok Voice を組み合わせて自分の国から電話をかけるしくみを作り、GitHub のリポジトリを共有した。"
tags: ["海外", "電話", "作例", "Bot づくり"]
updated: 2026-11-24
published: 2026-11-24
xPost: https://x.com/chris_byrne/status/2124794143109247311
sources:
  - url: https://x.com/chris_byrne/status/2124794143109247311
    title: "Chris (@chris_byrne) on X"
  - url: https://github.com/forcequit/twilio-grok-voice-bridge
    title: "forcequit/twilio-grok-voice-bridge（GitHub）"
  - url: https://github.com/jeffhuber/twilio-grok-voice-bridge
    title: "jeffhuber/twilio-grok-voice-bridge（GitHub）"
---

Grok Bot の電話機能は、いまのところ米国のユーザーが米国の番号にかける場合だけ使えます（[公式発表の記事](/news/grok-bot-phone-calls/)）。日本からはまだ使えません。

アイルランドに住む Chris さん（@chris_byrne）が11月23日、この制限を自前のしくみで回避したと X に投稿しました。地元の Twilio の番号と xAI の Grok Voice を組み合わせたものです。GitHub のリポジトリへのリンクを Grok Bot に貼って「set this up」と頼めば、Bot が設定を進めてくれると書いています。

## しくみ

リポジトリの説明によると、流れは次のとおりです。

1. Grok Bot が、自分で用意した中継サーバーに電話の用件を送る
2. 中継サーバーが Twilio を通して、自分の Twilio 番号から相手に発信する
3. 通話の音声を中継サーバーが xAI の Grok Voice につなぎ、Grok Voice が相手と話す

通話中は文字起こしを読んだり、話す内容に指示を足したりできます。初期設定では、音声側は電話を切りたいと伝えるだけで、実際に切るかは Bot か本人が決めます。

リポジトリには、Grok Bot 向けの手順書（AGENTS.md）、サーバーのひな形、自分で組みたい人向けのスキルが入っています。サーバー部分は、MIT ライセンスで公開されている jeffhuber/twilio-grok-voice-bridge をもとにしたものです。

## 必要なもの

- Twilio のアカウントと、発信元にする国の音声対応の番号
- Grok Voice を使える xAI の API キー
- 常に動いているサーバーと、Twilio から届く HTTPS の公開アドレス。スリープするノートパソコンだと通話が切れる

Twilio と xAI API はどちらも有料のサービスです。API キーなどを書く .env ファイルは git に入れず、チャットにも貼らないよう README に書かれています。日本の番号から発信できるかは、Twilio で日本の音声番号が取れるかどうかによります。試す場合は Twilio 側の条件を先に確認してください。
