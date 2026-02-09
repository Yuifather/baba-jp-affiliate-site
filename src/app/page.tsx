import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";
import { getOfficialUrl, officialResources } from "@/lib/site";

export const metadata: Metadata = {
  title: "ホーム",
  description:
    "ババオプションの実践向けガイド。海外バイナリーオプション業者の比較観点、口座開設、出金、戦略、評判確認の手順を分析的に整理。",
  keywords: [
    "海外バイナリーオプション業者",
    "ハイローオプション",
    "バイナリーオプション おすすめ",
    "口座開設",
    "出金",
    "評判",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "バイナリー戦略ラボJP",
    description:
      "ババオプションの実践向けガイド。海外バイナリーオプション業者の比較観点、口座開設、出金、戦略、評判確認の手順を分析的に整理。",
    url: "/",
  },
  twitter: {
    title: "バイナリー戦略ラボJP",
    description:
      "ババオプションの実践向けガイド。海外バイナリーオプション業者の比較観点、口座開設、出金、戦略、評判確認の手順を分析的に整理。",
  },
};

const strategyCards = [
  {
    title: "トレンド押し目戦略",
    description: "方向性が出た後の押し目/戻りを狙う基本戦略。",
    href: "/strategies/trend-pullback",
    image: "/media/strategy-trend-pullback.svg",
  },
  {
    title: "レンジ逆張り戦略",
    description: "高値圏・安値圏の反発を判定時間と合わせて使う戦略。",
    href: "/strategies/range-reversal",
    image: "/media/strategy-range-reversal.svg",
  },
  {
    title: "ブレイク確認戦略",
    description: "フェイクを避けるためにローソク確定を待つ戦略。",
    href: "/strategies/breakout-filter",
    image: "/media/strategy-breakout-filter.svg",
  },
];

const comparePoints = [
  "海外バイナリーオプション業者の比較では、口座開設の所要時間とKYC要件を先に確認する。",
  "ハイローオプションを含む他サービス比較時は、判定時間・銘柄数・注文UIを同一条件で比べる。",
  "バイナリーオプション おすすめ情報は、評判だけでなく出金ルールと公式サポート導線まで確認する。",
];

const facts = [
  "公式記載ベースで最小取引額は$1から",
  "デモ口座は$10,000相当の検証枠",
  "取扱銘柄は70種類以上（時期により変動）",
  "判定時間は最短5秒の設定が可能",
];

export default function Home() {
  const officialUrl = getOfficialUrl();

  return (
    <div className="space-y-12">
      <section className="section relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <div className="bg-hero-panel" aria-hidden="true" />
        <div className="relative grid items-center gap-8 px-4 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <span className="tag">分析型バイナリーオプションガイド</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-black sm:text-5xl">
              日本で実践するための
              <br />
              バイナリーオプション戦略ノート
            </h1>
            <p className="text-base text-black/70">
              本サイトは、ババオプションの画面仕様と売買ルールを実務目線で整理した情報サイトです。
              口座開設から出金確認までの導線を明示し、検証可能な条件のみ掲載します。
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href={officialUrl} target="_blank" rel="noopener noreferrer">
                公式サイトで仕様確認
              </a>
              <Link className="btn-secondary" href="/strategies">
                戦略一覧を見る
              </Link>
            </div>
            <p className="risk-text">
              利益が出る可能性はありますが、損失も発生します。必ずリスク許容度に応じて判断してください。
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-sm">
            <Image
              src="/media/hero-official.jpg"
              alt="ババオプションの取引画面イメージ"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-teal-700">公式記載ベース</p>
            <h2 className="section-title">確認しておくべき数値</h2>
          </div>
          <a className="text-sm font-semibold text-teal-700" href={officialUrl} target="_blank" rel="noopener noreferrer">
            公式ソースを見る →
          </a>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact} className="card p-4">
              <p className="text-sm text-black/75">{fact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-teal-700">実践戦略</p>
            <h2 className="section-title">3つの基礎戦略</h2>
          </div>
          <Link className="text-sm font-semibold text-teal-700" href="/strategies">
            戦略一覧へ →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {strategyCards.map((card) => (
            <article key={card.href} className="card overflow-hidden p-0">
              <Image src={card.image} alt={card.title} width={1280} height={720} className="h-44 w-full object-cover" />
              <div className="space-y-2 p-4">
                <h3 className="font-display text-lg text-black">{card.title}</h3>
                <p className="text-sm text-black/70">{card.description}</p>
                <Link className="text-sm font-semibold text-teal-700" href={card.href}>
                  詳細を見る →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <p className="text-sm font-semibold text-teal-700">比較の観点</p>
        <h2 className="section-title mt-1">業者選定で見るポイント</h2>
        <div className="mt-5 grid gap-3">
          {comparePoints.map((point) => (
            <div key={point} className="card p-4">
              <p className="text-sm text-black/75">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">公式情報チャネル</p>
            <h2 className="section-title">更新確認の動線</h2>
            <p className="text-sm text-black/70">
              仕様変更は公式サイト、運用情報はX/ブログ、操作不明点はヘルプセンターを確認するのが最短です。
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {officialResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-black/70 hover:text-black"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/5">
            <Image
              src="/media/case-platform-diagonal.jpg"
              alt="プラットフォーム画面のクローズアップ"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "口座開設", href: "/start" },
          { label: "ボーナス", href: "/bonus" },
          { label: "FAQ", href: "/faq" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/")} />
    </div>
  );
}
