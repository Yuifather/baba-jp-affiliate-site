import Link from "next/link";

export default function RiskBanner() {
  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-amber-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-2 text-xs text-black/80 sm:px-6">
        <span className="rounded-full bg-amber-200 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
          注意
        </span>
        <span>バイナリーオプション取引には損失の可能性があります。余裕資金で、自己責任で。</span>
        <span className="hidden text-black/40 sm:inline">|</span>
        <Link className="font-semibold text-amber-900 hover:text-amber-700" href="/risk">
          リスク詳細
        </Link>
      </div>
    </div>
  );
}
