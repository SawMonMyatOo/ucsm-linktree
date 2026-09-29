import { NextResponse, type NextRequest } from "next/server";
import { allowedHosts, canonicalHost } from "@/data/site";

const hostAllowList = new Set<string>([
  ...allowedHosts,
  ...(process.env.ALLOWED_HOSTS?.split(",") ?? [])
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean),
]);

function forwardedProtocol(request: NextRequest): string {
  const header = request.headers.get("x-forwarded-proto");
  const first = header?.split(",")[0]?.trim();
  return (first || request.nextUrl.protocol).replace(/:$/, "");
}

/**
 * Production guard: serve the site only on the university's own https domains
 * and send everything else (apex host, plain http, unknown hosts such as
 * Vercel preview URLs) to the canonical origin.
 */
export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const host = (request.headers.get("host") ?? request.nextUrl.host)
    .toLowerCase()
    .replace(/:\d+$/, "");

  if (host !== canonicalHost || !hostAllowList.has(host) || forwardedProtocol(request) !== "https") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = canonicalHost;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
