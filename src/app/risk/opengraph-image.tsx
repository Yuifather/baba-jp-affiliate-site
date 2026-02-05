import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "リスクと注意点",
    subtitle: "損失可能性・自己責任・資金管理について",
    eyebrow: "バイナリーオプション",
  });
}
