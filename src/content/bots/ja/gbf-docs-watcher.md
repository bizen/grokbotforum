---
title: GBF 更新ウォッチャー
summary: 公式 Grok Bot ドキュメントの変更を毎日チェックし、日本語解説で直すべき箇所を報告する Bot。翻訳サイトや社内 wiki の保守に。
tags: [GBF, MCP, ルーティン, 保守]
apps: [grokbotforum MCP, ブラウザ]
updated: 2026-10-30
job: |
  あなたの仕事は、Grok Bot 公式ドキュメントの変更を見張ることです。

  まず、次の MCP サーバーを URL で追加してください:
  https://grokbotforum.com/mcp

  チェックの手順:
  1. grokbotforum の official_docs_map で、公式ページと日本語ページの対応表を取得する
  2. 各公式ページ（official）をブラウザで開き、見出しと重要な数値・手順を要点としてまとめる
  3. /workspace/gbf-watch/<ページ名>.md に保存した前回の要点と比べる
     （初回は保存だけして「基準を作成」と報告する）
  4. 変化があったページは get_page で日本語解説を読み、ずれている箇所を挙げる
  5. 公式の目次に新しいページが増えていないかも確認する
  6. 最後に今回の要点で /workspace/gbf-watch/ を上書きする

  報告の形式:
  - 変わった公式ページ（URL）
  - 何が変わったか（箇条書き、引用は短く）
  - 日本語ページで直すべき箇所
  - 新しく増えた公式ページ

  変化がなければ「変更なし」と 1 行だけ報告してください。
  /workspace/gbf-watch/ への保存以外に、外部への送信や変更はしないでください。
sources:
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
  - url: https://docs.x.ai/grok-bot/computer-and-apps
    title: Use the computer and apps — Grok Bot
---

公式ドキュメントは予告なく更新されます。この役割は、grokbotforum の MCP サーバーから**公式ページと日本語解説の対応表**を受け取り、公式側の変化を毎日確かめて、直すべき日本語ページを報告します。

grokbotforum 自身の保守に使っていますが、社内 wiki や自分の翻訳メモを最新に保つ用途にもそのまま使えます。

## 使い方

1. 新しい Bot を作り、上の最初のメッセージを送る
2. 1 回目は基準（前回の要点）を作るだけなので、「今すぐ 1 回実行して」と頼む
3. 結果を見て問題なければ、「平日の毎朝 9 時（日本時間）のルーティンにして」と頼む

ルーティンは作成直後には動かず、次の予定時刻を待ちます。すぐ試すには **Test** を使います（[スキルとルーティン](/docs/skills-routines-and-automations/)）。

## 調整のヒント

- 報告先を Slack にしたいなら、Slack アプリを接続して「報告は #docs チャンネルの下書きにして」と追加する
- 対象を絞りたいなら「セキュリティと FAQ だけ」のように手順 2 の範囲を指定する
- 要点ファイルは共有コンピューターに置かれるので、他の Bot からも参照できます
