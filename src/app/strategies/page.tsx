import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "戦略一覧",
  description:
    "バイナリーオプションの短期取引向けに、逆張り・ライントレード・テクニカル分析の実践手順を整理。",
  keywords: [
    "バイナリーオプション",
    "勝てる手法",
    "短期取引",
    "逆張り",
    "テクニカル分析",
    "ライントレード",
    "インジケーター",
    "トレンド転換",
    "デモトレード",
    "バイナリーオプション ツール",
  ],
  alternates: {
    canonical: "/strategies",
  },
  openGraph: {
    title: "戦略一覧",
    description:
      "バイナリーオプションの短期取引向けに、逆張り・ライントレード・テクニカル分析の実践手順を整理。",
    url: "/strategies",
  },
};

const strategies = [
  {
    title: "トレンド押し目戦略",
    href: "/strategies/trend-pullback",
    image: "/media/strategy-trend-pullback.svg",
    desc: "方向性が出たあと、押し目/戻りを待って同方向に入る。",
  },
  {
    title: "レンジ逆張り戦略",
    href: "/strategies/range-reversal",
    image: "/media/strategy-range-reversal.svg",
    desc: "高値帯と安値帯で反発確認後に短期判定を合わせる。",
  },
  {
    title: "ブレイク確認戦略",
    href: "/strategies/breakout-filter",
    image: "/media/strategy-breakout-filter.svg",
    desc: "水平ラインを抜けた後の確定足を待ってから入る。",
  },
];

export default function StrategiesPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">Trading Methods</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">戦略一覧</h1>
        <p className="text-sm text-black/70">
          バイナリーオプションの短期取引で使う主要手法を整理しています。勝てる手法という単語だけで判断せず、
          テクニカル分析とデモトレードで再現性を確認してから運用してください。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {strategies.map((strategy) => (
          <article key={strategy.href} className="card overflow-hidden p-0">
            <Image src={strategy.image} alt={strategy.title} width={1280} height={720} className="h-44 w-full object-cover" />
            <div className="space-y-2 p-4">
              <h2 className="font-display text-lg text-black">{strategy.title}</h2>
              <p className="text-sm text-black/70">{strategy.desc}</p>
              <Link className="text-sm font-semibold text-teal-700" href={strategy.href}>
                詳細ページへ →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-teal-700">分析フロー</p>
          <h2 className="font-display text-2xl text-black">テクニカル分析とツールの使い方</h2>
          <p className="text-sm text-black/70">
            ライントレードで価格帯を定義し、インジケーターで過熱を確認、トレンド転換サインが出た場面のみ検討する流れです。
            バイナリーオプション ツールは補助として使い、最終判断はチャートの根拠で行います。
          </p>
        </div>
        <div className="mt-5 overflow-hidden rounded-3xl border border-black/10 bg-black/5">
          <Image
            src="/media/analysis-tool-flow.svg"
            alt="テクニカル分析からエントリー判断までのフロー図"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <RelatedLinks
        items={[
          { label: "口座開設", href: "/start" },
          { label: "プラットフォーム", href: "/platform" },
          { label: "リスク", href: "/risk" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/strategies")} />
    </div>
  );
}
