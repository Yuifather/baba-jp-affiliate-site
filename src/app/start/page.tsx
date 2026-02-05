import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";
import MediaSlot from "@/components/MediaSlot";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getOfficialUrl } from "@/lib/site";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "はじめ方",
  description:
    "バイナリーオプションの始め方として、ババオプションの口座開設・メール認証・KYC・入金/デモ・取引開始までを日本語で整理。",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    title: "はじめ方",
    description:
      "バイナリーオプションの始め方として、ババオプションの口座開設・メール認証・KYC・入金/デモ・取引開始までを日本語で整理。",
    url: "/start",
  },
  twitter: {
    title: "はじめ方",
    description:
      "バイナリーオプションの始め方として、ババオプションの口座開設・メール認証・KYC・入金/デモ・取引開始までを日本語で整理。",
  },
};

const steps = [
  {
    title: "口座開設（アカウント作成）",
    description: "メールアドレスとパスワードを設定し、口座開設を進めます。",
    icon: "/images/step-1.svg",
  },
  {
    title: "メール認証",
    description: "登録メールに届くリンクで認証を完了します。",
    icon: "/images/step-2.svg",
  },
  {
    title: "本人確認（KYC）",
    description: "本人確認書類の提出が必要になる場合があります。",
    icon: "/images/step-3.svg",
  },
  {
    title: "デモ口座 / 入金",
    description: "まずはデモ口座で操作を確認し、必要に応じて入金します。",
    icon: "/images/step-4.svg",
  },
  {
    title: "初回取引",
    description: "時間と条件を選び、取引を開始します。",
    icon: "/images/step-5.svg",
  },
];

const checklist = [
  "1日の上限予算を決めて守る",
  "デモでルールを決めてから本番へ移行する",
  "損益の記録をつけて振り返る",
  "連続取引や感情的な判断を避ける",
  "不明点は公式のFAQやLegal Documentsで確認する",
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "ババオプションの始め方",
  description:
    "登録から初回取引までの流れを、実際の画面イメージに沿って整理したガイドです。",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
};

const startGallery = [
  {
    title: "判定時間の選び方",
    note: "タイマー/クロックの画面が分かりやすい。",
    src: "/partner/ui-options.webp",
  },
  {
    title: "取引画面の流れ",
    note: "履歴や詳細がまとまっていて見やすい。",
    src: "/partner/ui-history.webp",
  },
  {
    title: "チャートの比較",
    note: "複数チャートで全体感を掴みやすい。",
    src: "/partner/ui-multichart.webp",
  },
];

export default function StartPage() {
  const officialUrl = getOfficialUrl();

  return (
    <div className="space-y-12 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <div className="bg-hero-panel" aria-hidden="true" />
        <div className="relative grid gap-8 px-4 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
          <p className="text-sm font-semibold text-teal-700">ステップバイステップ</p>
          <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            登録から初回取引までの流れ
          </h1>
          <p className="text-sm text-black/70">
            口座開設・メール認証・KYC・デモ/入金の流れを、バイナリーオプション初心者向けに整理しました。
            画面や条件は時期によって変わるため、公式でご確認ください。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="btn-primary"
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              公式サイトで登録を進める
            </a>
            <Link className="btn-secondary" href="/risk">
              リスクを先に確認
            </Link>
          </div>
          </div>
          <MediaSlot
            src="/partner/start-banner.webp"
            alt="ババオプション はじめ方イメージ"
            width={920}
            height={700}
            objectPosition="right center"
            label="/public/partner/start-banner.webp"
          />
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <h2 className="section-title">具体的な手順</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="card">
              <div className="flex items-start gap-4">
                <Image src={step.icon} alt="" width={48} height={48} className="h-12 w-12" />
                <div>
                  <h3 className="font-display text-lg text-black">{step.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-black/60">
          ※口座開設に必要な条件・書類は地域やアカウント状況によって異なる場合があります。
        </p>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-700">画面イメージ</p>
            <h2 className="section-title">触る前に雰囲気をチェック</h2>
          </div>
          <p className="text-sm text-black/60">画面は変更される場合があります。</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {startGallery.map((item) => (
            <div key={item.title} className="card overflow-hidden p-0">
              <Image
                src={item.src}
                alt={item.title}
                width={1152}
                height={864}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-black">{item.title}</p>
                <p className="mt-1 text-xs text-black/60">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <h2 className="section-title">リスク管理チェックリスト（一般論）</h2>
        <div className="mt-4 grid gap-3">
          {checklist.map((item) => (
            <div key={item} className="card flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
                ✓
              </span>
              <p className="text-sm text-black/70">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-black/60">
          本内容は情報提供であり、投資助言ではありません。
        </p>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "ボーナス", href: "/bonus" },
          { label: "プラットフォーム", href: "/platform" },
          { label: "FAQ", href: "/faq" },
          { label: "リスク/免責", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/start")} />
    </div>
  );
}
