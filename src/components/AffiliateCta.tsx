import { getOfficialUrl } from "@/lib/site";

export default function AffiliateCta() {
  const officialUrl = getOfficialUrl();

  return (
    <section className="card border-teal-700/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-display text-xl text-black">公式環境で仕様を確認する</p>
          <p className="text-sm text-black/60">
            口座開設前に、取扱銘柄・判定時間・出金条件を公式ページで必ず確認してください。
          </p>
        </div>
        <a
          className="btn-primary"
          href={officialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          公式サイトを確認
        </a>
      </div>
      <p className="risk-text mt-3">
        本サイトは情報提供を目的とした検証メモであり、投資助言ではありません。
      </p>
    </section>
  );
}
