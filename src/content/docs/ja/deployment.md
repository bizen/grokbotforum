---
title: 配布
summary: IT 管理者向け。インストーラーの入手、MDM での配布、バージョンの固定と更新、Linux パッケージ、クラウドコンピューターの更新、導入チェックリスト。
tags: [管理者, 配布, MDM]
official: https://docs.x.ai/grok-bot/deployment
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/deployment
    title: Deploy Grok Bot to your organization
---

Grok Bot のデスクトップアプリを、組織の端末に配る IT 管理者向けのページです。有効化やアクセス範囲の設定は[チームと企業](/docs/teams-and-enterprises/)にあります。

## 配るもの

| 対象 | 形式・条件 | 更新 |
|---|---|---|
| デスクトップ | macOS（Apple シリコン / Intel）、Windows（x64 / Arm64）、Linux（x64 / Arm64） | アプリ自身、Linux のパッケージはパッケージマネージャー |
| iPhone | iOS 18 以降 | App Store |
| Android | Android 9 以降 | Google Play |
| クラウドコンピューター | メンバーごとに 1 台 | 自動 |

アプリはチャット・確認・承認の窓口で、作業はクラウドで行われます。**MDM が届くのはメンバーの端末だけ**で、クラウドコンピューターは対象外です（ツールを入れたいなら Enterprise の Team Setup Scripts）。

## インストーラーの入手

- ダッシュボードの Grok Bot ページにある **Download Grok Bot**
- 公開ダウンロードページ
- スクリプト用のリリースフィード（プラットフォームごとの JSON。`version`、`downloadUrl`、Linux 用の `debUrl` / `rpmUrl` などを含む）

形式は macOS が `.dmg`、Windows が Setup `.exe`、Linux が `.deb` / `.rpm` / AppImage です。**MSI や PKG はない**ので、必要なら配布ツール側で包みます。

## MDM での配布

- **macOS**：Jamf Pro、Kandji、Intune などで `.dmg` を配布
- **Windows**：Intune や Configuration Manager で Setup `.exe` を配布。サイレントインストールは `/S`。ユーザーのプロファイル配下にインストールされるので、**SYSTEM ではなくユーザーコンテキストで**実行します
- **Linux**：Ansible、Puppet、Chef で `.deb` / `.rpm`。更新を自社のタイミングにできるのでパッケージが向いています
- **スマホ**：メンバーが各ストアから。Android の管理端末は managed Google Play で承認

サインインは Cursor アカウントと既存の SSO で行い、Grok Bot 専用のログインはありません。

## バージョンの固定と更新

検証したバージョンのインストーラーを自社の保管場所に置き、そこから配ると全端末を同じビルドにそろえられます。端末のバージョンは、アカウントメニュー → **Support** → **About** で確認できます。

- macOS / Windows / AppImage はアプリが自動で更新を確認し、**Automatic Updates** は既定でオン
- **管理者が自動更新を止める方法はありません。** メンバー個人はオフにできますが、更新の案内は出続けます
- サポートが切れたビルドは、画面全体に **Update required** が出て使えなくなります（下限バージョンと最大経過期間は非公開）。定期的に更新しましょう

### Linux パッケージ

インストール時に署名つきのリポジトリが追加され、通常のパッケージ更新で新しい版が届きます。

- 一時的に止める：`apt-mark hold grok-bot` などでパッケージを固定
- 自社から配る：リポジトリ設定を無効化（`grok-bot.sources` の `Enabled: no` か `grok-bot.repo` の `enabled=0`）
- サポート切れの前には必ず更新します

## クラウドコンピューターの更新

イメージは提供側が管理しており、固定や持ち込みはできません。

| きっかけ | 内容 | 誰が |
|---|---|---|
| 新しいイメージ | 使われていないコンピューターを順次作り直す。ファイルは引き継がれる | 自動 |
| Update Bot's Computer | 自分のコンピューターを最新に作り直す | メンバー |
| Recreate VMs | 選んだメンバーのコンピューターを作り直す | Enterprise の管理者 |

## ネットワーク

`cursor.com` と `downloads.cursor.com` からインストーラーと更新を取得します。プロキシの資料に載っているドメイン（`*.*.cursorvm.com` を含む）をすべて許可し、**配布前に TLS 検査の対象から外して**おきます。

## 導入チェックリスト

1. **Privacy Mode (Legacy)** から切り替える
2. ネットワークを開ける（ドメインの許可と TLS 検査の除外）
3. ID プロバイダーで Cursor アプリを割り当てる
4. Grok Bot を有効にし、対象を選ぶ
5. 推奨の管理設定を入れる
6. 各プラットフォーム数台で試す
7. 検証したインストーラーを配る
8. 更新の頻度を決める（Linux はリポジトリか自社配布か）
