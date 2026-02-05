import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "ご案内",
  description: "当サイトの運営方針と情報提供の範囲について説明します。",
  alternates: {
    canonical: "/disclosure",
  },
  openGraph: {
    title: "ご案内",
    description: "当サイトの運営方針と情報提供の範囲について説明します。",
    url: "/disclosure",
  },
  twitter: {
    title: "ご案内",
    description: "当サイトの運営方針と情報提供の範囲について説明します。",
  },
};

export default function DisclosurePage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">ご案内</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          ご案内
        </h1>
        <p className="text-sm text-black/70">
          当サイトはバイナリーオプションの使い方や注意点を整理した情報提供サイトです。
        </p>
      </section>

      <section className="section">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card space-y-3">
            <h2 className="font-display text-xl text-black">運営者情報</h2>
            <p className="text-sm text-black/70">
              運営者: {siteConfig.name}
            </p>
            <p className="text-sm text-black/70">
              連絡先: {siteConfig.contactEmail}
            </p>
            <p className="text-sm text-black/70">
              目的: バイナリーオプションの使い方・注意点を整理し、公式情報への導線を提供するため。
            </p>
          </div>
          <div className="card space-y-3">
            <h2 className="font-display text-xl text-black">編集方針 / 更新方針</h2>
            <p className="text-sm text-black/70">
              公式情報を参照しつつ、体験メモとして分かりやすい表現に整理します。
            </p>
            <p className="text-sm text-black/70">
              重要な条件・数値が変わる可能性があるため、内容は随時更新します。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card space-y-4">
          <h2 className="font-display text-xl text-black">情報提供の範囲</h2>
          <p className="text-sm text-black/70">
            記載内容は一般的な情報提供であり、投資助言ではありません。条件や詳細は公式サイトでご確認ください。
          </p>
          <p className="text-sm text-black/70">
            バイナリーオプション取引には損失の可能性があります。余裕資金で、自己責任でご利用ください。
          </p>
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "はじめ方", href: "/start" },
          { label: "FAQ", href: "/faq" },
          { label: "プライバシー", href: "/privacy" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
      />

      <PageMeta lastUpdated="2026年2月5日" />
    </div>
  );
}
