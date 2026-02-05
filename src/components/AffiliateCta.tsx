import { getPartnerUrl } from "@/lib/site";

export default function AffiliateCta() {
  const partnerUrl = getPartnerUrl();
  const needsSetup = partnerUrl === "#";

  return (
    <section className="card border-teal-700/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-display text-xl text-black">ババオプションを軽く触ってみる</p>
          <p className="text-sm text-black/60">
            使い心地は人によって合う/合わないがあるので、最新条件は公式で確認しつつチェックしてください。
          </p>
        </div>
        <a
          className="btn-primary"
          href={partnerUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          ババオプションへ（PR）
        </a>
      </div>
      <p className="risk-text mt-3">
        利益が出る可能性はありますが、損失の可能性もあります。
      </p>
      {needsSetup ? (
        <p className="mt-2 text-xs font-semibold text-amber-700">
          ※環境変数 NEXT_PUBLIC_PARTNER_URL を設定してください。
        </p>
      ) : null}
    </section>
  );
}
