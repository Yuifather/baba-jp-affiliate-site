import type { Metadata } from "next";
import Image from "next/image";
import AffiliateCta from "@/components/AffiliateCta";
import MediaSlot from "@/components/MediaSlot";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getOfficialUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "プラットフォーム",
  description:
    "バイナリーオプションの取引環境として、ババオプションのWeb・アプリ・デスクトップの利用イメージを紹介するページです。",
  alternates: {
    canonical: "/platform",
  },
  openGraph: {
    title: "プラットフォーム",
    description:
      "バイナリーオプションの取引環境として、ババオプションのWeb・アプリ・デスクトップの利用イメージを紹介するページです。",
    url: "/platform",
  },
  twitter: {
    title: "プラットフォーム",
    description:
      "バイナリーオプションの取引環境として、ババオプションのWeb・アプリ・デスクトップの利用イメージを紹介するページです。",
  },
};

const platforms = [
  {
    title: "Web（ブラウザ）",
    description: "インストール不要。さっと確認できるのが便利でした。",
    image: "/partner/ui-web.webp",
  },
  {
    title: "モバイルアプリ",
    description: "移動中でも操作しやすく、触っていて軽快です。",
    image: "/partner/ui-mobile.webp",
  },
  {
    title: "デスクトップ（HTS）",
    description: "大画面で複数情報を見たい人向け。",
    image: "/partner/ui-desktop.webp",
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
          <p className="text-sm font-semibold text-teal-700">利用環境</p>
          <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            どのデバイスでも迷わない
          </h1>
          <p className="text-sm text-black/70">
            Web・アプリ・デスクトップの体験イメージをまとめました。対応状況は公式でご確認ください。
          </p>
          <a
            className="btn-primary"
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            公式のプラットフォームを見る
          </a>
          </div>
          <MediaSlot
            src="/partner/platform-banner.webp"
            alt="ババオプション プラットフォームイメージ"
            width={920}
            height={700}
            objectPosition="right center"
            label="/public/partner/platform-banner.webp"
          />
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <h2 className="section-title">代表的な利用シーン</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {platforms.map((platform) => (
            <div key={platform.title} className="card overflow-hidden p-0">
              <Image
                src={platform.image}
                alt={platform.title}
                width={1152}
                height={864}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-display text-lg text-black">{platform.title}</h3>
                <p className="mt-2 text-sm text-black/70">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-black/60">
          ※対応デバイスや機能は地域・アカウント条件によって異なる場合があります。
        </p>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="card border-teal-700/20">
          <h2 className="font-display text-xl text-black">まずは公式で環境をチェック</h2>
          <p className="mt-2 text-sm text-black/70">
            ダウンロードリンクや推奨環境は公式サイトが最も正確です。
          </p>
          <a
            className="btn-secondary mt-4"
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            公式サイトへ
          </a>
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "はじめ方", href: "/start" },
          { label: "ボーナス", href: "/bonus" },
          { label: "FAQ", href: "/faq" },
          { label: "リスク/免責", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated="2026年2月5日" />
    </div>
  );
}
