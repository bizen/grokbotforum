---
title: チームと企業
summary: 管理者向け。プランごとの提供範囲、導入前の確認、仕組みと分離、ダッシュボードの管理項目、推奨設定。
tags: [管理者, チーム, エンタープライズ]
official: https://docs.x.ai/grok-bot/teams-and-enterprises
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/teams-and-enterprises
    title: Grok Bot for teams and enterprises
---

組織に Grok Bot を導入する管理者向けのページです。セキュリティ審査の観点は[セキュリティ](/docs/security/)、端末への配布は[配布](/docs/deployment/)にまとめています。

## プランごとの提供

| プラン | 提供のされ方 |
|---|---|
| 個人 | 有料の Cursor プラン、SuperGrok の紐づけ、Grok Business のシートで利用可 |
| Teams | **既定で全員が利用可**。管理者の操作は不要で、オフにもできません |
| Enterprise | 管理者がダッシュボードで有効化。全員か、**Manage Group Access** で特定のグループに |

旧来の **Privacy Mode (Legacy)** を使っているチームと、リクエスト制の旧プランでは既定でオフです。管理項目の多くは **Enterprise 限定**で、セルフサーブの Teams には表示されません。

## 導入前に確認すること

- **Privacy Mode (Legacy)** を先に切り替える（これがあると Grok Bot は使えません）
- 送信元 IP で制限しているサービスがあるなら、固定の送信元 IP を確認
- Zscaler などの TLS 検査プロキシがあるなら、Cursor のドメイン（`*.*.cursorvm.com` を含む）を許可し、検査対象から外す
- メンバーが社内ツールへどうサインインするかを決める

## 仕組み

Grok Bot は Cursor のクラウドで動き、デスクトップやスマホのアプリはチャット・確認・承認のための窓口です。

- **ユーザーごとの分離**：1 人に専用の Firecracker microVM が 1 台
- **既定ではアクセスなし**：Bot が使えるのは、本人かチームが許可したアカウントとアプリだけ
- **人による承認**：重要な操作は承認が必要で、独立した審査モデル **Auto Review** が判定
- **管理者による制御**：チームルール、委任、テンプレート共有、手元 PC での実行の上限

1 人の Bot はすべて同じコンピューターを共有します。**Bot の分け方は役割の分け方であって、計算資源や認証情報の分離ではありません。** 認証情報を分けたい仕事には、別の Cursor ユーザーを使います。

## 主な管理項目

Cursor ダッシュボードの Grok Bot ページにあります。

### アクセスと ID

- **Enable Grok Bot**（Enterprise）：組織全体の有効化とグループ単位のアクセス
- **SCIM**（Enterprise）：ID プロバイダーからのプロビジョニング。既存の SSO もそのまま使えます

### Bot の機能

- **Cloud Agents**：コーディング作業の委任（既定でオン）
- **Public template sharing**：テンプレートの外部公開。Enterprise は既定でオフ
- **Manage Shared Bots**：[共有 Bot](/docs/shared-bots/)のアクセスと自動追加
- **Agent Email**：Bot 用メールアドレス（既定でオフ）
- **コネクタの方針**：Team Marketplace で管理。ブロックしたアプリは **Disabled by team admin** と表示されます
- **Execution on Local Computer**：メンバーの PC での実行の上限（常に許可 / 毎回確認 / 許可しない）

### ルールと承認

- **Team Rules**：全メンバーの Bot に適用される必須ルール。少なく短く
- **Enforce Auto-review**（Enterprise）：メンバーが Auto Review をオフにできないようにする
- **Auto-review rules**（Enterprise）：チーム全体の「先に確認」「自動で許可」ルール。衝突したら「先に確認」が優先
- **Inference Hooks**（Enterprise、ベータ）：モデルへのリクエストを自社のセキュリティサーバーで事前に判定

### コンピューターとネットワーク（Enterprise）

- **Network Controls**：通信先を「すべて許可」「既定 + 許可リスト」「許可リストのみ」から選択
- **Team Setup Scripts**：全メンバーのコンピューターにツールを入れるスクリプト
- **Team Secrets**：スクリプト用の暗号化された環境変数（1 チーム 100 個、1 つ 32 KB、合計 96 KB まで）
- **Allow Sudo on Bot Computers**：root 権限のコマンド（既定でオン）
- **Manage Member Computers and Data**：作り直し・停止・削除の一括操作。**どれもアクセス権の剥奪にはならない**ので、剥奪はメンバーの削除と ID プロバイダーでのセッション取り消しで行います

### ログ（Enterprise）

- **Action Recording**：Bot の操作のメタデータを記録（既定でオフ）。画面や入力内容は記録しません
- **Audit logs**：管理・認証などのイベント
- **OpenTelemetry Export**：自社の収集基盤へ送信

### グループ設定

グループごとにチーム設定を**広げる**ことができます。例外はネットワーク方針で、緩めることも厳しくすることもできます。

## 推奨設定

### 管理者

1. ネットワーク制御を設定する（未設定はすべて許可）
2. 有効にする前にコネクタを見直す（許可したものは全 Bot が使える）
3. チームルールに頼る前に **Enforce Auto-review** をオンにする
4. 手元 PC での実行は、必要がなければ**許可しない**
5. 委任が不要なら Cloud Agents をオフ
6. 外部公開の予定がなければテンプレート共有はオフのまま
7. 本番の変更、社外へのメール、支払い、規約への同意は「先に確認」にする
8. 管理端末からのサインインは ID プロバイダーで制御する

### メンバー

1. 認証情報をチャットに貼らない
2. お金・アカウント・共有資源に関わる操作は **Always allow** より **Allow once**
3. コンピューターのブラウザには、その仕事に必要なアカウントだけでサインインする
4. 新しい役割は、読み取りと下書きの仕事から始める
5. 接続したアプリとルーティンを定期的に見直す

## よくある質問

- **組織全体のオン・オフ**は Enterprise のみ。セルフサーブの Teams にはありません
- **Grok Bot 専用の支出上限**はなく、アカウント単位のオンデマンド設定が適用されます
- 管理用の **Admin API** があります（Team Secrets はダッシュボードのみ）
