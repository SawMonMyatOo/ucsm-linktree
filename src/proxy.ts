import { NextResponse, type NextRequest } from "next/server";
import { allowedHosts, canonicalHost } from "@/data/site";

const hostAllowList = new Set<string>([
  ...allowedHosts,
  ...(process.env.ALLOWED_HOSTS?.split(",") ?? [])
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean),
]);

function canonicalRedirect(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = canonicalHost;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

/**
 * Defence in depth for the canonical-host rule: `redirects()` in
 * `next.config.ts` already handles the apex host, this catches every other
 * unknown host (preview deployments, typo domains) in production.
 */
export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const host = (request.headers.get("host") ?? request.nextUrl.host)
    .toLowerCase()
    .replace(/:\d+$/, "");

  if (host === canonicalHost) return NextResponse.next();
  if (hostAllowList.has(host)) return canonicalRedirect(request);

  return canonicalRedirect(request);
}

export const config = {
  /**
   * Skips `/_next/*` and every path that ends in a file extension, so static
   * assets (fonts, images, `robots.txt`, `sitemap.xml`, ...) are served
   * directly instead of being bounced through the canonical-host redirect.
   */
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)"],
};
