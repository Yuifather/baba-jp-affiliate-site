export const siteConfig = {
  name: "ババオプション体験ガイドJP",
  tagline: "使ってみた感想と始め方",
  description:
    "バイナリーオプションの使い方・始め方・注意点を、ババオプション中心に日本語でまとめたガイドです。最新条件は公式で確認してください。",
  contactEmail: "support@example.com",
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://example.com"),
  officialUrl: "https://www.babaoption.com/",
};

export const navItems = [
  { label: "はじめ方", href: "/start" },
  { label: "ボーナス", href: "/bonus" },
  { label: "プラットフォーム", href: "/platform" },
  { label: "FAQ", href: "/faq" },
  { label: "リスク", href: "/risk" },
  { label: "サイト方針", href: "/disclosure" },
];

export const footerLinks = [
  { label: "プライバシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "サイト方針", href: "/disclosure" },
  { label: "リスク", href: "/risk" },
];

export const getOfficialUrl = () => {
  return siteConfig.officialUrl;
};
