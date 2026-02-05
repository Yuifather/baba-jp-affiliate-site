import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import BrandMark from "@/components/BrandMark";
import RiskBanner from "@/components/RiskBanner";
import { footerLinks, navItems, siteConfig } from "@/lib/site";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-mincho",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${shipporiMincho.variable} antialiased`}>
        <div className="min-h-screen">
          <RiskBanner />
          <header className="border-b border-black/10 bg-white/70 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-5 sm:px-6">
              <div className="flex flex-wrap items-center gap-4">
                <BrandMark />
                <div className="space-y-1">
                  <span className="tag">体験メモ</span>
                  <Link className="block font-display text-xl text-black" href="/">
                    {siteConfig.name}
                  </Link>
                  <p className="text-xs text-black/60">{siteConfig.tagline}</p>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-4">
                {navItems.map((item) => (
                  <Link key={item.href} className="nav-link" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">{children}</main>
          <footer className="border-t border-black/10 bg-white/70 backdrop-blur">
            <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-10 text-sm sm:px-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 text-black/70">
                  <p className="font-semibold text-black">PR表記</p>
                  <p>
                    ※当サイトはプロモーション（広告）を含みます。当サイトはババオプションのパートナーです。
                  </p>
                  <p>
                    紹介リンク経由で登録・取引が行われた場合、当サイトは報酬を得ることがあります。
                  </p>
                </div>
                <div className="space-y-2 text-black/70">
                  <p className="font-semibold text-black">リスク警告 / 免責</p>
                  <p>バイナリーオプション取引には損失の可能性があります。余裕資金で、自己責任で行ってください。</p>
                  <p>本サイトの内容は情報提供であり、投資助言ではありません。</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {footerLinks.map((link) => (
                  <Link key={link.href} className="text-black/70 hover:text-black" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-black/50">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
