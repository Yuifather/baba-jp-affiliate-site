import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "PR/広告表記",
  description: "当サイトのパートナー関係とPR/広告表記について説明します。",
  alternates: {
    canonical: "/disclosure",
  },
};

export default function DisclosurePage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">透明性のために</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          PR/広告表記
        </h1>
        <p className="text-sm text-black/70">
          当サイトはババオプションのパートナーとして、プロモーション（広告）を含む情報提供サイトです。
        </p>
      </section>

      <section className="section">
        <div className="card space-y-4">
          <h2 className="font-display text-xl text-black">パートナー関係について</h2>
          <p className="text-sm text-black/70">
            当サイトにはパートナーリンクが含まれます。詳細や条件は公式サイトでご確認ください。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card border-amber-200 bg-amber-50/70">
          <h2 className="font-display text-xl text-black">情報提供の範囲</h2>
          <p className="mt-2 text-sm text-black/70">
            当サイトの内容は一般的な情報提供であり、投資助言ではありません。条件や詳細は公式サイトでご確認ください。
          </p>
        </div>
      </section>

      <AffiliateCta />
    </div>
  );
}
