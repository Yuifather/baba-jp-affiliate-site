import type { Metadata } from "next";
import Image from "next/image";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";
import { getOfficialUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "トレンド押し目戦略",
  description:
    "トレンド方向に押し目/戻りを待ってエントリーする実践手順。",
  alternates: {
    canonical: "/strategies/trend-pullback",
  },
};

const entries = [
  "上位足で高値/安値の更新が継続している",
  "押し目到達後に同方向の反転足が出る",
  "直近高値/安値を背に損切り位置を定義できる",
];

const avoids = [
  "経済指標直前の乱高下",
  "方向感のない横ばい局面",
  "連続損失直後の感情エントリー",
];

export default function TrendPullbackPage() {
  const officialUrl = getOfficialUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">Strategy 01</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">トレンド押し目戦略</h1>
        <p className="text-sm text-black/70">トレンド方向の優位性を使い、押し目/戻りで入る最も基本的な手法です。</p>
      </section>

      <section className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <Image
          src="/media/strategy-trend-pullback.svg"
          alt="トレンド押し目戦略のチャート例"
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

      <section className="card space-y-3">
        <h2 className="font-display text-xl text-black">運用メモ</h2>
        <p className="text-sm text-black/70">判定時間は相場のボラティリティに合わせて固定し、毎回変えないことが検証上有利です。</p>
        <p className="text-sm text-black/70">連敗時は即停止し、同じ条件で再検証してから再開してください。</p>
        <a className="text-sm font-semibold text-teal-700" href={officialUrl} target="_blank" rel="noopener noreferrer">
          公式環境で確認する →
        </a>
      </section>

      <RelatedLinks
        items={[
          { label: "レンジ逆張り戦略", href: "/strategies/range-reversal" },
          { label: "ブレイク確認戦略", href: "/strategies/breakout-filter" },
          { label: "戦略一覧", href: "/strategies" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/strategies/trend-pullback")} />
    </div>
  );
}
