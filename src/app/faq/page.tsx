import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import AffiliateCta from "@/components/AffiliateCta";
import PageMeta from "@/components/PageMeta";
import RelatedLinks from "@/components/RelatedLinks";
import { getLastUpdatedLabel } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "バイナリーオプションのFAQ。ハイロー比較、海外バイナリーおすすめ、勝てる手法、デモトレード検証の要点を整理。",
  keywords: [
    "バイナリーオプション",
    "バイナリー",
    "ハイロー",
    "海外バイナリー",
    "海外バイナリーおすすめ",
    "バイナリーオプション ツール",
    "勝てる手法",
    "短期取引",
    "逆張り",
    "ペイアウト率",
    "テクニカル分析",
    "ライントレード",
    "インジケーター",
    "トレンド転換",
    "デモトレード",
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
      "バイナリーオプションのFAQ。ハイロー比較、海外バイナリーおすすめ、勝てる手法、デモトレード検証の要点を整理。",
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
    question: "勝てる手法は本当に存在しますか？",
    answer:
      "固定で勝てる手法はありません。短期取引では相場状態が変化するため、テクニカル分析とリスク管理をセットで検証する必要があります。",
  },
  {
    question: "バイナリーオプション ツールやインジケーターは必須ですか？",
    answer:
      "必須ではありませんが、ライントレードと組み合わせると判断基準を揃えやすくなります。シグナル依存ではなく根拠確認に使ってください。",
  },
  {
    question: "デモトレードはどの段階まで使うべきですか？",
    answer:
      "逆張りやトレンド転換の条件が固まるまで継続してください。最低でも同条件で一定回数を検証してから実運用に移るのが安全です。",
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
