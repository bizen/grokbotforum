---
title: "PC を閉じていても Grok Bot に LINE を読ませる。Beeper Server を Bot のコンピューターに置く手順"
summary: "なおきさん（@Naoki_GPT）が、Grok Bot 専用のコンピューターに常駐版の Beeper Server を入れて、手元の PC を閉じていても LINE のメッセージを AI に読ませる手順を X で紹介した。ログインから自動再起動の設定まで6段階。"
tags: ["日本", "LINE", "作例"]
updated: 2026-11-25
published: 2026-11-25
xPost: https://x.com/Naoki_GPT/status/2125205558085271819
sources:
  - url: https://x.com/Naoki_GPT/status/2125205558085271819
    title: "なおき (@Naoki_GPT) on X"
  - url: https://github.com/beeper/cli
    title: "beeper/cli（GitHub）"
  - url: https://github.com/beeper/line
    title: "beeper/line（GitHub）"
---

なおきさん（@Naoki_GPT）が日本時間11月24日21時半ごろ、「PCを閉じててもLINEをAIに読ませる方法」を X に投稿しました。複数のチャットアプリをまとめて扱える Beeper を、Grok Bot 専用のコンピューターの上で動かすやり方です。これまで自分の PC で読ませていた LINE を、Bot 側で読めるように切り替えたと書いています。

## 手順

投稿で紹介されている流れは次の6段階です。

1. Grok Bot の専用コンピューターに、常駐版の「Beeper Server」を入れてもらう
2. Beeper にログインする。メールに届くコードは、チャットに貼らずに安全な入力欄から渡す
3. スマホか PC の Beeper で新しい端末を承認し、表示される絵文字が一致するか確かめる
4. LINE のグループが読めるかを、メッセージの中身ではなく件数だけでテストする
5. 落ちても立ち上がり直すように、見張り役を入れる
6. 各 AI の読み先を切り替え、Grok Bot 側を優先して PC 側は予備にする

コードを安全な入力欄で渡す、テストは件数だけで済ませる、といった点は、Bot にチャットの中身や認証コードをむやみに見せないための工夫です。

## Beeper Server について

Beeper の公式 CLI（beeper/cli）のドキュメントには、画面のないサーバーに Beeper Server を入れる手順が載っています。メールで届くコードでサインインし、ほかの Beeper 端末から新しい端末を承認する流れで、投稿の②③と同じです。再起動後も動かし続けるための設定も書かれています。

LINE とのつなぎ込みには、Beeper が GitHub で公開している LINE 用のブリッジ（beeper/line）があります。README によると、このブリッジは LINE の Chrome 拡張版として接続します。LINE の Chrome 拡張は同時に1つしかログインできないため、Chrome 拡張版の LINE とは併用できません。LINE が公式に用意している API ではないので、試すなら自分のアカウントで起きることは自分で引き受けるつもりでやるのがよさそうです。

Grok Bot から LINE を扱う方法としては、以前紹介した [linejs cli](/news/linejs-cli-grok-bot-line/) もあります。あちらは LINE を操作するプラグイン、こちらは Beeper 経由でメッセージを読む構成です。
