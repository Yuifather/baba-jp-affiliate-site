import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "お問い合わせ",
    subtitle: "メールでの連絡先と注意点",
    eyebrow: "ババオプション使い方ガイド",
  });
}
