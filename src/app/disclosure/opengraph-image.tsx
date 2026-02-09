import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "運営方針",
    subtitle: "運営目的・編集基準・免責",
    eyebrow: "バイナリー戦略ラボJP",
  });
}
