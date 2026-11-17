---
title: "SpaceXSI の経理チームで Grok Bot 5体が専任の仕事を持つ。公式ブログで作り方を公開"
summary: "SpaceXSI が公式ブログで、経理チームに置いた5体の Team Bot の作り方を公開した。アカウント開設から入金消し込み、顧客対応まで、Bot ごとに1つの業務を最初から最後まで持たせ、教育には約3週間かけている。"
tags: ["公式", "Team Bot", "作例"]
updated: 2026-11-18
published: 2026-11-18
image:
  src: /news/grok-bot-accounting-team.webp
  alt: SpaceXSI 経理チームの組織図。人のリードの下に Provisioning Bot、Billing Bot、Billing Support Bot、Cash Applications Bot、Collections Bot が並ぶ
  credit: SpaceXSI（x.ai）
  creditUrl: https://x.ai/news/grok-bot-accounting
sources:
  - url: https://x.ai/news/grok-bot-accounting
    title: "Building an accounting team with Grok Bot（x.ai）"
  - url: https://x.com/bot/status/2122771386456551516
    title: "Grok Bot (@bot) on X"
  - url: https://x.com/elonmusk/status/2122757555030241324
    title: "Elon Musk (@elonmusk) のリポスト"
---

Grok Bot の公式アカウント @bot が日本時間11月18日4時18分、「経理チームで5体の Bot がフルタイムの役割を持っている。人のチームメイトと同じようにオンボーディングし、教育し、管理している」と投稿しました。リンク先は SpaceXSI の公式ブログ「Building an accounting team with Grok Bot」です。書いたのは Annay (Paul) Bains、Will Smerdon、Erin Jenks の3人。イーロン・マスクもこのブログを紹介する投稿をリポストしています。

## 5体の担当

Bot ごとに、もともと人が担当していた業務を1つ丸ごと持たせています。

- Provisioning Bot：契約と Salesforce の記録を照合して、顧客アカウントを開設・終了する。終わったら Slack で営業担当に知らせる。
- Billing Bot：契約内容を確認して請求書を作る。請求書の発行にかかる時間が約24時間から数分になった。
- Billing Support Bot：営業チームからの請求に関する質問に答え、請求先メールの変更などを Slack で受け付ける。経理チーム全体で1日あたり約8時間の作業が浮いたと見積もっている。
- Cash Applications Bot：1日2回入金を確認して請求書と照合する。経理担当者なら3〜4時間かかる作業を約30分で終える。
- Collections Bot：売掛金の受付メールを見て、顧客からの問い合わせに答える。顧客と直接やりとりする最初の Bot で、教育に約3か月かけた。

## 作り方のポイント

ブログでいちばん強調されているのは「Bot にも新人と同じだけの準備と教育が要る」という点です。

- 人が安定してこなせていない業務は Bot に渡さない。Grok Build で業務用のアプリを作り、Bot が操作できる範囲を決めている。
- 業務ごとに Notion の手順書を用意する。Bot は毎晩それを読み直して食い違いを報告するが、編集はできない。
- 返金やクレジットの発行など影響の大きい操作は、決められた人の承認が必要。
- 教育は約3週間。1週目は知識を入れて仕事を見せる。2週目は Bot が操作を提案して人が承認する。3週目から定型業務を任せ、例外は人に回す。

Collections Bot は、問い合わせてきた人のメールアドレスが Salesforce と請求システムに登録された連絡先と一致するかを確認します。似たドメインでは通しません。一致しなければ情報を出さず、人に回します。

SpaceXSI は、この5体がいなければ同じ仕事に今の倍以上の人数が要ると見積もっています。
