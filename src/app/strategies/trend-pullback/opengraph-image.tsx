import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "トレンド押し目戦略",
    subtitle: "押し目/戻りで入る基本手法",
    eyebrow: "Strategy 01",
  });
}
