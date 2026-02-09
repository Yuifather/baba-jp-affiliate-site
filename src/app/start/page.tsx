import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";
import { getOfficialUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "口座開設と準備",
  description:
    "ババオプションの口座開設、KYC、入金、出金確認、デモ検証までを分析型の手順で整理。",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    title: "口座開設と準備",
    description:
      "ババオプションの口座開設、KYC、入金、出金確認、デモ検証までを分析型の手順で整理。",
    url: "/start",
  },
};

const steps = [
  {
    title: "口座開設",
    description: "メール登録後、本人情報を入力して基本口座を作成。",
  },
  {
    title: "KYC確認",
    description: "本人確認の要件を満たし、利用可能状態を確認。",
  },
  {
    title: "デモ検証",
    description: "本番前に判定時間と注文フローをデモで確認。",
  },
  {
    title: "入金と出金条件の確認",
    description: "入金手段・最低額・出金条件を事前にチェック。",
  },
  {
    title: "少額で初回検証",
    description: "1回当たりの損失上限を決め、記録を残しながら実施。",
  },
];

const checklist = [
  "1回の取引上限金額を先に固定する",
  "連敗時に停止する条件を明文化する",
  "出金手続きの所要時間を最初に確認する",
  "戦略ルール外のエントリーをしない",
];

export default function StartPage() {
  const officialUrl = getOfficialUrl();

  return (
    <div className="space-y-12 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
        <div className="bg-hero-panel" aria-hidden="true" />
        <div className="relative grid gap-8 px-4 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-teal-700">初期セットアップ</p>
            <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
              口座開設から初回検証まで
            </h1>
            <p className="text-sm text-black/70">
              口座開設とKYCを完了したあと、デモで操作を確認してから少額で検証する流れを推奨します。
              出金条件は必ず最初に確認してください。
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href={officialUrl} target="_blank" rel="noopener noreferrer">
                公式で口座開設
              </a>
              <Link className="btn-secondary" href="/risk">
                リスク管理を見る
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-sm">
            <Image
              src="/media/case-history.jpg"
              alt="取引履歴と判定画面"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <h2 className="section-title">手順フロー</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="card p-4">
              <p className="text-xs font-semibold text-teal-700">STEP {index + 1}</p>
              <h3 className="mt-1 font-display text-lg text-black">{step.title}</h3>
              <p className="mt-2 text-sm text-black/70">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section rounded-3xl border border-black/10 bg-white/70 px-4 py-10 shadow-sm sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <Image
              src="/media/case-timer-focus.jpg"
              alt="判定時間の選択画面"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-teal-700">チェックリスト</p>
            <h2 className="section-title">初回前に確認すること</h2>
            <ul className="space-y-2 text-sm text-black/70">
              {checklist.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "プラットフォーム", href: "/platform" },
          { label: "FAQ", href: "/faq" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/start")} />
    </div>
  );
}
