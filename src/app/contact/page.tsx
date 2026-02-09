import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "バイナリー戦略ラボJPへのお問い合わせ方法。",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "お問い合わせ",
    description: "バイナリー戦略ラボJPへのお問い合わせ方法。",
    url: "/contact",
  },
};

export default function ContactPage() {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=お問い合わせ&body=お問い合わせ内容をご記入ください。`;

  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">Contact</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">お問い合わせ</h1>
        <p className="text-sm text-black/70">取材・修正依頼・誤記報告はメールでご連絡ください。</p>
      </section>

      <section className="section">
        <div className="card space-y-3">
          <p className="text-sm text-black/70">連絡先メールアドレス</p>
          <a className="btn-primary w-fit" href={mailto}>
            {siteConfig.contactEmail}
          </a>
          <p className="text-xs text-black/60">個人情報は必要最小限で送信してください。</p>
        </div>
      </section>

      <RelatedLinks
        items={[
          { label: "運営方針", href: "/about" },
          { label: "プライバシー", href: "/privacy" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/contact")} />
    </div>
  );
}
