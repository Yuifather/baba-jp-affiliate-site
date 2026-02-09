import type { MetadataRoute } from "next";
import { getLastModifiedForRoute } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

export const runtime = "nodejs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const routes = [
    "",
    "/strategies",
    "/strategies/trend-pullback",
    "/strategies/range-reversal",
    "/strategies/breakout-filter",
    "/start",
    "/bonus",
    "/platform",
    "/faq",
    "/risk",
    "/about",
    "/privacy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: getLastModifiedForRoute(route || "/"),
  }));
}
