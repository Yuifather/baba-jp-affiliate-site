import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "リスクと資金管理",
  description:
    "バイナリーオプション取引の損失リスク、資金管理、禁止すべき行動を分析的に整理。",
  alternates: {
    canonical: "/risk",
  },
  openGraph: {
    title: "リスクと資金管理",
    description:
      "バイナリーオプション取引の損失リスク、資金管理、禁止すべき行動を分析的に整理。",
    url: "/risk",
  },
};

const riskPoints = [
  "短時間判定は値動きノイズの影響が大きく、想定外の損失が出やすい。",
  "連敗時の追加入金は損失拡大の要因になる。停止基準を先に決める。",
  "出金条件未確認のまま資金を入れると、資金拘束リスクがある。",
  "高勝率をうたう情報は、検証条件と統計母数を確認するまで採用しない。",
  "生活費を取引資金にしない。余裕資金の範囲でのみ実施する。",
  "本サイトは投資助言ではない。最終判断は自己責任。",
];

export default function RiskPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">リスク管理</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          損失前提でルールを設計する
        </h1>
        <p className="text-sm text-black/70">
          利益より先に、損失を固定する設計が必要です。特にバイナリーオプションは判定時間が短いため、
          ルール外エントリーの影響が大きくなります。
        </p>
      </section>

      <section className="section">
        <div className="grid gap-3">
          {riskPoints.map((point) => (
            <div key={point} className="card p-4">
              <p className="text-sm text-black/75">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-black/60">Not investment advice. 本サイトは情報提供のみを目的としています。</p>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "口座開設", href: "/start" },
          { label: "FAQ", href: "/faq" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/risk")} />
    </div>
  );
}
