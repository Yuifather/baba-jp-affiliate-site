import type { Metadata } from "next";
import Image from "next/image";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";
import { officialResources, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営方針",
  description:
    "バイナリー戦略ラボJPの運営目的、編集方針、更新方針、情報ソースの扱いを記載。",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "運営方針",
    description:
      "バイナリー戦略ラボJPの運営目的、編集方針、更新方針、情報ソースの扱いを記載。",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <Image
          src="/media/about-hero.jpg"
          alt="運営方針のイメージ"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
          priority
        />
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <p className="text-sm font-semibold text-teal-700">運営方針</p>
        <h1 className="section-title mt-1">バイナリー戦略ラボJPについて</h1>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="card p-4">
            <h2 className="font-display text-lg text-black">運営目的</h2>
            <p className="mt-2 text-sm text-black/70">
              ババオプションを使った実践手順を、検証可能な形で整理することを目的としています。
            </p>
          </div>
          <div className="card p-4">
            <h2 className="font-display text-lg text-black">編集基準</h2>
            <p className="mt-2 text-sm text-black/70">
              公式ページで確認できる情報を優先し、断定的な利益表現は行いません。
            </p>
          </div>
          <div className="card p-4">
            <h2 className="font-display text-lg text-black">更新方針</h2>
            <p className="mt-2 text-sm text-black/70">
              条件変更が確認された場合、対象ページの最終更新日を更新して差分を反映します。
            </p>
          </div>
          <div className="card p-4">
            <h2 className="font-display text-lg text-black">連絡先</h2>
            <p className="mt-2 text-sm text-black/70">{siteConfig.contactEmail}</p>
          </div>
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <h2 className="section-title">参照ソース</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
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
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "FAQ", href: "/faq" },
          { label: "プライバシー", href: "/privacy" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/about")} />
    </div>
  );
}
