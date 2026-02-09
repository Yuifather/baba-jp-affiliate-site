import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "戦略一覧",
    subtitle: "トレンド押し目・レンジ逆張り・ブレイク確認",
    eyebrow: "バイナリー戦略ラボJP",
  });
}
