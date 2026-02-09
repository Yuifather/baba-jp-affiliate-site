import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "口座開設と準備",
    subtitle: "KYC・デモ・入金/出金確認の流れ",
    eyebrow: "バイナリー戦略ラボJP",
  });
}
