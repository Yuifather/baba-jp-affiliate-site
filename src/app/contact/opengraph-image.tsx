import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "お問い合わせ",
    subtitle: "修正依頼・誤記報告の連絡先",
    eyebrow: "バイナリー戦略ラボJP",
  });
}
