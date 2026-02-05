import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "リスクと注意点",
  description: "バイナリーオプション取引に関する主なリスクと注意点をまとめています。",
};

const riskPoints = [
  "バイナリーオプション取引は価格変動により損失が生じる可能性があります。",
  "短時間で結果が出る取引は、判断の難易度が高くなる場合があります。",
  "取引数量や期間の設定によって、損失幅が大きくなる可能性があります。",
  "利益が出る可能性はありますが、必ず利益が出るわけではありません。",
  "ご自身の資金状況・経験に合った範囲で利用することが重要です。",
  "不明点は公式のLegal Documentsやサポートで確認してください。",
];

export default function RiskPage() {
  return (
    <div className="space-y-12 pt-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">重要なお知らせ</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          リスクと注意点
        </h1>
        <p className="text-sm text-black/70">
          バイナリーオプション取引には損失の可能性があり、自己責任で行う必要があります。
        </p>
      </section>

      <section className="section">
        <div className="grid gap-3">
          {riskPoints.map((point) => (
            <div key={point} className="card">
              <p className="text-sm text-black/70">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-black/60">
          Not investment advice. 本サイトの内容は情報提供であり、投資助言ではありません。
        </p>
      </section>

      <AffiliateCta />
    </div>
  );
}
