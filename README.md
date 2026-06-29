# ORIZURU ── ティザー（先行公開）サイト

千羽鶴が、世界を救う。
ケアを受ける一人ひとりが折る一羽を、千羽鶴に束ね、世界の支援先へ届ける ──
介護・ケアの現場から生まれた、循環型のドネーション・プロジェクトのティザーサイトです。

1ページ完結のランディングページ。**Next.js (App Router) + TypeScript + Tailwind CSS** で構成し、
**Vercel** へのデプロイを想定しています。

---

## 技術スタック

- **Next.js 14**（App Router）
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**（スクロール連動アニメーション・控えめなパララックス）
- フォント: Noto Serif JP（見出し）／ Noto Sans JP（本文）— `next/font` で最適化

---

## ローカル起動

```bash
# 依存関係のインストール
npm install

# 環境変数サンプルをコピー（任意・未設定でも動作します）
cp .env.example .env.local

# 開発サーバー起動（http://localhost:3000）
npm run dev
```

その他のコマンド:

```bash
npm run build   # 本番ビルド
npm run start   # ビルド成果物を起動
npm run lint    # ESLint
```

---

## ディレクトリ構成

```
app/
  fonts.ts                共有フォント定義（Noto Serif/Sans JP）
  metadata.ts             ロケール別 metadata 生成（OGP / hreflang）
  globals.css             Tailwind + ベーススタイル / prefers-reduced-motion
  (ja)/                   日本語ルート（lang="ja"）
    layout.tsx            ルートレイアウト
    page.tsx              /（日本語版）
  (en)/                   英語ルート（lang="en"）
    layout.tsx            ルートレイアウト
    en/page.tsx           /en（英語版）
  api/subscribe/route.ts  メール登録 API の雛形
components/
  Landing.tsx             1ページ構成（言語非依存・辞書を各セクションへ配分）
  SiteHeader.tsx          固定ヘッダー（言語切替リンク付き）
  sections/               各セクション（Hero〜SiteFooter／content を props で受け取る）
  ui/                     再利用パーツ（Reveal / Kicker / 画像フォールバック 等）
content/
  dictionary.ts           Dictionary 型・ロケールローダー（getDictionary）
  ja.ts                   日本語コピー
  en.ts                   英語コピー
lib/
  motion.ts               共有モーション variants
public/images/            画像プレースホルダ（差し替え方法は同ディレクトリの README）
```

---

## 多言語（日本語 / 英語）

本サイトは日本語版（`/`）と英語版（`/en`）を提供します。

- 日本語コピー: [`content/ja.ts`](./content/ja.ts)
- 英語コピー: [`content/en.ts`](./content/en.ts)
- 共通の型: [`content/dictionary.ts`](./content/dictionary.ts) の `Dictionary`

両ファイルは同じ `Dictionary` 型に従うため、片方にキーを追加するともう片方でも
TypeScript が不足を検知します（翻訳漏れを防止）。ヘッダー右上の言語切替リンクで
相互に行き来でき、`hreflang`（ja / en / x-default）と OGP の `locale` も自動設定されます。

言語を増やす場合は、`content/<locale>.ts` を追加し、`content/dictionary.ts` の
`locales` と `dictionaries`、`app/` のルート（route group）を追加してください。

## コピー（文言）の編集

サイトに表示される文言は、すべて `content/ja.ts`（日本語）と `content/en.ts`（英語）に
集約しています。本文の編集は基本的にこの2ファイルだけで完結します。

### 表記ルール（厳守）

このサイトは公開物です。以下を厳守してください。

- **FSUN** は「国連支援財団（Foundation for the Support of the United Nations / FSUN）」と表記。
  国連（UN）そのものではありません。「国連公認」「国連認定」等は使わず、「FSUN と連携」までに留めます。
- 投資・節税・出資・利回り・ファンド・銀行名などの**資金スキーム／投資に関する記述は一切載せません**。
  寄付（CTA）は公益・支援の文脈にのみ閉じます。
- かぎ括弧（「」）は本文コピーで使いません。強調はトーンと装飾で表現します。
- 一人称は組織主体として「私たち」を使います。
- 当事者・子どもは、自らの意思で世界へ働きかける主体として描きます。

---

## 画像の差し替え

`public/images/` に所定のファイル名で画像を配置すると反映されます（詳細は
[`public/images/README.md`](./public/images/README.md)）。画像が無くても、
ネイビーの単色フォールバックで表示が崩れない設計です。

> 人物・現場の写真はイメージ素材を用いる前提です。実在の利用者の写真ではありません。
> 実画像を使う際は、肖像権・同意・撤回の自由（セーフガーディング方針）に沿って運用してください。

---

## 環境変数

`.env.example` をコピーして `.env.local` を作成し、必要に応じて設定します。
**いずれも未設定のままでもサイトは動作します**（プレースホルダ挙動になります）。

