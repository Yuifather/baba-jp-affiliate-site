import type { MetadataRoute } from "next";
import { getLastModifiedForRoute } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

export const runtime = "nodejs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
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
    lastModified: getLastModifiedForRoute(route || "/"),
  }));
}
