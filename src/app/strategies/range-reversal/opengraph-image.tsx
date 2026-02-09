import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "レンジ逆張り戦略",
    subtitle: "レンジ上限/下限の反発を使う手法",
    eyebrow: "Strategy 02",
  });
}
