# Hillside Auto Corporation — Website Complete Specification
## Claude Code 制作用プロンプト／設計書

---

## 📋 プロジェクト概要

**目的**: ヒルサイドオート株式会社の公式ウェブサイトを完全新規で構築する。
**現状**: 既存サイト http://www.hillside-auto.com/ はEUC-JP・非レスポンシブ・非SSL・画像ナビゲーションの2000年代設計。リニューアルではなく完全刷新。
**ドメイン**: hillside-auto.com（既存ドメインを使用）
**言語**: 日本語 / English（バイリンガル・言語切替機能付き）
**技術**: Static HTML/CSS/JS（フレームワーク不使用 or Astro）→ Vercel or Netlifyにデプロイ
**ターゲット**: 横浜在住の日本人（50%）＋ 横浜在住の外国人（50%）

---

## 🏢 会社情報

- **会社名**: ヒルサイドオート株式会社 / Hillside Auto Corporation
- **所在地**: 〒231-0849 神奈川県横浜市中区麦田町1-40（山手公園前交差点の目の前）
- **電話**: 045-641-3307
- **メール**: info@hillside-auto.com
- **LINE**: https://lin.ee/sTd3oIR
- **営業時間**: 9:00–18:00
- **Instagram**: @hillside_auto_inc（https://www.instagram.com/hillside_auto_inc/）
- **Facebook**: https://www.facebook.com/hillsideautoinc/
- **創業**: 70年以上の実績
- **スズキ副代理店**
- **古物商許可番号**: 451320001349
- **資格所有者**: 田中一
- **入札参加資格**: 神奈川県等の政府入札参加資格保有
- **特徴**: 横浜エリアで数少ない英語対応可能な自動車サービス会社

---

## 🎯 サービス一覧（優先度順）

### 最重要（メイン収益源）
1. **新車販売** — 全メーカー対応（スズキ副代理店だが、どのメーカーの車でも取り扱い可能）
2. **中古車販売** — 在庫にない車も取り寄せ対応

### 重要
3. **車検（Shaken）** — 外国人にも英語で対応
4. **整備・メンテナンス** — 定期点検・オイル交換等
5. **板金塗装** — キズ・ヘコミの修復
6. **事故修理** — 事故車の修理対応

### 補助サービス
7. **車登録・名義変更** — 煩雑な書類手続きを代行
8. **車買取** — 高価買取対応
9. **保険** — 自動車保険の取り扱い

### 差別化要素
10. **完全英語対応** — 外国人顧客のための包括的サポート（購入相談～書類手続き～アフターケアまで全て英語OK）

---

## 🎨 デザイン方針

### コンセプト
**「信頼と安心の証明」** — 見た瞬間に「ちゃんとした会社だ」と感じさせる、清潔感のあるプロフェッショナルなデザイン。
華美すぎず、安っぽくもない。70年の実績に見合う「落ち着いた自信」を表現する。

### カラーパレット（推奨）
- **Primary Dark**: #1A1A2E（ダークネイビー — 信頼・プロフェッショナル感）
- **Primary Accent**: #D85A30（コーラルオレンジ — Instagramブランドと統一。活力・親しみやすさ）
- **White**: #FAFAFA（清潔感のある背景）
- **Light Gray**: #F0F0F0（セクション区切り用）
- **Text Dark**: #2D2D2D（本文テキスト）
- **Text Light**: #FFFFFF（ダーク背景上のテキスト）
- **Success/Trust Green**: #2E8B57（信頼シグナル・レビュー評価に使用）

### タイポグラフィ
- **見出し（日本語）**: Noto Serif JP — 信頼感・格式
- **見出し（英語）**: Playfair Display — エレガント・高級感
- **本文**: DM Sans / Noto Sans JP — 読みやすい・モダン
- **アクセント**: 数字や強調にPlayfair Displayを使用

### デザインルール
- モバイルファースト設計（9割がスマホからのアクセスを想定）
- ホワイトスペースを十分に確保
- セクション間の区切りは微妙な背景色変更で表現
- ボタン: 角丸（border-radius: 8px）、ホバー時にスケールアニメーション
- アイコン: Lucide Icons or Heroicons（統一感のあるライン系）
- 画像: 角丸で統一、適切なalt属性付き

---

## 📄 ページ構成・ワイヤーフレーム

### 全ページ共通要素

#### ヘッダー（sticky / 全ページ固定）
```
[ロゴ] [ナビゲーション] [JP | EN 切替] [📞 045-641-3307] [LINE相談] [お問い合わせボタン]
```
- モバイル: ハンバーガーメニュー + 電話ボタン + LINEボタン常時表示
- スクロール時に背景色を少し暗くするシャドウエフェクト

#### フッター（全ページ共通）
```
[ロゴ]
[サービス一覧リンク] [会社概要] [お問い合わせ]
[住所] [電話] [メール] [営業時間]
[LINE QRコード] [Instagram] [Facebook] [Google Maps リンク]
[© 2026 Hillside Auto Corporation. All Rights Reserved.]
```

---

### PAGE 1: トップページ（/）

