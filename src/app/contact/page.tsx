import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "当サイトへのお問い合わせ方法を記載しています。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=お問い合わせ&body=お問い合わせ内容をご記入ください。`;

  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">Contact</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          お問い合わせ
        </h1>
        <p className="text-sm text-black/70">
          サーバーを使わないお問い合わせフォームのため、メールでのご連絡をお願いします。
        </p>
      </section>

      <section className="section">
        <div className="card space-y-3">
          <p className="text-sm text-black/70">以下のメールアドレスからご連絡ください。</p>
          <a className="btn-primary w-fit" href={mailto}>
            {siteConfig.contactEmail}
          </a>
          <p className="text-xs text-black/60">
            ※お問い合わせでは必要最小限の情報のみご提供ください。個人情報は適切に管理します。
          </p>
        </div>
      </section>
    </div>
  );
}
