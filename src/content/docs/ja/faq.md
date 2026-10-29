---
title: FAQ
summary: Grok アプリとの違い、手元の PC は使うのか、記憶、承認、モデル、料金とプランの紐づけ、無料トライアル、返金、アカウント削除。
tags: [FAQ, 料金]
official: https://docs.x.ai/grok-bot/faq
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/faq
    title: FAQ — Grok Bot
---

## 基本

### 普通の AI アシスタントと何が違う？

質問に答えるだけでなく、常駐するクラウドコンピューター、接続したツール、Web サイト、ファイルを使って**仕事を最後まで終わらせます**。バックグラウンドで動き続け、役割ごとの文脈を保ち、他の Bot と連携します。

### Grok アプリと同じもの？

**別のアプリです。** Grok アプリの課金画面や「Weekly SuperGrok Limit」は Grok Bot には関係なく、Grok Bot は Cursor アカウントでサインインします。

### どこで話せる？

macOS・Windows・Linux のデスクトップアプリ、iOS・Android のアプリ。ほかに X Chat、X での [@bot タグ付け](/docs/tag-on-x/)、Slack の[共有 Bot](/docs/shared-bots/) からも使えます。

### ノート PC を閉じても動く？

動きます。作業はクラウドで行われるので、アプリや端末を閉じても止まりません。

## コンピューター

- **手元の PC は使う？** 基本はクラウドのコンピューターで作業します。手元の PC でコマンドを実行するのは、あなたが許可したときだけで、既定は毎回確認です
- **Bot ごとに別のコンピューター？** いいえ。1 ユーザーに 1 台で、全 Bot がファイル・セッション・ログインを共有します。Bot の区切りをセキュリティの境界と考えないこと
- **同時に動ける？** 動けます。ただし 1 つの Bot が画面で同時に進められる操作は 1 つです

詳しくは[コンピューターとアプリ](/docs/computer-and-apps/)へ。

## 記憶

好み、役割の文脈、過去の作業の要約を覚えます。会話と役割は Bot ごとですが、名前やタイムゾーンは全 Bot で共有されます。何を覚えているかは Bot に聞けば答えます。重要な判断では、記憶ではなく最新の情報源を確認させましょう（[Bot の使い方](/docs/bots/)）。

## Web サイトと承認

### どんなサイトでも使える？

専用のアプリがないサービスも、多くはブラウザ操作で扱えます。ただし自動操作のブロック、再ログイン、CAPTCHA などは Bot が回避せず、あなたに渡します。クラウドからの通信を拒むサイトには、**設定 → Computer → Your computer** の **Route traffic through this computer** で、自分の回線を経由させる方法もあります。アプリ接続があるならそちらが確実です。

### 何に承認が必要？

操作の内容とリスク、Auto Review のルールによります。送信・公開・削除・購入・本番の変更には、狭い「先に確認（Ask first）」ルールを入れておくのがおすすめです。**ルーティンや他の Bot からの承認依頼は約 30 分で期限切れ**になり、参加中のチャットでの承認はあなたを待ちます（[セキュリティ](/docs/security/)）。

### モデルは選べる？

選べません。タスクごとに自動で選ばれ、使われたモデルも表示されません。使用量は「Grok Bot の使用量」としてまとめて計上されます。

## 料金とプラン

### 別の契約が必要？

不要です。次に含まれます。

- **X Subscription**：Premium / Super / Ultra（Plus と無料プランは対象外）
- **旧 Cursor プラン**：Pro / Pro+ / Ultra / セルフサーブの Teams

旧 Cursor アカウントでは、個人の SuperGrok / SuperGrok Plus / SuperGrok Heavy / X Premium+ を紐づけることもできます。

### いくらかかる？

- **X Subscription**：Cursor や Grok アプリと同じ**週ごとの使用量枠**を使います。Super と Ultra は Premium より枠が大きく、超えた分は前払いクレジットで払います。使用量は grok.com/dashboard で確認
- **旧 Cursor プラン**：週の上限を超えると、オンデマンド利用が有効なら Cursor 経由で課金されます

### 紐づけられる Grok のプラン

| 紐づけ | 可否 |
|---|---|
| SuperGrok / SuperGrok Plus / SuperGrok Heavy / X Premium+（個人） | 可 |
| SuperGrok Lite / Grok Enterprise | 不可 |
| Grok Business のシート | 紐づけではなく **Sign in with Grok** でサインイン |

- **紐づけは永久で、自分では解除・移動できません。** 間違えたらサポートに連絡します
- Cursor プランと SuperGrok は**合算されず**、多いほうが使われます（Pro = SuperGrok = X Premium+、Pro+ = SuperGrok Plus、Ultra = SuperGrok Heavy）
- SuperGrok の残量と Grok Bot の使用量は**別のメーター**です

### 上限を超えたら課金を止めたい

- X Subscription：自動チャージをオフにするか、grok.com/dashboard/billing で月の追加利用の上限を設定
- 旧 Cursor プラン：オンデマンド利用をオフにするか、月の上限を設定

上限を設定しても実行中のタスクは途中で止まらないため、少し超えることがあります。

### 無料トライアル

対象のアカウントでは **Start Trial** から、**7 日間の使用量クレジット**を試せます。有料プランに自動で切り替わることはありません。消費はメッセージ数ではなく作業量で決まるので、大きなタスク 1 つで使い切ることもあります。小さく始めましょう。

App Store の無料トライアルは別物で、解約しないと有料になります。

### 返金

Grok Bot 単独の返金窓口はなく、契約元（X、Cursor、Apple / Google、SuperGrok の場合は SpaceXSI）の方針に従います。使った前払いクレジットやオンデマンド分は返金されません。

## チーム

- セルフサーブの Cursor Teams：全メンバーが利用可
- X Subscription のチーム：Premium / Super / Ultra の有料シートすべてに含まれる
- Cursor Enterprise：管理者が有効化

詳しくは[チームと企業](/docs/teams-and-enterprises/)へ。

## アカウント

- **メールアドレスは変更できません。** 別のアドレスを使うなら新しいアカウントを作ります
- **削除**は Cursor アカウントの削除と同じで、元に戻せません。スマホは 設定 → アカウント → **Delete Account**、PC は先に契約を解約してから cursor.com/dashboard → Settings → **Delete Account**。データは 30 日以内に消去されます。App Store や SuperGrok などの契約は、それぞれ別に解約が必要です

## その他

- **スキルとルーティンの違い**：スキルは「やり方」、ルーティンは「いつ実行するか」。スキルを本物の単発タスクで試してからルーティンにします（[スキルとルーティン](/docs/skills-routines-and-automations/)）
- **アプリの言語**：デスクトップは 37 言語、スマホは 12 言語。新しい Bot はその言語で返事をします
- **複数アカウント**：アカウントメニューの **Switch account** / **Add account** で切り替え
- **対応環境**：macOS（Apple シリコン / Intel）、Windows（x64 / Arm64）、Linux（x64 / Arm64、`.deb` / `.rpm` / AppImage）、iOS 18 以降（iPadOS 18 以降の iPad 含む）、Android 9 以降
