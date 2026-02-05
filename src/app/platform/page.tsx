import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";
import MediaSlot from "@/components/MediaSlot";
import { getPartnerUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "プラットフォーム",
  description:
    "ババオプションのWeb・アプリ・デスクトップの利用イメージを紹介するページです。",
};

const platforms = [
  {
    title: "Web（ブラウザ）",
    description: "インストール不要。すぐにログインして主要機能を確認できます。",
  },
  {
    title: "モバイルアプリ",
    description: "外出先でもチャートや取引状況を確認しやすい構成。",
  },
  {
    title: "デスクトップ（HTS）",
    description: "大画面でチャートを並べたい方に向いた利用方法。",
  },
];

export default function PlatformPage() {
  const partnerUrl = getPartnerUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
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
            href={partnerUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            ババオプションのプラットフォームを見る（PR）
          </a>
        </div>
        <MediaSlot
          src="/partner/platform-banner.webp"
          alt="ババオプション プラットフォームイメージ"
          width={920}
          height={700}
          label="/public/partner/platform-banner.webp"
        />
      </section>

      <section className="section">
        <h2 className="section-title">代表的な利用シーン</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {platforms.map((platform) => (
            <div key={platform.title} className="card">
              <h3 className="font-display text-lg text-black">{platform.title}</h3>
              <p className="mt-2 text-sm text-black/70">{platform.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-black/60">
          ※対応デバイスや機能は地域・アカウント条件によって異なる場合があります。
        </p>
      </section>

      <section className="section">
        <div className="card border-teal-700/20">
          <h2 className="font-display text-xl text-black">まずは公式で環境をチェック</h2>
          <p className="mt-2 text-sm text-black/70">
            ダウンロードリンクや推奨環境は公式サイトが最も正確です。
          </p>
          <a
            className="btn-secondary mt-4"
            href={partnerUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            ババオプション公式へ（PR）
          </a>
        </div>
      </section>

      <AffiliateCta />
    </div>
  );
}
