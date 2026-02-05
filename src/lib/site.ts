export const siteConfig = {
  name: "ババオプション使い方ガイド",
  tagline: "バイナリーオプションの始め方メモ",
  description:
    "バイナリーオプションの使い方・始め方・口座開設・デモ・入金/出金・リスクを、ババオプション中心に日本語で整理したガイドです。最新条件は公式で確認してください。",
  contactEmail: "jaku4305@gmail.com",
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
  { label: "ご案内", href: "/disclosure" },
];

export const footerLinks = [
  { label: "プライバシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "ご案内", href: "/disclosure" },
  { label: "リスク", href: "/risk" },
];

export const getOfficialUrl = () => {
  return siteConfig.officialUrl;
};
