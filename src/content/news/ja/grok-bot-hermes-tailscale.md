---
title: "Grok Bot から自分の VPS の Hermes エージェントに仕事を渡す、Tailscale を使った設定"
summary: "Aymane さん（@aymanemsi）が、Grok Bot の chief of staff Bot から、自分の VPS で動かしている Hermes エージェントに作業を頼めるようにした手順を X に投稿した。Tailscale でつなぐだけで、重い作業を自前のマシンに回して Grok Bot の使用量を抑えられるという。"
tags: ["海外", "連携", "作例", "使用量"]
updated: 2026-11-27
published: 2026-11-27
xPost: https://x.com/aymanemsi/status/2125950183099801639
sources:
  - url: https://x.com/aymanemsi/status/2125950183099801639
    title: "Aymane (@aymanemsi) on X"
---

Aymane さん（@aymanemsi）が11月26日（米国時間）、Grok Bot の chief of staff Bot を、自分の VPS で動かしている Hermes エージェントにつないだと X に投稿しました。Grok Bot が Hermes に実際の作業を渡せるようになったそうです。

## 手順

投稿に書かれている流れは3段階です。

1. **Tailscale**：Hermes が入っているマシンに Tailscale を入れる。Grok Bot 側では Tailscale をプラグインとして入れ、自分の tailnet をつなぐ
2. **Grok Bot**：Hermes が動いているマシンのフルネーム（Tailscale の管理画面のアドレス欄に出る名前）を Grok Bot に伝える。Tailscale が接続の承認を求めてくるので、届いたリンクからログインして承認する
3. **Hermes**：これで Grok Bot が必要に応じて Hermes に仕事を頼み、Hermes が自分のマシンで作業して結果を返す

Tailscale は、ノートパソコンや VPS などの端末を、インターネットに公開せずにつなぐプライベートネットワークです。Grok Bot の Tailscale プラグインは[11月上旬のアップデート](/news/grok-bot-v0-79-3/)で入ったものです。

## 一方通行の接続

この接続は一方向です。Grok Bot は Hermes に指示を出せますが、Hermes から Grok Bot に仕事を送ることはできません。

Aymane さんは、Hermes 以外にも opencode や Claude Code など、自分のマシンで動くエージェントなら同じようにつなげると書いています。Muse にも Tailscale プラグインがあるので、同じ方法で Hermes などと連携できるそうです。

重い作業を自前の VPS に回せば、そのぶん Grok Bot の使用量を節約できます。ただし、tailnet につないだマシンには Grok Bot から指示が届くようになるので、どのマシンをつなぐかは選んでおきましょう。
