import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "当サイトの個人情報の取扱いについて説明します。",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">プライバシー</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-black/70">
          当サイトはガイドサイトとして、必要最小限の情報のみを取り扱います。
        </p>
      </section>

      <section className="section space-y-6">
        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">収集する情報</h2>
          <p className="text-sm text-black/70">
            お問い合わせ時に入力された氏名・メールアドレス・問い合わせ内容などの情報を取得します。
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">利用目的</h2>
          <p className="text-sm text-black/70">
            お問い合わせへの回答、サービス品質向上のための参考、サイト運営に必要な連絡のために利用します。
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">Cookie・アクセスログ</h2>
          <p className="text-sm text-black/70">
            当サイトはアクセス解析や利便性向上のため、Cookieやログ情報を取得する場合があります。
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">保管期間</h2>
          <p className="text-sm text-black/70">
            取得した情報は利用目的に必要な期間のみ保管し、不要となった場合は適切に削除します。
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">第三者提供</h2>
          <p className="text-sm text-black/70">
            法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="font-display text-xl text-black">お問い合わせ窓口</h2>
          <p className="text-sm text-black/70">{siteConfig.contactEmail} までご連絡ください。</p>
        </div>
      </section>
    </div>
  );
}
