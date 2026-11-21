---
title: "a16z の Martin Casado さん、Grok Bot と Home Assistant で家をまるごと動かす構成を公開"
summary: "a16z の Martin Casado さんが11月20日（米国時間）、Mac mini 1台で Home Assistant と Grok Bot を動かし、照明やテレビ、サーモスタット、Sonos を操作している構成を X で公開した。構成を考えて部品を注文したのも Grok Bot だという。"
tags: ["海外", "ユーザー事例", "活用例"]
updated: 2026-11-22
published: 2026-11-22
xPost: https://x.com/martin_casado/status/2123843846648008952
sources:
  - url: https://x.com/martin_casado/status/2123843846648008952
    title: "martin_casado (@martin_casado) on X"
  - url: https://x.com/martin_casado/status/2123919375187206655
    title: "martin_casado (@martin_casado) on X（部品表）"
  - url: https://x.com/martin_casado/status/2123883750996287821
    title: "martin_casado (@martin_casado) on X（2万ドルの予算）"
  - url: https://x.com/martin_casado/status/2123855851182284822
    title: "martin_casado (@martin_casado) on X（操作している機器）"
  - url: https://github.com/met4citizen/TalkingHead
    title: "met4citizen/TalkingHead（GitHub）"
  - url: https://x.com/mattyp/status/2123849095865585754
    title: "matt palmer (@mattyp) on X"
---

a16z の Martin Casado さん（@martin_casado）が11月20日（米国時間）、自宅を Grok Bot で動かしている構成を X に投稿しました。「SF みたいな AI アバターに家を任せるなら、Home Assistant を入れた Mac mini で @bot を動かせば、だいたいそれで足りる」と書いています。

## 構成

投稿によると、中身はこうです。

- Mac mini の仮想マシンで Home Assistant を動かし、同じ Mac mini の Grok Bot が Home Assistant を管理する
- 照明は SONOFF の Zigbee USB ドングル経由。テレビ、Sonos、サーモスタットも Home Assistant から操作する
- 各部屋に Aqara FP2 の人感センサーを置いて、Grok Bot が本人のいる部屋をわかるようにする
- 各部屋に iPad を取り付け、Grok Bot がページを表示したり、アバターとして話したりする。アバターにはオープンソースの TalkingHead を使う

本人はスマホから Grok Bot に話しかけるだけです。Grok Bot は本人がどこにいるかを知っていて、近くの画面や家電を動かします。構成を考えて部品を全部注文したのも Grok Bot で、Casado さんはそれまでホームオートメーションのことを何も知らなかったそうです。

その5時間後には部品表も投稿しました。「これを自分の Grok Bot に渡せば、あとはやってくれる」として、Amazon などのリンクと値段を並べています。SONOFF ZBDongle-E が21ドル、Aqara FP2 が58ドル、各部屋の11インチ iPad が399ドルといった具合です。Grok Bot は Home Assistant の API を通して、シーン、照明、空調、テレビ、音楽を扱っているとのこと。

別の投稿では、Grok Bot に2万ドルの予算を渡して、家をもっと SF っぽくするものを好きに買わせているとも書いていました。知らない荷物が次々に届くのが楽しいそうです。返信では、つないでいるのは照明、テレビ、サーモスタット、Sonos、ディスプレイ、位置センサーで、鍵はつないでいないと答えています。

## Grok Bot チームからも家の話

同じ日、Grok Bot を作っている Matt Palmer さん（@mattyp）も「Grok Bot は家のネットワークでおもしろいことができる」と投稿しました。Grok Bot に Wi-Fi を最適化させる例と、Tailscale を使って Grok Bot から家のメディアサーバーにつなぐ例を、約1分の動画で見せています。この投稿はイーロン・マスクさんもリポストしました。
