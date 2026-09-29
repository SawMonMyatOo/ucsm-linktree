import type { NextConfig } from "next";
import { allowedHosts, canonicalHost } from "./src/data/site";

/** Hosts that must be redirected to the canonical origin. */
const nonCanonicalHosts = allowedHosts.filter((host) => host !== canonicalHost);

const nextConfig: NextConfig = {
  /**
   * Redirects are evaluated in the routing layer, before the filesystem and
   * before `src/proxy.ts`, so the canonical redirect works even when the page
   * itself is served straight from the CDN cache.
   */
  redirects() {
    const canonical = `https://${canonicalHost}/:path*`;

    return [
      ...nonCanonicalHosts.map((host) => ({
        source: "/:path*",
        has: [
          {
            type: "host" as const,
            value: `^${host.replace(/\./g, "\\.")}(:\\d+)?$`,
          },
        ],
        destination: canonical,
        permanent: true,
      })),
      {
        source: "/:path*",
        has: [{ type: "header" as const, key: "x-forwarded-proto", value: "http" }],
        destination: canonical,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
