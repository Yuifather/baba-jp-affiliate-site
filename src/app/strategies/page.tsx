import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "戦略一覧",
  description:
    "ババオプション実践向けに、トレンド押し目・レンジ逆張り・ブレイク確認の3戦略を整理。",
  alternates: {
    canonical: "/strategies",
  },
  openGraph: {
    title: "戦略一覧",
    description:
      "ババオプション実践向けに、トレンド押し目・レンジ逆張り・ブレイク確認の3戦略を整理。",
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
          すべて検証前提の戦略です。期待値は相場状況に依存するため、単独での再現性を保証するものではありません。
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
