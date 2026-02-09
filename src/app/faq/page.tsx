import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "ババオプション運用時のFAQ。口座開設、出金、評判確認、ハイローオプション比較の視点を整理。",
  keywords: [
    "海外バイナリーオプション業者",
    "ハイローオプション",
    "バイナリーオプション おすすめ",
    "口座開設",
    "出金",
    "評判",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ",
    description:
      "ババオプション運用時のFAQ。口座開設、出金、評判確認、ハイローオプション比較の視点を整理。",
    url: "/faq",
  },
};

const faqItems = [
  {
    question: "海外バイナリーオプション業者を比較する時の優先項目は？",
    answer:
      "口座開設手順、出金条件、サポート窓口、取引画面の操作性を同じ順序で比較してください。",
  },
  {
    question: "ハイローオプションと比較する際の注意点は？",
    answer:
      "判定時間、取扱銘柄、取引単位、チャートUIを同一条件で並べて比較すると判断しやすくなります。",
  },
  {
    question: "バイナリーオプション おすすめ情報はどこまで信用できますか？",
    answer:
      "評判記事は参考情報として扱い、最終判断は公式条件と自分の検証記録を優先してください。",
  },
  {
    question: "口座開設に必要な準備は？",
    answer:
      "メール登録、本人確認書類、利用可能な入出金手段を事前に用意しておくとスムーズです。",
  },
  {
    question: "出金は何を確認すべきですか？",
    answer:
      "最低出金額、手数料、反映時間、条件未達時の扱いを公式ヘルプセンターで確認してください。",
  },
  {
    question: "リスク管理の基本は？",
    answer:
      "1回の上限損失、連敗停止条件、日次上限を決めて、ルール外取引をしないことです。",
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
        <h1 className="font-display text-3xl font-semibold text-black sm:text-4xl">よくある質問</h1>
        <p className="text-sm text-black/70">実運用で問い合わせの多い項目を、比較・検証の視点で整理しています。</p>
      </section>

      <section>
        <FaqAccordion items={faqItems} />
      </section>

      <AffiliateCta />

      <RelatedLinks
        items={[
          { label: "戦略一覧", href: "/strategies" },
          { label: "口座開設", href: "/start" },
          { label: "ボーナス", href: "/bonus" },
          { label: "リスク", href: "/risk" },
        ]}
      />

      <PageMeta lastUpdated={getLastUpdatedLabel("/faq")} />
    </div>
  );
}
