import type { Metadata } from "next";
import Image from "next/image";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "レンジ逆張り戦略",
  description: "レンジ相場の上限/下限で反発を確認して入る手順。",
  alternates: {
    canonical: "/strategies/range-reversal",
  },
};

const entries = [
  "水平レンジの上下限が2回以上機能している",
  "上限/下限タッチ後に反転方向の足が出る",
  "判定時間を短くしすぎず、1-5分帯で固定する",
];

const avoids = [
  "レンジ幅が極端に狭い",
  "ブレイク直後で方向が未確定",
  "指標発表時刻の前後",
];

export default function RangeReversalPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">Strategy 02</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">レンジ逆張り戦略</h1>
        <p className="text-sm text-black/70">レンジ上限と下限での反発を使う、再現性重視の短期戦略です。</p>
      </section>

      <section className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <Image
          src="/media/strategy-range-reversal.svg"
          alt="レンジ逆張りで使う判定時間の画面"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
          priority
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="font-display text-xl text-black">エントリー条件</h2>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            {entries.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="font-display text-xl text-black">見送り条件</h2>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            {avoids.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <Image
          src="/media/case-multi-grid.jpg"
          alt="複数銘柄のレンジ監視画面"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
        />
      </section>

      <RelatedLinks
        items={[
          { label: "トレンド押し目戦略", href: "/strategies/trend-pullback" },
          { label: "ブレイク確認戦略", href: "/strategies/breakout-filter" },
          { label: "戦略一覧", href: "/strategies" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/strategies/range-reversal")} />
    </div>
  );
}
