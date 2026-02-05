import { statSync } from "fs";
import { join } from "path";

const pageFileMap: Record<string, string> = {
  "/": "src/app/page.tsx",
  "/start": "src/app/start/page.tsx",
  "/bonus": "src/app/bonus/page.tsx",
  "/platform": "src/app/platform/page.tsx",
  "/faq": "src/app/faq/page.tsx",
  "/risk": "src/app/risk/page.tsx",
  "/disclosure": "src/app/disclosure/page.tsx",
  "/privacy": "src/app/privacy/page.tsx",
  "/contact": "src/app/contact/page.tsx",
};

export function getLastModifiedForRoute(route: string): Date {
  const relPath = pageFileMap[route] ?? "src/app/page.tsx";
  const filePath = join(process.cwd(), relPath);
  try {
    const stat = statSync(filePath);
    return stat.mtime;
  } catch {
    return new Date();
  }
}

export function formatDateJa(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

export function getLastUpdatedLabel(route: string): string {
  return formatDateJa(getLastModifiedForRoute(route));
}
