import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "初回入金50%ボーナス",
    subtitle: "入金ボーナスの条件・注意点を整理",
    eyebrow: "ババオプション",
  });
}
