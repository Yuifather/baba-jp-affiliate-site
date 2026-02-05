import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";
import MediaSlot from "@/components/MediaSlot";
import { getPartnerUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "ボーナス解説",
  description:
    "入金不要¥5,000ボーナスの概要と注意点を過度な表現を避けて整理したページです。",
};

export default function BonusPage() {
  const partnerUrl = getPartnerUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-teal-700">キャンペーン解説</p>
          <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            入金不要¥5,000ボーナスがある場合のポイント
          </h1>
          <p className="text-sm text-black/70">
            ボーナスはキャンペーンの有無や条件で内容が変わります。ここでは一般的な注意点をまとめています。
          </p>
          <a
            className="btn-primary"
            href={partnerUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            公式で条件を確認する（PR）
          </a>
        </div>
        <MediaSlot
          src="/partner/bonus-banner.webp"
          alt="ボーナス案内イメージ"
          width={920}
          height={700}
          label="/public/partner/bonus-banner.webp"
        />
      </section>

      <section className="section">
        <h2 className="section-title">注意しておきたい点</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card">
            <h3 className="font-display text-lg text-black">ボーナス自体は出金不可</h3>
            <p className="mt-2 text-sm text-black/70">
              ボーナスは取引に使うための資金として扱われる場合があります。
            </p>
          </div>
          <div className="card">
            <h3 className="font-display text-lg text-black">利益は出金可能な場合</h3>
            <p className="mt-2 text-sm text-black/70">
              ボーナスで得た利益は出金できるとされることがありますが、条件確認が必要です。
            </p>
          </div>
          <div className="card">
            <h3 className="font-display text-lg text-black">出金時に条件が適用</h3>
            <p className="mt-2 text-sm text-black/70">
              出金時にボーナス比率が差し引かれる、条件未達で消滅する場合があります。
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-black/60">
          ※キャンペーンの有無や適用条件は変更される場合があります。必ず公式条件をご確認ください。
        </p>
      </section>

      <section className="section">
        <div className="card border-amber-200 bg-amber-50/70">
          <h2 className="font-display text-xl text-black">最新条件は公式で確認</h2>
          <p className="mt-2 text-sm text-black/70">
            ボーナスの有無や適用条件は頻繁に更新される可能性があります。
          </p>
          <a
            className="btn-secondary mt-4"
            href={partnerUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            公式サイトで詳細を見る（PR）
          </a>
        </div>
      </section>

      <AffiliateCta />
    </div>
  );
}
