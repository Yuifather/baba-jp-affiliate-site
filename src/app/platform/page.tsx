import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";
import { getOfficialUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "プラットフォーム",
  description:
    "ババオプションのWeb、モバイル、デスクトップ環境を比較し、分析向けの使い分けを整理。",
  alternates: {
    canonical: "/platform",
  },
  openGraph: {
    title: "プラットフォーム",
    description:
      "ババオプションのWeb、モバイル、デスクトップ環境を比較し、分析向けの使い分けを整理。",
    url: "/platform",
  },
};

const platforms = [
  {
    title: "Web Terminal",
    note: "インストール不要。分析メモを見ながらすぐ検証できる。",
    image: "/media/case-web-hero.jpg",
  },
  {
    title: "Mobile App",
    note: "外出時でも判定時間の管理と残高確認がしやすい。",
    image: "/media/case-mobile-hero.jpg",
  },
  {
    title: "Desktop / Multi View",
    note: "複数チャートを同時監視し、エントリー候補を絞り込める。",
    image: "/media/case-multi-grid.jpg",
  },
];

export default function PlatformPage() {
  const officialUrl = getOfficialUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <div className="bg-hero-panel" aria-hidden="true" />
        <div className="relative grid gap-8 px-4 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-teal-700">取引環境</p>
            <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
              デバイス別の使い分け
            </h1>
            <p className="text-sm text-black/70">
              同じ戦略でもデバイスごとに確認しやすい情報が変わります。
              エントリー判断は大画面、監視はモバイル、といった使い分けが有効です。
            </p>
            <a className="btn-primary" href={officialUrl} target="_blank" rel="noopener noreferrer">
              公式プラットフォームを見る
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-sm">
            <Image
              src="/media/platform-mix.jpg"
              alt="複数デバイスのプラットフォーム画面"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">用途別の見方</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {platforms.map((item) => (
            <article key={item.title} className="card overflow-hidden p-0">
              <Image src={item.image} alt={item.title} width={1280} height={720} className="h-44 w-full object-cover" />
              <div className="space-y-2 p-4">
                <h3 className="font-display text-lg text-black">{item.title}</h3>
                <p className="text-sm text-black/70">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <Image
              src="/media/case-platform-diagonal.jpg"
              alt="プラットフォームのUIクローズアップ"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">実務メモ</p>
            <h2 className="section-title">導入前チェック</h2>
            <ul className="space-y-2 text-sm text-black/70">
              <li>・Web版でチャート/注文UIを確認</li>
              <li>・モバイルで通知と残高表示を確認</li>
              <li>・必要ならデスクトップで複数監視へ拡張</li>
            </ul>
            <Link className="text-sm font-semibold text-teal-700" href="/start">
              口座開設フローへ →
            </Link>
          </div>
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "口座開設", href: "/start" },
          { label: "FAQ", href: "/faq" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/platform")} />
    </div>
  );
}
