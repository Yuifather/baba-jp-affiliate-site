import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";
import { getOfficialUrl, getPromoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "入金ボーナス分析",
  description:
    "ババオプションの初回50%入金ボーナスの期間、適用条件、確認手順を公式情報ベースで整理。",
  alternates: {
    canonical: "/bonus",
  },
  openGraph: {
    title: "入金ボーナス分析",
    description:
      "ババオプションの初回50%入金ボーナスの期間、適用条件、確認手順を公式情報ベースで整理。",
    url: "/bonus",
  },
};

const highlights = [
  "初回入金に対して50%ボーナス",
  "2回目以降は20%ボーナス",
  "総額上限は1,500,000円（公式記載）",
  "期間: 2026年2月6日 - 2026年2月28日（公式ページ確認時点）",
];

const cautions = [
  "付与条件や対象通貨は変更される場合があります。",
  "ボーナスの出金可否や消滅条件は必ず公式規約で確認してください。",
  "本ページの数値は最終確認日ベースで、リアルタイム更新ではありません。",
];

export default function BonusPage() {
  const officialUrl = getOfficialUrl();
  const promoUrl = getPromoUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/media/bonus-hero.jpg"
            alt="初回入金50%ボーナスの公式イメージ"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <p className="text-sm font-semibold text-teal-700">公式プロモーション分析</p>
        <h1 className="section-title mt-1">初回50%入金ボーナスの確認ポイント</h1>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item} className="card p-4">
              <p className="text-sm text-black/75">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn-primary" href={promoUrl} target="_blank" rel="noopener noreferrer">
            公式プロモーションページ
          </a>
          <a className="btn-secondary" href={officialUrl} target="_blank" rel="noopener noreferrer">
            公式サイトトップ
          </a>
        </div>
        <p className="mt-4 text-xs text-black/60">最終確認日: 2026年2月9日 / 出典: babaoption.com</p>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <Image
              src="/media/case-bonus-cards.jpg"
              alt="ボーナス条件カードの画面"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">注意事項</p>
            <h2 className="section-title">確認漏れを防ぐチェック</h2>
            <ul className="space-y-2 text-sm text-black/70">
              {cautions.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
            <Link className="text-sm font-semibold text-teal-700" href="/risk">
              リスク/免責を確認 →
            </Link>
          </div>
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/10">
          <Image
            src="/media/case-bonus-table.jpg"
            alt="ボーナス通貨別テーブルの画面"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "口座開設", href: "/start" },
          { label: "FAQ", href: "/faq" },
          { label: "運営方針", href: "/about" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/bonus")} />
    </div>
  );
}
