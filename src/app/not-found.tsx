import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="font-mono text-sm text-accent-deep">404</p>
      <h1 className="font-display text-3xl text-text">Page not found</h1>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        This address does not exist. Everything the university publishes is
        linked from the main page.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover"
      >
        Back to {site.shortName}
      </Link>
    </main>
  );
}
