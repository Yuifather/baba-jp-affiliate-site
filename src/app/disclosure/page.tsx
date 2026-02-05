import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "ご案内",
  description: "当サイトの運営方針と情報提供の範囲について説明します。",
  alternates: {
    canonical: "/disclosure",
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
    </div>
  );
}
