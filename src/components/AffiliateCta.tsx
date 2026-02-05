import { getPartnerUrl } from "@/lib/site";

export default function AffiliateCta() {
  const partnerUrl = getPartnerUrl();
  const needsSetup = partnerUrl === "#";

  return (
    <section className="card border-teal-700/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-display text-xl text-black">ババオプションを見てみる</p>
          <p className="text-sm text-black/60">
            使い心地や条件は時期によって変わる場合があります。最新情報は公式でご確認ください。
          </p>
        </div>
        <a
          className="btn-primary"
          href={partnerUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          ババオプションをチェック（PR）
        </a>
      </div>
      <p className="risk-text mt-3">
        取引には損失の可能性があります。利益が出るかどうかは状況次第です。
      </p>
      {needsSetup ? (
        <p className="mt-2 text-xs font-semibold text-amber-700">
          ※環境変数 NEXT_PUBLIC_PARTNER_URL を設定してください。
        </p>
      ) : null}
    </section>
  );
}
