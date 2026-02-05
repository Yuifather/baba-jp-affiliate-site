export const siteConfig = {
  name: "バイナリーオプションガイドJP",
  tagline: "ババオプションを使ってみた感想と使い方メモ",
  description:
    "ババオプションの使い心地・始め方・注意点を日本語で整理したガイドサイトです。最新条件は公式で確認してください。",
  contactEmail: "support@example.com",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  officialUrl: "https://www.babaoption.com/",
  partnerUrl: "https://partnerportal.babaoption.com/visit/?bta=35219&brand=babaoption",
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
  return process.env.NEXT_PUBLIC_PARTNER_URL ?? siteConfig.partnerUrl;
};
