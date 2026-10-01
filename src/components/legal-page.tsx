import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/site";

/**
 * Shared shell for the static policy pages (/privacy, /cookies).
 * Server component — no client JavaScript needed.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-page">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to {site.shortName}
          </Link>
          <span className="font-display text-sm text-muted">{site.name}</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
        <h1 className="font-display text-3xl text-text sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

        <div className="prose-policy mt-8 space-y-8 leading-relaxed text-text [&_a]:font-semibold [&_a]:text-brand [&_a]:underline-offset-2 [&_a:hover]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_li]:mt-1 [&_p]:mt-3 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-line [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_th]:border [&_th]:border-line [&_th]:bg-surface [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>

        <p className="mt-12 text-sm text-muted">
          Questions about these policies? Email{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-semibold text-brand hover:text-brand-hover"
          >
            {site.contact.email}
          </a>{" "}
          or call {site.contact.phone}.
        </p>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <nav aria-label="Policies" className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-brand">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
