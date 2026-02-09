import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "バイナリー戦略ラボJPのプライバシーポリシー。",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "プライバシーポリシー",
    description: "バイナリー戦略ラボJPのプライバシーポリシー。",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">プライバシー</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">プライバシーポリシー</h1>
        <p className="text-sm text-black/70">当サイトは必要最小限の情報のみを取り扱います。</p>
      </section>

      <section className="section space-y-6">
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">収集する情報</h2>
          <p className="text-sm text-black/70">お問い合わせ時のメールアドレス、本文など必要項目のみを取得します。</p>
        </div>
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">利用目的</h2>
          <p className="text-sm text-black/70">問い合わせ対応、誤記修正、運営上の連絡に使用します。</p>
        </div>
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">Cookie・アクセスログ</h2>
          <p className="text-sm text-black/70">閲覧状況の把握と改善のため、アクセスログを利用する場合があります。</p>
        </div>
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">保管期間</h2>
          <p className="text-sm text-black/70">利用目的に必要な期間のみ保管し、不要時は削除します。</p>
        </div>
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">第三者提供</h2>
          <p className="text-sm text-black/70">法令に基づく場合を除き、本人同意なく第三者へ提供しません。</p>
        </div>
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">お問い合わせ窓口</h2>
          <p className="text-sm text-black/70">{siteConfig.contactEmail}</p>
        </div>
      </section>

      <RelatedLinks
        items={[
          { label: "運営方針", href: "/about" },
          { label: "リスク", href: "/risk" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/privacy")} />
    </div>
  );
}
