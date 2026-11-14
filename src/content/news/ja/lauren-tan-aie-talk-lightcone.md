---
title: "Lauren Tan さんの AI Engineer 講演動画が公開。Grok Bot チームが月1.1万件の PR を出せる仕組み"
summary: "Grok Bot チームの Lauren Tan さんが AI Engineer Code Summit で話した「All Code Is Slop (Except Mine)」が YouTube で公開された。同じ日には、Roman Ugarte さんと出演した Y Combinator のポッドキャスト回も出ている。"
tags: ["公式", "イベント", "開発"]
updated: 2026-11-15
published: 2026-11-15
image:
  src: /news/lauren-tan-aie-talk-lightcone.webp
  alt: Lauren Tan さんの講演「All Code Is Slop (Except Mine)」の YouTube サムネイル
  credit: AI Engineer（YouTube）
  creditUrl: https://www.youtube.com/watch?v=O_zcc6Xl12g
sources:
  - url: https://www.youtube.com/watch?v=O_zcc6Xl12g
    title: "All Code Is Slop (Except Mine) — Lauren Tan, SpaceXSI（AI Engineer / YouTube）"
  - url: https://x.com/poteto/status/2121673563489140863
    title: "lauren (@poteto) on X（講演動画の紹介）"
  - url: https://x.com/ycombinator/status/2121632207303582049
    title: "Y Combinator (@ycombinator) on X（Lightcone の出演回）"
  - url: https://github.com/cursor/plugins/tree/main/pstack
    title: "pstack（cursor/plugins / GitHub）"
---

日本時間11月12日に AI Engineer Code Summit で登壇した Lauren Tan さん（@poteto）の講演が、11月15日3時半ごろ AI Engineer の YouTube チャンネルで公開されました。Lauren さんも X で「Grok @bot チームが品質を落とさずに速く出荷できる理由を聞きに来て」と紹介しています。

タイトルは「All Code Is Slop (Except Mine)」（コードはみんなスロップ、自分のを除いて）。長さは約17分半です。動画の説明によると、チームは1か月で1万1,000件のプルリクエストを出し、revert（差し戻し）率は約0.5%。それを支えるのが、ソフトウェアの設計、lint ルール、自動テスト、実行時の検証、TLA+ と Lean を使った形式検証だといいます。Cursor のエージェントと Cursor のプラグイン pstack で、こうした土台を「ソフトウェア工場」にしていく話も入っています。

チャプターには「コメントを lint ルールに置き換える」「検証にトークンを使う」「1万1,000件の PR と0.5%の revert 率」などが並んでいます。

同じ日の0時51分には、Y Combinator が Lauren さんと Roman Ugarte さん（@romanugarte_）の出演したポッドキャスト「Lightcone」の回を X に載せました。紹介文によると、2人は Grok Bot を最初の1行から7週間でローンチまで持っていったコアチームのメンバーです。マーケティングチームが Bot に専用の広告予算を渡した話や、Lauren さんが Cursor を一度も開かずに Slack のスレッド1つで Bot と一緒に機能をまるごと作った話が出てくるそうです。こちらは約1時間あります。

講演の予告は[前回の記事](/news/lauren-tan-ai-engineer-code-summit/)で紹介しました。
