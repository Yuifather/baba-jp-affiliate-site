import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "ブレイク確認戦略",
    subtitle: "確定足でフェイクを減らす手法",
    eyebrow: "Strategy 03",
  });
}
