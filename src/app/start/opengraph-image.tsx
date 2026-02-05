import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "はじめ方",
    subtitle: "口座開設・KYC・デモ・入金・初回取引の流れ",
    eyebrow: "ババオプション",
  });
}
