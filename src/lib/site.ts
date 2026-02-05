export const siteConfig = {
  name: "オプション取引ガイドJP",
  tagline: "日本語で迷わないためのガイドサイト",
  description:
    "BABA Optionの条件や使い方を日本語で整理したガイドサイトです。最新条件は公式サイトで確認してください。",
  contactEmail: "support@example.com",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  officialUrl: "https://www.babaoption.com/",
};

export const navItems = [
  { label: "はじめ方", href: "/start" },
  { label: "ボーナス", href: "/bonus" },
  { label: "プラットフォーム", href: "/platform" },
  { label: "FAQ", href: "/faq" },
  { label: "リスク", href: "/risk" },
  { label: "PR表記", href: "/disclosure" },
];

export const footerLinks = [
  { label: "プライバシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "PR表記", href: "/disclosure" },
  { label: "リスク", href: "/risk" },
];

export const getPartnerUrl = () => {
  return process.env.NEXT_PUBLIC_PARTNER_URL ?? siteConfig.officialUrl;
};
