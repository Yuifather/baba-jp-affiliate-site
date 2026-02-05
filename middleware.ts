import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "binary-guide.vercel.app";

export function middleware(request: NextRequest) {
  if (process.env.VERCEL_ENV !== "production") {
    return NextResponse.next();
  }

  const host = request.nextUrl.hostname;
  if (host === CANONICAL_HOST) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = CANONICAL_HOST;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
