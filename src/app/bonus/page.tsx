import type { Metadata } from "next";
import Image from "next/image";
import AffiliateCta from "@/components/AffiliateCta";
import MediaSlot from "@/components/MediaSlot";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getOfficialUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "初回入金50%ボーナス",
  description:
    "ババオプションのキャンペーン/ボーナスの概要と注意点を整理したページです。2026年2月6日から初回入金50%ボーナス。",
  alternates: {
    canonical: "/bonus",
  },
  openGraph: {
    title: "初回入金50%ボーナス",
    description:
      "ババオプションのキャンペーン/ボーナスの概要と注意点を整理したページです。2026年2月6日から初回入金50%ボーナス。",
    url: "/bonus",
  },
  twitter: {
    title: "初回入金50%ボーナス",
    description:
      "ババオプションのキャンペーン/ボーナスの概要と注意点を整理したページです。2026年2月6日から初回入金50%ボーナス。",
  },
};

export default function BonusPage() {
  const officialUrl = getOfficialUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <div className="bg-hero-panel" aria-hidden="true" />
        <div className="relative grid gap-8 px-4 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
          <p className="text-sm font-semibold text-teal-700">キャンペーン解説</p>
          <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            2026年2月6日から初回入金50%ボーナス
          </h1>
          <p className="text-sm text-black/70">
            現在案内されている主なキャンペーンは初回入金50%ボーナスです。ここでは2026年2月6日開始予定の内容に触れつつ、
            使ってみて感じたポイントと注意点をまとめました。
          </p>
          <a
            className="btn-primary"
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            公式で条件を確認する
          </a>
          </div>
          <MediaSlot
            src="/partner/bonus-banner.webp"
            alt="ババオプション ボーナス案内イメージ"
            width={920}
            height={700}
            objectPosition="right center"
            label="/public/partner/bonus-banner.webp"
          />
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
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
          ※キャンペーンの有無や適用条件は変更される場合があります。2026年2月6日開始予定の内容も公式で必ずご確認ください。
        </p>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="card border-amber-200 bg-amber-50/70">
          <h2 className="font-display text-xl text-black">最新条件は公式で確認</h2>
          <p className="mt-2 text-sm text-black/70">
            ボーナスの有無や適用条件は頻繁に更新される可能性があります。
          </p>
          <a
            className="btn-secondary mt-4"
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            公式で詳細を見る
          </a>
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card overflow-hidden p-0">
            <Image
              src="/partner/ui-payments.webp"
              alt="入出金イメージ"
              width={1152}
              height={864}
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">入出金の雰囲気</p>
            <h2 className="section-title">決済まわりも見ておくと安心</h2>
            <p className="text-sm text-black/70">
              入出金まわりは実際に使ってみないと分からない点があるので、公式の案内も合わせてチェックしておくと安心です。
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">プロモーション画面</p>
            <h2 className="section-title">ボーナス関連の見え方</h2>
            <p className="text-sm text-black/70">
              実際の表示は時期や地域で変わる可能性があります。最新の表示は公式でご確認ください。
            </p>
          </div>
          <div className="card overflow-hidden p-0">
            <Image
              src="/partner/ui-bonus.webp"
              alt="ボーナス画面イメージ"
              width={1280}
              height={720}
              className="h-56 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-grid-soft rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card overflow-hidden p-0">
            <Image
              src="/partner/ui-bonus-table.webp"
              alt="ボーナス条件の表イメージ"
              width={1280}
              height={720}
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">条件の早見</p>
            <h2 className="section-title">数値は公式で必ず確認</h2>
            <p className="text-sm text-black/70">
              表に出ている数値は変更される場合があります。最新の条件は公式ページでご確認ください。
            </p>
          </div>
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "はじめ方", href: "/start" },
          { label: "プラットフォーム", href: "/platform" },
          { label: "FAQ", href: "/faq" },
          { label: "リスク/免責", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated="2026年2月5日" />
    </div>
  );
}
