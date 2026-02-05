import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type OgOptions = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function renderOgImage({ title, subtitle, eyebrow }: OgOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, rgba(255,245,214,1) 0%, rgba(233,250,255,1) 60%, rgba(241,255,244,1) 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 2, color: "#0f766e" }}>
          {eyebrow ?? "バイナリーオプション"}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>{title}</div>
        {subtitle ? (
          <div style={{ fontSize: 28, color: "#475569" }}>{subtitle}</div>
        ) : (
          <div />
        )}
        <div style={{ fontSize: 20, color: "#64748b" }}>{siteConfig.name}</div>
      </div>
    ),
    ogSize
  );
}
