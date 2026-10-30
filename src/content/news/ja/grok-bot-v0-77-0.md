---
title: "Grok Bot v0.77.0：Auto-review のルールが設定画面にまとまった"
summary: "Grok Bot v0.77.0は設定にPermissionsセクションが追加され、Auto-reviewのルール管理や1Password連携などの改善が入った。"
tags: ["アップデート", "Auto-review", "Vault"]
updated: 2026-10-26
published: 2026-10-26
sources:
  - url: https://x.ai/changelog/bot
    title: "Grok Bot Changelog v0.77.0"
---

10月26日の Grok Bot v0.77.0（0.76.0 もまとめて）は、10月のリリースの中でも項目が多い回でした。目立つところをまとめます。

- 設定に Permissions セクションができました。Auto-review のルールが「Always Ask」と「Allow without Asking」に分けて一覧になり、それぞれ Add Rule から追加できます（0.75.2 以降）。
- Auto-review の承認カードが開いている時間が10分から30分になりました。アプリでも Slack でも同じです。
- Vault に Payments タブができ、Bot が最初に使う支払い方法を選べます。購入は今まで通り毎回承認が必要です。
- 1Password が共有ボールトなしでつながるようになりました。ログインごとに 1Password 側で承認し、Bot にはパスワードが見えないまま Bot のブラウザに入力されます（0.68.0 以降）。
- Bot が1枚のカードで複数の質問を順番に聞けるようになりました。選択肢に合わないときは自分の答えを書けます。
- 設定の Import Memory で、ほかの AI アシスタントで使っていた好みや文脈をメインの Bot に取り込めます（0.75.2 以降）。
- 文字とコードの書体が新しくなりました。
- Bot のコンピューターがメモリ不足でも落ちにくくなり、クラッシュ後の復帰も速くなったので、「Couldn't Reach Grok Bot's Computer」で止まることが減るはずです。
