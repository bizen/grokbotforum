---
title: モバイル
summary: iPhone・iPad・Android アプリでできること。対応 OS、サインインとプラン、通知、Siri とショートカット、スマホのアプリを Bot に使わせる設定。
tags: [モバイル, iPhone, Android]
official: https://docs.x.ai/grok-bot/mobile
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/mobile
    title: Grok Bot for mobile
---

モバイルアプリでは、外出先から仕事を頼み、質問に答え、承認し、結果を確認できます。Bot・会話・ルーティン・アプリ接続・クラウドコンピューターはデスクトップと共通で、アプリを閉じても作業は続きます。

## 必要なもの

- **iOS 18 以降**の iPhone（iPadOS 18 以降の iPad でも動作）、または **Android 9 以降**
- 対象プラン：X Subscription の Premium / Super / Ultra、または Grok Bot を含む Cursor のプラン（SuperGrok などの紐づけも可）
- App Store / Google Play から入手

## サインイン

**Log In or Sign Up** から、デスクトップと同じ Cursor アカウントでサインインします。SuperGrok や X Premium+ で使う場合は **Link Grok Account** で紐づけます。

**すでにプランがあるなら、Apple や Google Play で二重に購読しないこと。** アプリ内で購入できるのは月額の個人プランだけで、年額やチーム向けは cursor.com で契約します。アプリ内購入の解約・返金は Apple / Google 側で行います。

## 通知

結果・質問・承認依頼があると通知されます。

- macOS / Windows のデスクトップを使っている間は、自分の Bot の通知はデスクトップに届きます
- Bot ごとにオフにするには、チャット上部の Bot 名 → **Notifications** をオフ
- すべてオフにするには **設定 → Notifications**

## できること

- テキスト、音声入力、ボイスチャット、写真やファイルの添付、スレッド返信、リアクション
- iPhone の共有シートから写真・ファイル・リンクを Bot に送る（Android はテキストのみ）
- メールや Slack の下書きを確認して送信
- 新しい Bot やグループチャットの作成
- コンピューターの画面を見て、パスワードや 2 段階認証、CAPTCHA のときに操作を代わる（終わったら **I'm done**）
- ルーティンの確認、一時停止、再開、削除

**デスクトップでしかできないこと**：コンピューターの更新・復旧、ルーティンのテスト、実演でスキルを教える、ページ名の変更。

### Siri とショートカット（iPhone）

Siri・Spotlight・ショートカットから **Bot の一覧**、**メッセージ送信**、**音声入力**、**ボイスチャット開始**が使えます。音声入力やボイスチャットの進行はロック画面と Dynamic Island に表示されます。

## スマホのアプリを Bot に使わせる

自分の Bot との 1 対 1 のチャットで、スマホのアプリを使わせることができます（グループチャット、Slack、他人の共有 Bot では不可）。

| アプリ | できること | 対応 |
|---|---|---|
| カレンダー | 予定の参照・追加・変更・削除（繰り返し予定は不可、招待は送らない） | iPhone / Android |
| 連絡先 | 名前から電話・メール・住所・誕生日を調べる（読み取りのみ） | iPhone / Android |
| 位置情報 | 現在地の座標を読む | iPhone / Android |
| アラーム・タイマー | 24 時間以内のアラーム、最大 24 時間のタイマー（一覧・変更・取り消しは不可） | iPhone / Android |
| リマインダー | 参照・追加・変更・完了・削除 | iPhone のみ |
| ホーム | 照明、ブラインド、エアコン、鍵などの Apple ホーム機器を操作 | iPhone のみ |

- **Grok Bot が開いている間だけ**使えます。閉じていると、Bot から開くよう頼まれます
- 権限は **設定 → Connect apps** で事前に許可するか、初回に出る **Grok Bot needs permission** カードで許可します
- チームの管理者が「毎回確認」「許可しない」を決めている場合はそれに従います

## 端末の管理

**設定 → Bot → Manage your devices** に、Grok Bot を使っているスマホと PC が並びます。PC ごとに、手元で Bot にコマンドを実行させるか（毎回確認 / 常に許可 / 許可しない）を設定できます。

## ライブラリ

Bot の名前 → **Library** で、その Bot とのやり取りに出たページ・画像・動画・ファイル・リンクを新しい順に見られます。
