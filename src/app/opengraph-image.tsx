import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "バイナリー戦略ラボJP",
    subtitle: "口座開設・出金・戦略・リスク管理を整理",
    eyebrow: "実践検証ガイド",
  });
}
