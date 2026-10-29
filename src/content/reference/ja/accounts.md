---
title: X・Grok・Cursor アカウント相関図
summary: Grok Bot は 3 つのアカウントにまたがって動く。どれが何に使われ、どうつながり、どこで何を変えるのかを 1 枚で。
tags: [アカウント, 料金, 入門, X]
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/get-started
    title: Get started — Grok Bot
  - url: https://docs.x.ai/grok-bot/tag-on-x
    title: Tag @bot on X — Grok Bot
  - url: https://docs.x.ai/grok-bot/chat-and-collaboration
    title: Message and collaborate — Grok Bot
  - url: https://docs.x.ai/grok-bot/faq
    title: FAQ — Grok Bot
  - url: https://docs.x.ai/grok-bot/mobile
    title: Grok Bot for mobile
---

Grok Bot を使うと、**X・Grok・Cursor の 3 つのアカウント**が出てきます。混乱しやすいのは、それぞれの役割が違うからです。まず全体像から。

<figure class="diagram">
<svg viewBox="0 0 640 470" role="img" aria-label="X アカウントは grok.com で Grok アカウントと接続し、Grok アカウントは Cursor アカウントと紐づき、Grok Bot には Cursor アカウントでサインインする">
  <g class="node"><rect x="170" y="10" width="300" height="78" rx="14"/><text x="320" y="44" class="t">X アカウント</text><text x="320" y="68" class="s">@bot・X Chat の入口／X Subscription</text></g>
  <path class="edge" d="M320 88 V132"/><path class="arrow" d="M314 126 L320 134 L326 126"/>
  <text x="336" y="116" class="e">grok.com の Settings → Account で接続</text>
  <g class="node"><rect x="170" y="136" width="300" height="78" rx="14"/><text x="320" y="170" class="t">Grok アカウント</text><text x="320" y="194" class="s">accounts.x.ai／SuperGrok・Grok Business</text></g>
  <path class="edge" d="M320 214 V258"/><path class="arrow" d="M314 252 L320 260 L326 252"/>
  <text x="336" y="242" class="e">紐づけ（SuperGrok など）・Sign in with Grok</text>
  <g class="node"><rect x="170" y="262" width="300" height="78" rx="14"/><text x="320" y="296" class="t">Cursor アカウント</text><text x="320" y="320" class="s">Grok Bot の本体のアカウント・使用量</text></g>
  <path class="edge" d="M320 340 V384"/><path class="arrow" d="M314 378 L320 386 L326 378"/>
  <text x="336" y="368" class="e">サインインに使う</text>
  <g class="node main"><rect x="170" y="388" width="300" height="72" rx="14"/><text x="320" y="420" class="t">Grok Bot</text><text x="320" y="443" class="s">デスクトップ・スマホのアプリ</text></g>
</svg>
</figure>

## 3 つのアカウントの役割

| アカウント | Grok Bot での役割 | 主な場所 |
|---|---|---|
| **Cursor** | Grok Bot の本体のアカウント。サインイン、使用量、端末の管理はここ | アプリの設定、cursor.com/dashboard |
| **Grok** | SuperGrok などのプランを紐づける、Grok Business のシートでサインインする、X とつなぐ | accounts.x.ai、grok.com |
| **X** | 投稿で [@bot をタグ付け](/docs/tag-on-x/)する、X Chat で Bot と話す。X Subscription（Premium 以上）で Grok Bot が使える | x.com、X アプリ |

ポイントは、**Grok Bot のサインインは Cursor アカウント**だということです。Grok アプリ（grok.com）とは別のアプリで、Grok アプリの SuperGrok の残量と Grok Bot の使用量も別のメーターです。

## つなぎ方

### X と Grok をつなぐ（@bot・X Chat を使うなら必須）

1. grok.com の **Settings → Account** で X アカウントを接続する
2. 同じ Grok アカウントで Grok Bot を使えるようにする（[x.ai/bot](https://x.ai/bot) からアプリを入れるか、SuperGrok を紐づける）
3. 自分の Bot を 1 つ以上作る

### Grok と Cursor をつなぐ

- **SuperGrok / SuperGrok Plus / SuperGrok Heavy / X Premium+ を持っている**：Cursor アカウントに紐づけて使用量を得る（アプリの **Settings → Usage & Billing → Manage Plan → Get Access with Grok**、または cursor.com/bot/onboarding）
- **Grok Business のシートを持っている**：紐づけではなく、サインイン画面で **Sign in with Grok** を選ぶ
- **X Chat を使う**：Grok アカウントが Cursor アカウントに接続されている必要がある

紐づけの細かいルールは[どのプランで使える？](/reference/plans/)にあります。

## どこで何を変える？

| やりたいこと | 場所 |
|---|---|
| Grok Bot をダウンロード | [x.ai/bot](https://x.ai/bot) か cursor.com/dashboard の Grok Bot ページ |
| 使用量を見る（X Subscription） | grok.com/dashboard の **Usage** |
| 使用量を見る（Cursor の旧プラン） | アプリの **Settings → Usage & Billing** |
| 追加課金を止める（X Subscription） | 自動チャージをオフ、または grok.com/dashboard/billing で月の上限 |
| 追加課金を止める（Cursor の旧プラン） | アプリの **On-demand monthly limit**、または cursor.com/dashboard の **Spending** |
| SuperGrok を紐づける | アプリの **Settings → Usage & Billing → Manage Plan → Get Access with Grok** |
| X をつなぐ | grok.com の **Settings → Account** |
| 端末を管理する | アプリの **Settings → Bot → Manage your devices** |
| アカウントを消す | cursor.com/dashboard の **Settings → Delete Account**（スマホはアプリの設定から） |

## よくあるつまずき

| 症状 | 原因と対処 |
|---|---|
| @bot に返信するとサインアップのリンクが返ってくる | 投稿した X アカウントに Grok アカウントがつながっていない。grok.com で接続する |
| @bot が「Grok Bot isn't set up yet」と返す | つながっているが、自分の Bot がまだない。アプリで Bot を作る |
| X Chat に違う Bot が出る、エラーになる | X が別の Grok アカウントにつながっている。accounts.x.ai で正しい Grok アカウントにサインインし、同じブラウザで x.com に入ってつなぎ直す |
| SuperGrok を違う Cursor アカウントに紐づけた | 紐づけは永久で自分では外せない。サポートに連絡する |
| SuperGrok の残量と Grok Bot の使用量が合わない | 別のメーター。Grok Bot の使用量は Cursor アカウント側で見る |
| メールアドレスを変えたい | Cursor アカウントのメールは変えられない。別のアドレスなら新しいアカウントを作る |
| 会社のメールで X Chat につなげない | X Chat からの接続は個人アカウントのみ。Grok Bot アプリを使う |
