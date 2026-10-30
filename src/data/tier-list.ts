// grokbotforum 編集部による Grok Bot マーケットプレイスのテンプレート評価。
// 公開 URL は 2026-10-31 に全件 HTTP 200 を確認済み。出典: https://x.ai/bot/marketplace
export const TIER_LIST_UPDATED = '2026-10-31';

export const TIER_LIST_LABEL = 'grokbotforumの編集部評価（説明文ベース、実際の使用テストは未実施）';

export const TIER_LIST_CRITERIA =
  '評価基準（説明文のみ）：①仕事が単一で明確か、②個人（とくに日本の学生・創作者・ソロワーカー）に広く役立つか、' +
  '③説明から読み取れるセットアップの軽さ（貼付／アップロード中心か、CRM・Ramp・Notion・Plaid・専用ハード等が前提か）、' +
  '④結果を自分で確認しやすいか（出典・差分・合否・証拠URL・送信前承認など）。数値・利用数・品質の実測は行っていない。ランクは編集部の意見。';

export const TIER_LIST_SOURCE = {
  url: 'https://x.ai/bot/marketplace',
  title: 'Grok Bot Marketplace',
};

export type Tier = 'S' | 'A' | 'B' | 'C';

export interface TierListItem {
  name: string;
  templateId: string;
  publicUrl: string;
  reason: string;
  /** Path to this site's own guide page, when one exists. */
  guide?: string;
}

export interface TierGroup {
  tier: Tier;
  items: TierListItem[];
}

