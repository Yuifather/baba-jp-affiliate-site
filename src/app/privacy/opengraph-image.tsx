import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "プライバシーポリシー",
    subtitle: "収集情報・Cookie・保管期間・第三者提供",
    eyebrow: "ババオプション使い方ガイド",
  });
}