| 変数名                  | 用途                                                                 | 未設定時の挙動                               |
| ----------------------- | -------------------------------------------------------------------- | -------------------------------------------- |
| `STRIPE_SECRET_KEY`     | Stripe シークレットキー（寄付決済）                                   | `/donate` は「準備中」表示にフォールバック    |
| `STRIPE_WEBHOOK_SECRET` | Stripe Webhook 署名シークレット（受領記録・任意）                    | Webhook は 503 を返す（記録なしでも決済は可） |
| `NEXT_PUBLIC_DONATE_URL`| 外部の寄付ページ URL（任意）                                          | 内蔵の `/donate`（Stripe）を使用             |
| `SUBSCRIBE_NOTIFY_EMAIL`| お知らせ登録の届け先メールアドレス                                   | 既定 `yoshida@aska-g.com`（`lib/notify.ts`） |
| `RESEND_API_KEY`        | Resend でメール通知する場合のキー                                    | メール送信せず Webhook かログにフォールバック |
| `RESEND_FROM`           | Resend の送信元（本番は検証済み独自ドメイン）                        | `onboarding@resend.dev`（テスト用）           |
| `SUBSCRIBE_ENDPOINT`    | 代替: 登録を転送する Webhook（Formspree 等）                         | 未設定かつ Resend 無ならログ出力で成功       |
| `NEXT_PUBLIC_SITE_URL`  | 公開サイトの正規 URL（OGP / `metadataBase`）                         | `https://orizuru.example.com` を使用          |

### 運用メモ

- お知らせ登録（フッター／CTA のメール登録）は `SUBSCRIBE_NOTIFY_EMAIL`（既定
  `yoshida@aska-g.com`）へ届きます。`RESEND_API_KEY` を設定するとそのアドレスへ通知
  メールが送信され、未設定なら `SUBSCRIBE_ENDPOINT`（Webhook）かサーバーログに記録します。
- 寄付決済（Stripe）や実メール送信の接続は、寄付の受け皿（公益財団／認定NPO の口座・規約）が
  固まってから行います。`STRIPE_SECRET_KEY` 未設定のあいだ `/donate` は準備中表示となるため、
  キー未設定のまま安全に公開できます。CTA は「お知らせ登録」を主、「寄付」を準備中とする運用も可能です。
- ドメイン・公開タイミングが決まったら、`NEXT_PUBLIC_SITE_URL` と OGP 画像（`public/images/og.jpg`）を
  差し替えてください。

---

## 寄付ページ（Stripe）

寄付は Stripe Checkout（ホスト型決済）で実装しています。カード情報はサイトに保存されず、
PCI 準拠の Stripe 決済ページで処理されます。寄付は公益・支援の文脈のみで、投資・出資の導線は持ちません。

- ページ: `/donate`（日本語）/ `/en/donate`（英語）。完了画面は `/donate/success`。
- 一回のみ / 毎月（サブスクリプション）と、プリセット金額（¥1,000〜¥10,000）＋任意金額に対応。
- API: `app/api/checkout/route.ts` が Checkout セッションを作成。金額はサーバー側で再検証します。
- Webhook: `app/api/stripe/webhook/route.ts` が `checkout.session.completed` 等を受領記録（ログ）。

### セットアップ手順

1. [Stripe ダッシュボード](https://dashboard.stripe.com/apikeys)でシークレットキーを取得し、
   `STRIPE_SECRET_KEY` に設定する（テストは `sk_test_...`、本番は `sk_live_...`）。
2. ローカルで Webhook を試す場合:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   表示される署名シークレット（`whsec_...`）を `STRIPE_WEBHOOK_SECRET` に設定する。
3. 本番では Stripe ダッシュボードの Webhook に
   `https://<本番ドメイン>/api/stripe/webhook` を登録し、署名シークレットを環境変数に設定する。

> 通貨は JPY（ゼロ十進）。金額は「円」をそのまま整数で扱います。
> プリセット金額や上限・下限は [`lib/donation.ts`](./lib/donation.ts) で調整できます。

---

## アクセシビリティ・パフォーマンス

- `prefers-reduced-motion` を尊重し、抑制環境ではアニメーションを無効化します。
- キーボード操作対応（スキップリンク、明確なフォーカスリング）。
- 画像には `alt` を付与。装飾要素は `aria-hidden`。
- コントラストを確保した配色。`next/image` / `next/font` による最適化。

---

## Vercel へのデプロイ

1. このリポジトリを GitHub にプッシュします。
2. [Vercel](https://vercel.com) で **New Project** → 当該リポジトリを Import。
3. Framework は **Next.js** が自動検出されます（追加設定は不要）。
4. **Environment Variables** に必要な値（上表）を設定します。未設定でもデプロイ可能です。
5. **Deploy** を実行。以後、ブランチへのプッシュで自動デプロイされます。

---

本サイトは先行公開（ティザー）です。内容は今後更新される場合があります。