export const TIER_LIST: TierGroup[] = [
  {
    tier: 'S',
    items: [
      {
        name: 'Researchy',
        templateId: 'i2hvaEONDg6_gEF5C9RlK',
        publicUrl: 'https://x.ai/bot/i2hvaEONDg6_gEF5C9RlK',
        reason:
          '説明文が「ライブWeb検索つきの調査・事実確認」に一本化されており、出典付き・日付付きの主張を求める個人の調べものにそのまま使える。追加アカウント前提が薄い。',
        guide: '/bots/researchy/',
      },
      {
        name: 'Copy Humanizer',
        templateId: 'YwxIbVEWqXN-HYCxiMCoB',
        publicUrl: 'https://x.ai/bot/YwxIbVEWqXN-HYCxiMCoB',
        reason:
          '下書きの編集・書き換えに特化し、「声を保ち、変更点と理由を示し、事実を捏造しない」と明記。セットアップほぼ不要で結果を差分として確認しやすい。',
        guide: '/bots/human-copywriter/',
      },
      {
        name: 'last30days',
        templateId: 'TxB-fy1KryaYJLYWBcGtT',
        publicUrl: 'https://x.ai/bot/TxB-fy1KryaYJLYWBcGtT',
        reason:
          '「直近30日に人が実際に言っていること」という単一目的がはっきりしており、公開Webの観測結果を追える。個人のリサーチに幅広く使える。',
      },
      {
        name: 'dr eggbot',
        templateId: '_jOdbfkB16zxu7MRcmReE',
        publicUrl: 'https://x.ai/bot/_jOdbfkB16zxu7MRcmReE',
        reason:
          '「質の高いGrok Botを設計する」一点に絞り、好みを数問聞いてから作成すると明記。ボット作り自体が目的の個人にそのまま刺さる。',
        guide: '/bots/dr-eggbot-v2/',
      },
      {
        name: 'Overheard',
        templateId: 'NIEguoGUjA648fUPle8F5',
        publicUrl: 'https://x.ai/bot/NIEguoGUjA648fUPle8F5',
        reason:
          'Reddit・HN・ニュース・Xで第三者の言及を監視するという仕事が明確。ブランド／名前の観測は個人・創作にも使え、公開Web由来で確認しやすい。',
        guide: '/bots/overheard/',
      },
      {
        name: 'Product Idea Stress Test',
        templateId: 'ph-u_zkF5Vui1GdGnysn9',
        publicUrl: 'https://x.ai/bot/ph-u_zkF5Vui1GdGnysn9',
        reason:
          '「何が真でなければならないか／賛否の証拠／アイデアを殺しうる前提」を調べると明記。創作者・個人の検証に単一目的で向く。',
      },
      {
        name: 'Imogen',
        templateId: 'Eeu5NZp62OzQjtlY4ons2',
        publicUrl: 'https://x.ai/bot/Eeu5NZp62OzQjtlY4ons2',
        reason:
          '画像の要点に絞った短いaltテキストを書く一点仕事。アップロード前提でコネクタ依存が薄く、出力をそのまま確認できる。',
        guide: '/bots/imogen/',
      },
      {
        name: 'Critiquito: Design Critique',
        templateId: 'NqdH9qGvrq-yWRaXhJGM-',
        publicUrl: 'https://x.ai/bot/NqdH9qGvrq-yWRaXhJGM-',
        reason:
          'スクショ／Figmaリンクから順位付きの具体的な直しを出すと明記し、ファイルは編集しない。個人のUI改善に使いやすく結果が検証しやすい。',
        guide: '/bots/critiquito/',
      },
    ],
  },
  {
    tier: 'A',
    items: [
      {
        name: 'SEO & AEO Desk',
        templateId: '0IhyZWxwbf2cFmsmroZQL',
        publicUrl: 'https://x.ai/bot/0IhyZWxwbf2cFmsmroZQL',
        reason:
          'キーワードをコンテンツ案とライター向けブリーフに変える単一目的。貼り付けリストかSearch Consoleとあり、個人創作者にも使いやすい。',
        guide: '/bots/seo-aeo-desk/',
      },
      {
        name: 'Writing Bot',
        templateId: 'wtq-j01kD7o8gQFx7E9zv',
        publicUrl: 'https://x.ai/bot/wtq-j01kD7o8gQFx7E9zv',
        reason:
          'エッセイ・メール・ドキュメントの下書きと改訂パートナーと明記。個人の文章作業に広く使え、構造化された執筆フローが説明されている。',
      },
      {
        name: 'Site Audit',
        templateId: '_rzRrKKlUyBD3znUN5b3Q',
        publicUrl: 'https://x.ai/bot/_rzRrKKlUyBD3znUN5b3Q',
        reason:
          'SEO・コンテンツ・速度・a11y・CRO・schema監査でスコアとP0/P1/P2、証拠URL付きと明記。結果をURLで確認できる。',
      },
      {
        name: 'Deal Hunting',
        templateId: 'yTeKCLayahHnMdHFG9GJg',
        publicUrl: 'https://x.ai/bot/yTeKCLayahHnMdHFG9GJg',
        reason:
          '着地価格（本体・送料・税）の買い物比較という単一目的。ウォッチリスト任意で「勝手に買わない」系の境界が個人向けにわかりやすい。',
      },
      {
        name: 'Sales Call Coach',
        templateId: 'yZ5MFQFdl32vHt6fcIJAc',
        publicUrl: 'https://x.ai/bot/yZ5MFQFdl32vHt6fcIJAc',
        reason:
          '通話のスコアリングと次回の改善点に特化。貼り付け文字起こしか録音アップロードとあり、CRMなしでも始められる。',
        guide: '/bots/sales-call-coach/',
      },
      {
        name: 'Meeting Recap Deck',
        templateId: 'YklttiPpAHweKbOLV1TSF',
        publicUrl: 'https://x.ai/bot/YklttiPpAHweKbOLV1TSF',
        reason:
          '会議メモを振り返りデッキにする一点仕事。メモの貼付／アップロードで動き、引用を捏造しない旨が第三者解説でも共有されている公式テンプレ。',
        guide: '/bots/echo/',
      },
      {
        name: 'Stills & Clips Desk',
        templateId: 'V8XugyLxzbQXLM9o5b3B-',
        publicUrl: 'https://x.ai/bot/V8XugyLxzbQXLM9o5b3B-',
        reason:
          '映像から静止画・サムネ・短いクリップを切り出し、キャプションとaltも書くと明記。創作者の素材処理に単一目的で合う。',
        guide: '/bots/image-gen-bot/',
      },
      {
        name: 'Clip Bot',
        templateId: '-L1yFJ5mtwPgn3O_iYUo_',
        publicUrl: 'https://x.ai/bot/-L1yFJ5mtwPgn3O_iYUo_',
        reason: '長い録音から良い瞬間を見つけて字幕付き短尺にする一点仕事。アップロードかリンクで動くと明記。',
        guide: '/bots/clip-bot/',
      },
      {
        name: 'QA bot',
        templateId: 'lKQWoQAvYgg_7Bkg2R-m7',
        publicUrl: 'https://x.ai/bot/lKQWoQAvYgg_7Bkg2R-m7',
        reason: '本番デプロイに対する受け入れチェックで合否を出すと明記。結果がpass/failで確認しやすい。',
        guide: '/bots/qa-bot/',
      },
      {
        name: 'Proto Bot',
        templateId: 'p4sSEZV7xqcBgdT7m2O8i',
        publicUrl: 'https://x.ai/bot/p4sSEZV7xqcBgdT7m2O8i',
        reason:
          '日々のアイデアを実アプリのドラフトPR・クリックパススクショ・短い動画にする。マージ／公開／共有は承認なしではしないと明記。',
        guide: '/bots/proto-bot/',
      },
      {
        name: 'figma bro',
        templateId: 'pXNvc_U2cGyZmheYrUuF_',
        publicUrl: 'https://x.ai/bot/pXNvc_U2cGyZmheYrUuF_',
        reason: 'Figmaフレームをビルド仕様にし、トークン／モーションも監査。Figma未接続でも貼り付けリンクで動くと明記。',
        guide: '/bots/figma-bro/',
      },
      {
        name: 'X Brief',
        templateId: 'RO8GwQZFXL9O95i13epqF',
        publicUrl: 'https://x.ai/bot/RO8GwQZFXL9O95i13epqF',
        reason: '選んだXアカウントとトピックを短い日次ブリーフにまとめる単一目的。個人の情報収集に使いやすい。',
      },
      {
        name: 'Tradbot',
        templateId: 'wOE4e95HNxhSbrzyLkSI-',
        publicUrl: 'https://x.ai/bot/wOE4e95HNxhSbrzyLkSI-',
        reason:
          '個人のメールとカレンダーを見て学校書類・請求・RSVPの取りこぼしを防ぐ。返信は下書きし、送信は承認なしではしないと明記。',
        guide: '/bots/tradbot-2/',
      },
      {
        name: 'Call Follow-Ups',
        templateId: 'estQ8HWdKqhheDNmOGjcy',
        publicUrl: 'https://x.ai/bot/estQ8HWdKqhheDNmOGjcy',
        reason: '録音通話をフォローアップメール・次のステップ・CRM更新に変える。送信は承認前提の設計が説明から読み取れる。',
      },
      {
        name: 'Company Docs Q&A',
        templateId: 'GVAnpUah1K6PzJtG9EuG9',
        publicUrl: 'https://x.ai/bot/GVAnpUah1K6PzJtG9EuG9',
        reason: 'まずライブのドキュメント、次に接続ナレッジから回答し、必ず出典を付けると明記。確認可能性が高い。',
      },
    ],
  },
  {
    tier: 'B',
    items: [
      {
        name: 'Haggle Bot',
        templateId: 'pwQ612YrX3R0eACnIMlom',
        publicUrl: 'https://x.ai/bot/pwQ612YrX3R0eACnIMlom',
        reason:
          'SaaS支出の棚卸しと節約案・返信下書きに単一目的だが、Rampと請求書が前提で個人学生にはセットアップが重い。勝手に支出・署名・送信しないと明記。',
        guide: '/bots/haggle-bot/',
      },
      {
        name: 'Outbound Prospecting',
        templateId: 'i03IaF768-ielyzegoGye',
        publicUrl: 'https://x.ai/bot/i03IaF768-ielyzegoGye',
        reason: '理想顧客に合う見込み客を探し第一通を下書き。公開Web調査と送信承認ありだが、営業用途に寄る。',
        guide: '/bots/pg/',
      },
      {
        name: 'Recruiting Coordinator',
        templateId: 'KDahOjiDbbAvxqx9KaGcq',
        publicUrl: 'https://x.ai/bot/KDahOjiDbbAvxqx9KaGcq',
        reason:
          '面接ループ日程・準備・停滞追い。カレンダーか貼り付けリストで動き候補者メールは承認なしでは送らない。採用チーム向け。',
        guide: '/bots/mr-toms/',
      },
      {
        name: 'GTM Loop Closer',
        templateId: 'gj3IlHOOpzecm6xpmPJOt',
        publicUrl: 'https://x.ai/bot/gj3IlHOOpzecm6xpmPJOt',
        reason:
          '会議・メール・Slack・CRM等に残った約束やフォローを拾う。証拠を示して返信／タスクを用意。コネクタ前提が広い。',
        guide: '/bots/follow-through-agent/',
      },
      {
        name: 'Alfred',
        templateId: 'p7Gh6HIrfv4AGzIow6-9X',
        publicUrl: 'https://x.ai/bot/p7Gh6HIrfv4AGzIow6-9X',
        reason: 'Grok Bot組織の設計・監査・ガバナンス。会社の成果に合わせると明記で、個人の単発利用より組織向け。',
        guide: '/bots/alfred/',
      },
      {
        name: "Lingxi's Engineer Bot",
        templateId: 'SxqbG1NT5qEw7ggmHqQu_',
        publicUrl: 'https://x.ai/bot/SxqbG1NT5qEw7ggmHqQu_',
        reason: 'ボード化・クラウドエージェント起動・30分間隔のPR監視でマージだけ聞く。リポジトリ前提のエンジニア向け。',
        guide: '/bots/engineer-bot/',
      },
      {
        name: 'tinkabot',
        templateId: '-hmCmHB0ynJGvSKxeINfS',
        publicUrl: 'https://x.ai/bot/-hmCmHB0ynJGvSKxeINfS',
        reason: 'APIをCursor/Agentプラグイン（MCP+skills）に包む。開発者向けの明確な一点仕事。',
        guide: '/bots/tinkabot/',
      },
      {
        name: 'SWE',
        templateId: 'sd4474cf03cd8552905ff',
        publicUrl: 'https://x.ai/bot/sd4474cf03cd8552905ff',
        reason: 'コード作成・Issue対応・本番監視などソフトウェアエンジニアBot。個人開発者には広いが「単一目的」度は低め。',
      },
      {
        name: 'Projects Manager',
        templateId: 'AZKaQOsjrAa51Nb4xvTur',
        publicUrl: 'https://x.ai/bot/AZKaQOsjrAa51Nb4xvTur',
        reason: 'Notionでプロジェクト行・チャンネル・専門Botへのタスク割当。チーム／Notion前提。',
        guide: '/bots/projects-manager/',
      },
      {
        name: 'Nightly Audit Engineer',
        templateId: '0LLQmzk-yzwHi0zuiV0lC',
        publicUrl: 'https://x.ai/bot/0LLQmzk-yzwHi0zuiV0lC',
        reason: '夜間にコードベースを調べエリアごとにクリーンアップPRを1本出す。リポジトリ接続が前提。',
      },
      {
        name: 'Startup QA Bot',
        templateId: 'XBauviUoNcdi05-ExoOo4',
        publicUrl: 'https://x.ai/bot/XBauviUoNcdi05-ExoOo4',
        reason:
          '平日にテストアカウントでプロダクトを歩き、出荷／撤回／破綻を再現手順とスクショ付きで報告。プロダクト運用者向け。',
        guide: '/bots/startup-qa-bot/',
      },
      {
        name: 'Video Edit Desk',
        templateId: 'kGiyk73f5CF8XtBMIh0gW',
        publicUrl: 'https://x.ai/bot/kGiyk73f5CF8XtBMIh0gW',
        reason: 'アップロード映像をカット・焼き込み字幕・プラットフォーム別書き出し。創作者向けだが編集系の作業負荷は残る。',
      },
      {
        name: 'Director',
        templateId: 'r9v2LNQY0VHF8JXe8y6VF',
        publicUrl: 'https://x.ai/bot/r9v2LNQY0VHF8JXe8y6VF',
        reason: 'ブリーフから短編・広告・解説などの映像制作一式。強力だが「監督」範囲が広く単一目的度は下がる。',
        guide: '/bots/video-director/',
      },
      {
        name: 'Pitch Deck Coach',
        templateId: 'zkVS-PkX1ooTE2nP21DPO',
        publicUrl: 'https://x.ai/bot/zkVS-PkX1ooTE2nP21DPO',
        reason: 'ピッチデッキを投資家視点でレビュー。創業者には有用だが対象が狭い。',
      },
      {
        name: 'Competitor Watch',
        templateId: 'aw0Zj54sIsAK7vMnajdz0',
        publicUrl: 'https://x.ai/bot/aw0Zj54sIsAK7vMnajdz0',
        reason: '競合の価格・製品・採用ページの実変化をブリーフ。URLリスト開始で個人にも使えるが監視運用寄り。',
      },
      {
        name: 'Market Researcher',
        templateId: 'xzkXiUbdYfPd7g30OhLGf',
        publicUrl: 'https://x.ai/bot/xzkXiUbdYfPd7g30OhLGf',
        reason: '競合の公開サイト・広告・価格・ポジショニングを定常監視。マーケ／事業向け。',
      },
      {
        name: 'Pfp Bot',
        templateId: 'eFnHzlDcKdoA406SzZbNZ',
        publicUrl: 'https://x.ai/bot/eFnHzlDcKdoA406SzZbNZ',
        reason:
          '写真をGrokbot風アイコンにする一点仕事。セットアップは軽いが有用性の幅は狭い。写実的似顔や投稿はしないと明記。',
        guide: '/bots/pfp-bot/',
      },
      {
        name: 'Import Bot',
        templateId: 'HP4Q8GHtSIjbyGeI2vg7S',
        publicUrl: 'https://x.ai/bot/HP4Q8GHtSIjbyGeI2vg7S',
        reason: 'Claude Cowork／Codex／ChatGPT等からの移行。乗り換え時には単一目的で強いが常用ではない。',
      },
    ],
  },
  {
    tier: 'C',
    items: [
      {
        name: 'Credit Card Max',
        templateId: 'q4u8YgzGQqCAOUZcg0Lgt',
        publicUrl: 'https://x.ai/bot/q4u8YgzGQqCAOUZcg0Lgt',
        reason:
          'どのカードで払うかをポイント等の優先度で提案。Grok Finance（Plaid）前提で、説明自体が予算管理ではないと限定。地域・口座接続のハードルが高い。',
        guide: '/bots/credit-card-max/',
      },
      {
        name: 'Home robots',
        templateId: 'c47Jj2QSSR1UXEcuBgUtQ',
        publicUrl: 'https://x.ai/bot/c47Jj2QSSR1UXEcuBgUtQ',
        reason: 'Segway NavimowやMatic等の家庭用ロボット操作。ハードウェア所有者以外には使えない。',
        guide: '/bots/home-robots/',
      },
      {
        name: 'skippy',
        templateId: 'X4NHZvN9cvBBS5EgdjsLx',
        publicUrl: 'https://x.ai/bot/X4NHZvN9cvBBS5EgdjsLx',
        reason: 'サンフランシスコの路上清掃アシスタント。地域限定で一般個人の汎用性が低い。',
      },
      {
        name: 'NYC Parent',
        templateId: 'cht7ytAhe3euOQy2wnEg9',
        publicUrl: 'https://x.ai/bot/cht7ytAhe3euOQy2wnEg9',
        reason: 'NYCの保護者向けファミリー参謀。地域・家族状況が前提で汎用性が低い。',
      },
      {
        name: 'Flora: Plant Care Log',
        templateId: 'dGYdqS9vLSXpxoNCPBHys',
        publicUrl: 'https://x.ai/bot/dGYdqS9vLSXpxoNCPBHys',
        reason:
          '観葉植物の世話ログと週次リマインダー。目的は明確だが適用範囲が狭い。他人が入れても植物はコピーされないと明記。',
        guide: '/bots/flora/',
      },
      {
        name: 'dial bot',
        templateId: 'tIas6udS9kSXpcAz6LFd1',
        publicUrl: 'https://x.ai/bot/tIas6udS9kSXpcAz6LFd1',
        reason: 'Bland AIで外線発信して結果報告。電話API前提で個人の初期セットアップが重い。',
      },
      {
        name: 'Office Ops Desk',
        templateId: 'afZj-XnYkThA4MB7GfZK6',
        publicUrl: 'https://x.ai/bot/afZj-XnYkThA4MB7GfZK6',
        reason: 'オフィス配送・設備・誕生日の追跡とダイジェスト。オフィス組織向け。',
        guide: '/bots/office-ops-desk/',
      },
      {
        name: 'Executive Assistant',
        templateId: '_DnP777DCicZpaTtm9_h5',
        publicUrl: 'https://x.ai/bot/_DnP777DCicZpaTtm9_h5',
        reason: '会議室・面接準備・幹部連絡などEA業務。経営サポート前提のコネクタと範囲が広い。',
        guide: '/bots/frank/',
      },
      {
        name: 'Talent Discovery',
        templateId: 'vIX2YW6rr6nQnf8-Rhyzc',
        publicUrl: 'https://x.ai/bot/vIX2YW6rr6nQnf8-Rhyzc',
        reason: 'ATSにいない候補者を探す。採用チーム／ATS前提。',
        guide: '/bots/sherlock/',
      },
    ],
  },
];
