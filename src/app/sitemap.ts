import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, "");
  const routes = [
    "",
    "/start",
    "/bonus",
    "/platform",
    "/faq",
    "/disclosure",
    "/risk",
    "/privacy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
  }));
}
