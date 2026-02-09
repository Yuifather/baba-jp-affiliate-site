import { getSiteUrl } from "@/lib/site-url";

export const siteConfig = {
  name: "バイナリー戦略ラボJP",
  tagline: "ババオプション実践ガイド",
  description:
    "海外バイナリーオプション業者の比較、ハイロー検討、短期取引の戦略検証に向けて、ババオプションの口座開設・出金・テクニカル分析を整理した日本語ガイドです。",
  contactEmail: "jaku4305@gmail.com",
  baseUrl: getSiteUrl(),
  officialUrl: "https://www.babaoption.com/ja",
  promoUrl: "https://www.babaoption.com/ja/promotion/deposit-bonus",
};

export const navItems = [
  { label: "戦略一覧", href: "/strategies" },
  { label: "口座開設", href: "/start" },
  { label: "ボーナス", href: "/bonus" },
  { label: "プラットフォーム", href: "/platform" },
  { label: "FAQ", href: "/faq" },
  { label: "リスク", href: "/risk" },
  { label: "運営方針", href: "/about" },
];

export const footerLinks = [
  { label: "戦略一覧", href: "/strategies" },
  { label: "口座開設", href: "/start" },
  { label: "運営方針", href: "/about" },
  { label: "プライバシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "リスク", href: "/risk" },
];

export const officialResources = [
  { label: "公式サイト", href: "https://www.babaoption.com/ja" },
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

export const getOfficialUrl = () => siteConfig.officialUrl;

export const getPromoUrl = () => siteConfig.promoUrl;
