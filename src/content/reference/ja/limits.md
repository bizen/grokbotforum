---
title: Grok Bot の上限値まとめ
summary: ルーティン、メール、グループチャット、承認の期限、アップロード、チーム設定まで。公式ドキュメントに散らばった数値を 1 ページに。
tags: [上限, ルーティン, メール, 早見表]
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
  - url: https://docs.x.ai/grok-bot/computer-and-apps
    title: Use the computer and apps — Grok Bot
  - url: https://docs.x.ai/grok-bot/chat-and-collaboration
    title: Message and collaborate — Grok Bot
  - url: https://docs.x.ai/grok-bot/bots
    title: Create and manage Bots — Grok Bot
  - url: https://docs.x.ai/grok-bot/mobile
    title: Grok Bot for mobile
  - url: https://docs.x.ai/grok-bot/faq
    title: FAQ — Grok Bot
  - url: https://docs.x.ai/grok-bot/teams-and-enterprises
    title: Grok Bot for teams and enterprises
  - url: https://docs.x.ai/grok-bot/security
    title: Approvals, security, and privacy — Grok Bot
---

公式ドキュメントのあちこちに書かれている数値を、用途別にまとめました。各表の「詳しく」から、根拠になった解説ページに移動できます。数値は変わることがあるので、大事な判断の前には公式ページも確認してください。

## ルーティンと自動化

| 項目 | 上限 |
|---|---|
| 1 つの Bot が持てるルーティン | 50 件 |
| ルーティンごとに残る実行記録 | 直近 20 件 |
| スケジュールの最短間隔 | 5 分 |
| 1 時間あたりの実行回数（全ルーティン合計） | 300 回 |
| 1 時間あたりの実行回数（ルーティンごと） | 200 回 |
| 実演で教える（Teach a task）の録画 | 最大 10 分 |

上限を超えた実行は `Automation run rate limit exceeded` で失敗します。**Test** の実行も使用量を消費します。詳しく → [スキルとルーティン](/docs/skills-routines-and-automations/)

## 承認と待ち時間

| 項目 | 時間 |
|---|---|
| ルーティンや他の Bot からの承認依頼の期限 | 約 30 分 |
| 参加中のチャットでの承認依頼 | あなたの返事を待つ |
| スマホのアプリ権限カード（Allow）を Bot が待つ時間 | 最大 5 分 |
| その後に許可した場合に Bot が再開できる期間 | 1 時間以内 |

詳しく → [FAQ](/docs/faq/)・[モバイル](/docs/mobile/)

## チャットと Bot

| 項目 | 上限 |
|---|---|
| グループチャットに入れられる Bot | 2〜6 個 |
| 1 つの Bot が画面で同時に進められる操作 | 1 つ |
| Bot の画像のアップロード | 25 MB |
| Bot が持てる画面 | Bot ごとに 1 つ（コンピューターはアカウントに 1 台） |

**Bot の返信はすべて使用量に数えられます。** グループの返信も、Bot 同士のメッセージも同じです。詳しく → [チャットと共同作業](/docs/chat-and-collaboration/)・[Bot の使い方](/docs/bots/)

## Bot 用メールアドレス（mail.grokbot.com）

| 項目 | 上限 |
|---|---|
| 1 アカウントのアドレス数 | 1 つ（変更・削除・再発行なし） |
| アドレス名の長さ | 64 文字 |
| 受信：1 通の添付 | 10 個、各 10 MB、合計 25 MB |
| 送信：宛先（To・Cc・Bcc の合計） | 50 件 |
| 送信：1 通の添付 | 10 個、各 10 MB、合計 25 MB（実行ファイルは不可） |
| 転送に必要なアプリのバージョン | 0.75.2 以降 |

ニュースレターや初めての相手へのメールは、1 通 1 宛先で配信停止リンクつきになります。詳しく → [コンピューターとアプリ](/docs/computer-and-apps/)

## スマホ

| 項目 | 内容 |
|---|---|
| 対応 OS | iOS 18 以降（iPadOS 18 以降）、Android 9 以降 |
| アラーム | 24 時間以内の時刻に 1 回だけ |
| タイマー | 最大 24 時間 |
| アプリの表示言語 | デスクトップ 37 言語、スマホ 12 言語 |

詳しく → [モバイル](/docs/mobile/)

## アカウントと料金

| 項目 | 内容 |
|---|---|
| 無料トライアル | 7 日間の使用量クレジット（有料に自動移行しない） |
| SuperGrok をアップグレードしたあとの反映 | 最大 24 時間 |
| 使用量のリセット | 毎週 |
| アカウント削除後のデータ消去 | 30 日以内 |
| 1Password 連携に必要なバージョン | 8.12.42 以降 |

詳しく → [FAQ](/docs/faq/)・[どのプランで使える？](/reference/plans/)

## チーム・企業（管理者向け）

| 項目 | 上限・時間 |
|---|---|
| Team Secrets の数 | 1 チーム 100 個 |
| Team Secrets の値の大きさ | 1 つ 32 KB、合計 96 KB |
| チームアイコン | 2 MB まで（PNG・JPEG・WebP） |
| Action Recording の保持期間 | 90 日 |
| ネットワーク方針の変更が反映されるまで | 約 1 分 |
| ローカル経由の通信をオフにしてから止まるまで | 5 分以内 |
| 使われていないコンピューターの自動停止（オプション） | 30 日間メッセージがないとき |
| 実行中のコンピューターへのセットアップスクリプトの反映 | 約 1 日に 1 回 |

詳しく → [チームと企業](/docs/teams-and-enterprises/)・[セキュリティ](/docs/security/)
