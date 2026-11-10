---
title: "Kinopee さん、ほかの AI から Grok Bot に質問できる MCP サーバー「grokbot-mcp-bridge」を公開"
summary: "Kinopee さん（@kinopee_ai）が、MCP に対応した AI から Grok Bot に質問して答えを受け取れる橋渡しサーバー「grokbot-mcp-bridge」を MIT ライセンスで公開している。Grok Bot と Muse、Poke で動作を確かめたという。"
tags: ["使い方", "MCP", "Webhook", "日本"]
updated: 2026-11-11
published: 2026-11-11
xPost: https://x.com/kinopee_ai/status/2119724908943196636
sources:
  - url: https://x.com/kinopee_ai/status/2119724908943196636
    title: "Kinopee (@kinopee_ai) on X"
  - url: https://github.com/kinopeee/grokbot-mcp-bridge
    title: "kinopeee/grokbot-mcp-bridge（GitHub）"
  - url: https://x.com/tetumemo/status/2119939347139207368
    title: "テツメモ (@tetumemo) on X（紹介の投稿）"
---

Grok Bot に、別の AI から質問を投げて答えを受け取る。そのための MCP サーバー「grokbot-mcp-bridge」を、Kinopee さん（@kinopee_ai）が GitHub で公開しています。日本時間11月9日の投稿で「OSS なのでよかったら使ってみてください」と紹介し、Grok Bot と Muse、Poke で動作を確かめたと書いています。ライセンスは MIT です。

## 何をするものか

Grok Bot のルーティンは Webhook で外から起動できますが、答えはその場では返らず、あとから別の URL に送り返す形になります。MCP のクライアントは、ツールを呼んだらその結果を受け取る形を前提にしているので、そのままではつなげません。

このサーバーはその間に入ります。README によると、流れはこうです。

1. MCP クライアント（たとえば Poke）が `ask_grokbot` で質問する
2. ブリッジが Grok Bot のルーティンの Webhook を呼び、`run_id` と返信先の `callback_url` を渡す
3. Grok Bot が答えを `callback_url` に送る
4. ブリッジがその答えを、クライアントにツールの結果として返す

答えが遅いときは `wait_for_grokbot_answer` で待ち直したり、`cancel_run` で取り消したりできます。

## 鍵の扱い

ブリッジは Fly.io に置く前提です。Grok Bot の Webhook の URL と鍵はブリッジ側の secret にだけ入れ、Poke などの呼ぶ側には、ブリッジの URL と自分で生成した API キーを1つ渡すだけです。Grok Bot の鍵を外部のサービスに直接渡さずに済みます。

使うには、Webhook トリガーのルーティンを Grok Bot に作り、その指示欄に「`run_id` を返して答えを `callback_url` に POST する」という内容を書いておく必要があります。貼り付け用のテンプレートはリポジトリの `poke-invocation.md` にあり、README には日本語版もあります。

Kinopee さんは『AIを開発チームに採用する技術』（オーム社）の著者です。この投稿はテツメモさん（@tetumemo）も仕組みを図解して紹介しています。
