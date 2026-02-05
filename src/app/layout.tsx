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
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ババオプション",
    "バイナリーオプション",
    "使い方",
    "始め方",
    "口座開設",
    "デモ口座",
    "入金ボーナス",
    "プラットフォーム",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = new URL("/partner/logo.svg", siteConfig.baseUrl).toString();
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.baseUrl,
        logo: logoUrl,
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contactEmail,
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.baseUrl,
        description: siteConfig.description,
        inLanguage: "ja-JP",
      },
    ],
  };

  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${shipporiMincho.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <div className="min-h-screen">
          <RiskBanner />
          <header className="border-b border-black/10 bg-white/70 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-5 sm:px-6">
              <div className="flex flex-wrap items-center gap-4">
                <BrandMark />
                <div className="space-y-1">
                  <span className="tag">使い方メモ</span>
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
                  <p className="font-semibold text-black">ご案内</p>
                  <p>当サイトは体験メモを含む情報提供サイトです。最新の条件は公式でご確認ください。</p>
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
