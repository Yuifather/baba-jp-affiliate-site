import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "ご案内",
    subtitle: "運営者情報・編集方針・免責",
    eyebrow: "ババオプション使い方ガイド",
  });
}
