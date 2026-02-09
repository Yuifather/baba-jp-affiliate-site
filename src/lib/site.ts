import { getSiteUrl } from "@/lib/site-url";

export const siteConfig = {
  name: "ババオプション使い方ガイド",
  tagline: "バイナリーオプションの始め方メモ",
  description:
    "バイナリーオプションの使い方・始め方・口座開設・デモ・入金/出金・リスクを、ババオプション中心に日本語で整理したガイドです。最新条件は公式で確認してください。",
  contactEmail: "jaku4305@gmail.com",
  baseUrl: getSiteUrl(),
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

export const officialResources = [
  { label: "X (公式)", href: "https://x.com/babaoption_jp/" },
  { label: "YouTube (公式)", href: "https://www.youtube.com/@babaoption_japan" },
  { label: "ヘルプセンター", href: "https://helpcenter.babaoption.com/hc/ja-jp" },
  { label: "公式ブログ", href: "https://babaoption.blog/" },
];

export const organizationProfiles = [
  "https://x.com/babaoption_jp/",
  "https://www.youtube.com/@babaoption_japan",
  "https://babaoption.blog/",
];

export const getOfficialUrl = () => {
  return siteConfig.officialUrl;
};