#### Hero Section
- **背景**: 店舗外観 or 作業風景の高品質写真（暗めのオーバーレイ付き）
- **キャッチコピー（日本語版）**:
  - メイン: 「横浜で70年、車のことなら全てお任せください。」
  - サブ: 「新車・中古車販売から車検・整備・保険まで。英語対応可能。」
- **キャッチコピー（英語版）**:
  - メイン: "Your Trusted Auto Partner in Yokohama Since 1950s"
  - サブ: "Car sales, Shaken, repairs, insurance — all in English."
- **CTA**: 2つ並列
  - [お問い合わせ / Contact Us] → お問い合わせページへ
  - [サービスを見る / Our Services] → サービスセクションへスクロール

#### 信頼バー（Hero直下）
- 横並びアイコン付き: 「創業70年+」「英語対応OK」「全メーカー対応」「ワンストップサービス」
- 背景: ダーク or アクセントカラー帯

#### サービス概要セクション
- 6つのカード形式（アイコン + タイトル + 1行説明 + 「詳しく見る」リンク）
  1. 🚗 新車・中古車販売
  2. 🔧 車検（Shaken）
  3. 🛠 整備・メンテナンス
  4. 🎨 板金塗装・事故修理
  5. 📋 登録・名義変更
  6. 🛡 保険
- 各カードにホバーアニメーション

#### 「選ばれる理由」セクション
- 3〜4つの理由を写真付きで紹介
  1. **70年以上の実績** — 地域密着で培った信頼
  2. **英語対応** — 外国人のお客様も安心（We welcome foreign customers!）
  3. **ワンストップ** — 購入から保険まで一箇所で完結
  4. **政府入札資格保有** — 信頼性の証明

#### お客様の声セクション
- Google Reviews 埋め込みウィジェット
- Google Places API or 手動のレビューカード（スライダー形式）
- 日本語・英語両方のレビューを混在表示

#### アクセスセクション（トップページ内）
- Google Maps 埋め込み
- 住所・電話・営業時間
- 最寄り駅からの道順説明（「JR石川町駅から徒歩◯分」等）

#### CTA帯（ページ最下部、フッター直前）
- 「車のことでお困りですか？まずはお気軽にご相談ください。」
- [電話する] [LINEで相談] [フォームで問い合わせ] の3ボタン

---

### PAGE 2: サービス詳細（/services）

各サービスをアコーディオン or タブ形式で詳細表示。
それぞれに以下を含む:
- サービス名（日/英）
- 説明文（2〜3文）
- 対応内容リスト
- 対象者（「こんな方におすすめ」）
- [このサービスについて問い合わせる] CTAボタン

#### 特にプッシュすべきサービス:
**新車・中古車販売（最上部・最大面積）**
- 「全メーカー対応。在庫にないお車も取り寄せ可能。」
- 「スズキ副代理店。国産車・輸入車問わずご提案。」
- 「ご予算・ライフスタイルに合わせた最適な1台をお探しします。」

---

### PAGE 3: 外国人の方へ（/english or /for-foreigners）

**このページは英語がデフォルト**（日本語切替も可能）

- **Hero**: "Navigating Car Ownership in Japan? We've Got You Covered."
- **サブ**: "Hillside Auto provides full English support for all automotive services."

内容:
1. **What We Help With**（英語でのサービス一覧）
   - Buying a new or used car
   - Shaken (車検) — Japanese vehicle inspection
   - Repairs & maintenance
   - Insurance
   - Vehicle registration & name transfer
   - Selling your car

2. **Why Choose Hillside Auto?**
   - Full English communication
   - We handle all paperwork
   - 70+ years serving Yokohama
   - Located near Yamate Park intersection

3. **How to Get Started**
   - Step 1: Contact us via LINE, phone, or form
   - Step 2: Tell us what you need
   - Step 3: We'll take care of the rest
   - [Contact Us Now] CTA

4. **Instagram連動**
   - 「Follow us on Instagram for tips on living in Japan」
   - @hillside_auto_inc のフィード or リンク

---

### PAGE 4: 会社概要（/about）

- 会社名・代表者
- 創業年・沿革（簡潔に）
- 所在地・地図
- 資格・認証（スズキ副代理店、古物商許可、入札参加資格等）
- スタッフ写真（あれば）
- 企業理念（1〜2文で簡潔に）

---

### PAGE 5: お問い合わせ（/contact）

#### お問い合わせフォーム
- 氏名 / Name
- メールアドレス / Email
- 電話番号 / Phone（任意）
- お問い合わせ種別（ドロップダウン）:
  - 新車・中古車のご購入 / Car Purchase
  - 車検 / Shaken
  - 修理・板金 / Repairs
  - 保険 / Insurance
  - 登録・名義変更 / Registration
  - 車買取 / Selling My Car
  - その他 / Other
- お問い合わせ内容 / Message（テキストエリア）
- [送信する / Send] ボタン

**送信先**: info@hillside-auto.com（Formspree or Netlify Forms等で実装）

#### フォーム横 or 下に代替連絡手段
- 📞 045-641-3307（タップで発信）
- 💬 LINEで相談（QRコード + リンクボタン）
- 📍 Google Maps 埋め込み（小サイズ）
- 🕐 営業時間: 9:00–18:00

