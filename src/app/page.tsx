import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AffiliateCta from "@/components/AffiliateCta";
import FaqAccordion from "@/components/FaqAccordion";
import MediaSlot from "@/components/MediaSlot";
import { getPartnerUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "日本語で迷わないガイド",
  description:
    "ババオプションを使ってみた感想と使い方を日本語でまとめたガイドサイト。公式条件の確認から始められます。",
};

const featureCards = [
  {
    title: "$1から試せる設計",
    description: "小さく始められるのは助かる（公式記載ベース）。",
  },
  {
    title: "デモ$10,000",
    description: "まずはデモで操作の癖をつかめました。",
  },
  {
    title: "最大888%ペイアウト設計",
    description: "商品・条件により変動。高めに見える時期もあります。",
  },
  {
    title: "70+の取引資産",
    description: "選択肢が多く、気になる銘柄を探しやすい印象。",
  },
  {
    title: "最短5秒から満期設定",
    description: "テンポよく試せて楽しい一方、判断は慎重にしたいところ。",
  },
  {
    title: "画面が直感的",
    description: "ボタン配置が分かりやすく、迷いにくい印象。",
  },
];

const bonusHighlight = {
  title: "明日（2026年2月6日）から初回入金50%ボーナスの案内",
  note: "開始日・条件は変更される場合があります。必ず公式でご確認ください。",
};

const steps = [
  {
    title: "アカウント作成",
    description: "公式サイトから登録し、基本情報を入力します。",
    icon: "/images/step-1.svg",
  },
  {
    title: "メール認証・本人確認",
    description: "安全のため、メール認証と本人確認（KYC）を進めます。",
    icon: "/images/step-2.svg",
  },
  {
    title: "デモ/入金 → 取引開始",
    description: "デモで練習後、必要に応じて入金して取引を始めます。",
    icon: "/images/step-3.svg",
  },
];

const impressions = [
  {
    title: "使いやすい",
    description: "画面が見やすく、操作が直感的で迷いにくいと感じました。",
  },
  {
    title: "テンポが良い",
    description: "短時間で試せるので、触っていて楽しいと感じました。",
  },
  {
    title: "利益の可能性",
    description: "相場が合えば利益が出る可能性はありますが、保証はありません。",
  },
];

const faqItems = [
  {
    question: "公式サイトと何が違いますか？",
    answer:
      "当サイトは体験メモを含むガイドサイトです。最新の条件・規約・キャンペーンは必ず公式でご確認ください。",
  },
  {
    question: "デモ口座はありますか？",
    answer:
      "公式記載では$10,000のデモが用意されています。内容は変更される場合があるため最新情報をご確認ください。",
  },
  {
    question: "最低取引額はいくらですか？",
    answer:
      "公式記載では$1から取引できる設計とされています。条件は変更される場合があります。",
  },
  {
    question: "ボーナスは出金できますか？",
    answer:
      "ボーナス自体は出金不可とされる場合があります。利益の出金や条件は公式でご確認ください。",
  },
  {
    question: "スマホだけで利用できますか？",
    answer:
      "Web・アプリ・デスクトップなど複数の利用方法が用意されているとされています。",
  },
  {
    question: "リスクはありますか？",
    answer:
      "バイナリーオプション取引には損失の可能性があります。余裕資金で、自己責任でご利用ください。",
  },
];

export default function Home() {
  const partnerUrl = getPartnerUrl();

  return (
    <div>
      <section className="section pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="tag">ババオプション 使ってみたメモ</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-black sm:text-5xl">
              意外とシンプルで、
              <br />
              ババオプションは触りやすい
            </h1>
            <p className="text-base text-black/70 sm:text-lg">
              触ってみた感想ベースで、使い方やポイントを整理しました。相場が合えば利益が出る可能性はありますが、
              損失の可能性もあります。条件や仕様は変わることがあるため、最新は公式で必ずご確認ください。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                className="btn-primary"
                href={partnerUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                ババオプションを見てみる（PR）
              </a>
              <Link className="btn-secondary" href="/start">
                はじめ方を見る
              </Link>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-amber-900">
              <p className="font-semibold">{bonusHighlight.title}</p>
              <p className="mt-1 text-xs text-amber-900/80">{bonusHighlight.note}</p>
            </div>
            <p className="risk-text">
              ※当サイトはプロモーションを含む体験メモです。利益が出る可能性はありますが、損失の可能性もあります。
            </p>
          </div>
          <MediaSlot
            src="/partner/hero-banner.webp"
            alt="ババオプション ガイドイメージ"
            width={960}
            height={720}
            label="/public/partner/hero-banner.webp"
          />
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-teal-700">体験メモ</p>
              <h2 className="section-title">使ってみた感想</h2>
            </div>
            <p className="text-sm text-black/60">個人の感想であり、結果を保証するものではありません。</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {impressions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/10 bg-white/80 p-5">
                <h3 className="font-display text-lg text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-700">体験ベース + 公式記載</p>
            <h2 className="section-title">押さえておきたいポイント</h2>
          </div>
          <p className="text-sm text-black/60">
            数値や条件は変更される場合があります。最新は公式サイトでご確認ください。
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <div key={feature.title} className="card">
              <h3 className="font-display text-lg text-black">{feature.title}</h3>
              <p className="mt-2 text-sm text-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <AffiliateCta />

      <section className="section" id="start">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-700">はじめての方へ</p>
            <h2 className="section-title">はじめての3ステップ</h2>
          </div>
          <Link className="text-sm font-semibold text-teal-700" href="/start">
            さらに詳しく見る →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="card">
              <div className="flex items-start gap-4">
                <Image src={step.icon} alt="" width={48} height={48} className="h-12 w-12" />
                <div>
                  <h3 className="font-display text-lg text-black">{step.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <MediaSlot
            src="/partner/bonus-banner.webp"
            alt="ボーナス案内イメージ"
            width={960}
            height={720}
            label="/public/partner/bonus-banner.webp"
          />
          <div className="space-y-4">
            <p className="text-sm font-semibold text-teal-700">ボーナスの注意点</p>
            <h2 className="section-title">入金不要¥5,000の案内がある場合</h2>
            <p className="text-sm text-black/70">
              キャンペーンは期間や条件により変わります。ボーナスを利用する場合は、以下の注意点を必ず確認しましょう。
            </p>
            <ul className="space-y-2 text-sm text-black/70">
              <li>ボーナス自体は出金できない場合があります。</li>
              <li>ボーナスで得た利益は出金可能とされる場合があります。</li>
              <li>出金時にボーナス比率が差し引かれる、または条件により消滅する場合があります。</li>
            </ul>
            <Link className="text-sm font-semibold text-teal-700" href="/bonus">
              ボーナス詳細を読む →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-700">よくある質問</p>
            <h2 className="section-title">まずはここから</h2>
          </div>
          <Link className="text-sm font-semibold text-teal-700" href="/faq">
            FAQ一覧へ →
          </Link>
        </div>
        <div className="mt-6">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <div className="section">
        <AffiliateCta />
      </div>
    </div>
  );
}
