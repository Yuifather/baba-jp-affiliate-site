import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "バイナリーオプション/ババオプションに関するよくある質問を日本語で整理したFAQです。",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ",
    description:
      "バイナリーオプション/ババオプションに関するよくある質問を日本語で整理したFAQです。",
    url: "/faq",
  },
  twitter: {
    title: "FAQ",
    description:
      "バイナリーオプション/ババオプションに関するよくある質問を日本語で整理したFAQです。",
  },
};

const faqItems = [
  {
    question: "当サイトは公式サイトですか？",
    answer:
      "当サイトは体験メモを含むガイドサイトです。最新の条件や規約は必ず公式でご確認ください。",
  },
  {
    question: "デモ口座の利用は可能ですか？",
    answer:
      "公式記載では$10,000のデモが用意されています。内容は変更される可能性があります。",
  },
  {
    question: "最低取引額や最低入金額は？",
    answer:
      "公式記載では$1から取引できる設計とされています。最新条件は公式でご確認ください。",
  },
  {
    question: "入金ボーナスの出金ルールは？",
    answer:
      "ボーナス自体は出金不可とされる場合があります。利益の出金や条件は公式で確認してください。",
  },
  {
    question: "スマホだけで利用できますか？",
    answer:
      "Web・アプリ・デスクトップなど複数の利用方法があるとされています。対応状況は公式でご確認ください。",
  },
  {
    question: "リスクや注意点は？",
    answer:
      "バイナリーオプション取引には損失の可能性があります。相場が合えば利益が出る可能性はありますが、保証はありません。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="space-y-12 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section className="space-y-4">
        <p className="text-sm font-semibold text-teal-700">FAQ</p>
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">
          よくある質問
        </h1>
        <p className="text-sm text-black/70">
          初めての方向けに、よくある質問をまとめました。詳細は公式サイトでご確認ください。
        </p>
      </section>

      <section>
        <FaqAccordion items={faqItems} />
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "はじめ方", href: "/start" },
          { label: "ボーナス", href: "/bonus" },
          { label: "リスク/免責", href: "/risk" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
      />

      <PageMeta lastUpdated="2026年2月5日" />
    </div>
  );
}