---

## 🌐 言語切替（バイリンガル）仕様

### 実装方式
- **推奨**: 同一HTML内で `data-lang="ja"` / `data-lang="en"` 属性を使い、JSで表示切替
- または各ページに `/ja/` `/en/` のサブディレクトリを用意
- **デフォルト言語**: 日本語（ブラウザ言語での自動判定は任意オプション）
- ヘッダーに常時 [JP | EN] トグルボタンを表示
- 切替時にページリロードなし（JS切替推奨）
- `localStorage` でユーザーの言語選択を記憶

---

## 📱 レスポンシブ設計

### ブレークポイント
- Mobile: ~768px
- Tablet: 769px ~ 1024px
- Desktop: 1025px~

### モバイル優先事項
- 電話番号タップで発信
- LINEボタン常時表示（フローティング or ヘッダー内）
- ハンバーガーメニュー
- フォームのフィールドは1カラム
- 画像の遅延読み込み（lazy loading）

---

## ⚡ パフォーマンス・SEO

### 必須
- Lighthouse スコア 90+ 目標（Performance, Accessibility, Best Practices, SEO）
- 画像: WebP形式、適切なサイズ、lazy loading
- HTTPS対応（SSL証明書 — Vercel/Netlifyで自動）
- `<meta>` タグ: title, description（日英両方）
- Open Graph / Twitter Card 対応
- Google Analytics 4（GA4）トラッキングコード埋め込み準備
- `robots.txt` / `sitemap.xml` 自動生成
- Schema.org 構造化データ（LocalBusiness / AutoRepair）

### Schema.org 構造化データ例
```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "ヒルサイドオート株式会社",
  "alternateName": "Hillside Auto Corporation",
  "url": "https://www.hillside-auto.com",
  "telephone": "+81-45-641-3307",
  "email": "info@hillside-auto.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "麦田町1-40",
    "addressLocality": "横浜市中区",
    "addressRegion": "神奈川県",
    "postalCode": "231-0849",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.4370,
    "longitude": 139.6505
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$",
  "image": "https://www.hillside-auto.com/images/storefront.jpg",
  "availableLanguage": ["Japanese", "English"]
}
```

---

## 🚀 デプロイ

### 推奨: Vercel（無料プラン）
1. GitHubリポジトリ作成（hillside-auto-website）
2. Vercelと連携
3. カスタムドメイン hillside-auto.com を設定
4. HTTPS自動対応
5. GitHubにプッシュ → 自動デプロイ

### ドメイン設定
- 現在のドメインレジストラでDNSをVercelに向ける
- www.hillside-auto.com → hillside-auto.com にリダイレクト

---

## 📁 プロジェクト構造（参考）

```
hillside-auto-website/
├── index.html          (トップページ)
├── services.html       (サービス詳細)
├── for-foreigners.html (外国人向けページ)
├── about.html          (会社概要)
├── contact.html        (お問い合わせ)
├── css/
│   ├── style.css       (メインスタイル)
│   └── responsive.css  (レスポンシブ)
├── js/
│   ├── main.js         (共通JS)
│   ├── lang-toggle.js  (言語切替)
│   └── form.js         (フォーム処理)
├── images/
│   ├── logo.webp
│   ├── hero.webp
│   └── ...
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## ✅ 制作チェックリスト

- [ ] 全ページ日本語テキスト完成
- [ ] 全ページ英語テキスト完成
- [ ] 言語切替が全ページで正常動作
- [ ] モバイル表示確認（iPhone / Android）
- [ ] 電話番号タップ発信動作
- [ ] LINEリンク動作確認
- [ ] お問い合わせフォーム送信テスト
- [ ] Google Maps 埋め込み表示
- [ ] Google Reviews ウィジェット表示
- [ ] Lighthouse 90+スコア達成
- [ ] Schema.org 構造化データ検証
- [ ] OGP画像・メタデータ確認
- [ ] HTTPS動作確認
- [ ] 404ページ作成
- [ ] favicon設定

---

## 🎯 Claude Code への指示テンプレート

以下をClaude Codeの最初のプロンプトとして使用:

```
このプロジェクトのルートにある hillside_auto_website_spec.md を読み込んでください。
この設計書に基づいて、ヒルサイドオート株式会社のウェブサイトを構築してください。

まず plan.md を作成して、実装計画を提示してください。
技術スタック: vanilla HTML/CSS/JS（フレームワークなし）
デザイン: モバイルファースト、清潔感と信頼感を重視
言語: 日本語/英語のバイリンガル対応

plan.md が完成したら確認を取ってから実装を開始してください。
```

---

## 📝 補足事項

- ロゴ画像・店舗写真は別途提供予定（プレースホルダーで仮実装してOK）
- Google Reviews の埋め込みは Google Places API or Elfsight 等のウィジェットで対応
- フォーム送信は Formspree（無料）or Netlify Forms を推奨
- 将来的にブログ/ニュースセクション追加の可能性あり（拡張性を考慮した設計に）
- note.com/hillside_auto への導線も将来追加予定
