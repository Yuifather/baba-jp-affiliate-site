import type { Metadata } from "next";
import Image from "next/image";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ブレイク確認戦略",
  description: "ブレイク後の確定足を使ってフェイクを減らす戦略。",
  alternates: {
    canonical: "/strategies/breakout-filter",
  },
};

const entries = [
  "水平ライン抜け後、同方向の確定足を1本待つ",
  "出来高または値幅の拡大を確認する",
  "直近戻り高値/安値を損切り目安に設定する",
];

const avoids = [
  "ライン到達前の先回りエントリー",
  "フェイクが頻発している時間帯",
  "連続ブレイクで伸び切った局面",
];

export default function BreakoutFilterPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">Strategy 03</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">ブレイク確認戦略</h1>
        <p className="text-sm text-black/70">ダマシを減らすため、抜けた事実を確認してから入る戦略です。</p>
      </section>

      <section className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <Image
          src="/media/strategy-breakout-filter.svg"
          alt="ブレイク確認戦略のチャート例"
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
          alt="ブレイク候補を複数監視している画面"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
        />
      </section>

      <RelatedLinks
        items={[
          { label: "トレンド押し目戦略", href: "/strategies/trend-pullback" },
          { label: "レンジ逆張り戦略", href: "/strategies/range-reversal" },
          { label: "戦略一覧", href: "/strategies" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/strategies/breakout-filter")} />
    </div>
  );
}
