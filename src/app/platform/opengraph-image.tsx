import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "プラットフォーム",
    subtitle: "Web/モバイル/デスクトップの使い分け",
    eyebrow: "バイナリー戦略ラボJP",
  });
}
