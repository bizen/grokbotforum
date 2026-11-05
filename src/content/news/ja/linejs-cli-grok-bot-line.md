---
title: "Grok Bot に LINE を操作させる「linejs cli」が公開。BAN リスクには要注意"
summary: "nakasyouさんが、Grok Botなどのエージェントから LINE を操作できるプラグイン「linejs cli」を公開した。LINE公式のAPIではなく個人アカウントを動かす非公式ライブラリで、BANのリスクが伴う。"
tags: ["日本", "プラグイン", "LINE"]
updated: 2026-11-06
published: 2026-11-06
xPost: https://x.com/nakasyou0/status/2117975167347634591
sources:
  - url: https://x.com/nakasyou0/status/2117975167347634591
    title: "nakasyou (@nakasyou0) on X"
  - url: https://github.com/evex-dev/linejs/tree/main/agent-plugins/linejs-cli
    title: "linejs-cli Agent Plugin（GitHub）"
  - url: https://github.com/evex-dev/linejs
    title: "evex-dev/linejs（GitHub）"
  - url: https://linejs.evex.land
    title: "LINEJS ドキュメント"
---

nakasyou さん（@nakasyou0）が日本時間11月4日22時40分、「linejs cli をリリースしました（thanks to @evex_dev）。Grok Bot やほかのエージェントに LINE 操作させることができます」と X に投稿しました。投稿には、Grok Bot に「この Agent Plugin をインストールしてセットアップして」と伝えて `https://github.com/evex-dev/linejs/tree/main/agent-plugins/linejs-cli` を渡すだけで使えるという手順と、うるさい公式アカウントを Grok Bot にブロックさせた例のスクリーンショットが添えられています。この記事を書いている時点で、いいねは約505、ブックマークは664、インプレッションは約6.7万件です。

このプラグインの実体は、npm パッケージ `@evex-dev/linejs-cli` が提供する `line` という CLI です。公開されている plugin.json の説明によると、ターミナルから LINE を操作するためのもので、プロフィール、トーク、連絡先、メディア、OpenChat、LINE の API を直接呼ぶ操作までをカバーします。QR コードまたはトークンでのログイン、E2EE のメッセージやメディアの送受信、連絡先・グループ・OpenChat の操作、stdio の MCP サーバーとしての利用に対応していて、Node.js は 22.18 以上・24.11 以上・26 以上が必要です。ライセンスは MIT で、作者は evex-dev です。

元になっている evex-dev/linejs のリポジトリは、README で「LINE の SelfBot を作るための JavaScript ライブラリ」と説明されています。つまり LINE 公式の Messaging API ではなく、個人の LINE アカウントを外部から動かす非公式のライブラリです。

このプラグイン自身のルールにも、LINEJS の利用は LINE の利用規約に違反する可能性があり、アカウントの制限や BAN につながりうると書かれています。そのため、セットアップ前に Bot からユーザーへ BAN のリスクを説明し、同意を得ることになっていて、メッセージの送信・ブロック・削除の前には確認を取り、送信は控えめにすること、`~/.linejs` に置かれるセッションファイルは秘密情報として扱うことも定められています。
