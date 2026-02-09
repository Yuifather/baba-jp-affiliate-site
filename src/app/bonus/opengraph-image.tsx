import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "入金ボーナス分析",
    subtitle: "初回50%ボーナスの条件と確認手順",
    eyebrow: "ババオプション公式情報",
  });
}
