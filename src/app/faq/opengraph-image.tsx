import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "FAQ",
    subtitle: "使い方・デモ・入金/出金・リスクのよくある質問",
    eyebrow: "ババオプション",
  });
}
