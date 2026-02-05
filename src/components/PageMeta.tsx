import Link from "next/link";

type PageMetaProps = {
  lastUpdated: string;
  editor?: string;
};

export default function PageMeta({
  lastUpdated,
  editor = "ババオプション使い方ガイド 編集部",
}: PageMetaProps) {
  return (
    <section className="mt-10 rounded-2xl border border-black/10 bg-white/80 px-5 py-4 text-xs text-black/70">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span>最終更新日: {lastUpdated}</span>
        <span>編集/執筆: {editor}</span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-black/60">
        <Link className="hover:text-black" href="/risk">
          免責/リスク
        </Link>
        <Link className="hover:text-black" href="/disclosure">
          ご案内
        </Link>
        <Link className="hover:text-black" href="/contact">
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}
