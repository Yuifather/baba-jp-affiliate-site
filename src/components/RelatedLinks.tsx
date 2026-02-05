import Link from "next/link";

type RelatedLink = {
  label: string;
  href: string;
};

type RelatedLinksProps = {
  title?: string;
  items: RelatedLink[];
};

export default function RelatedLinks({ title = "次に読む", items }: RelatedLinksProps) {
  return (
    <section className="mt-8 rounded-2xl border border-black/10 bg-white/80 px-5 py-4">
      <p className="text-sm font-semibold text-black">{title}</p>
      <div className="mt-3 flex flex-wrap gap-3 text-sm text-black/70">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
