import Image from "next/image";
import { Check } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data/site";

const anchorLinks = [
  { href: "#links", label: "Links" },
  { href: "#announcements", label: "Notices" },
  { href: "#faculties", label: "Faculties" },
  { href: "#connect", label: "Connect" },
];

export function SiteHeader() {
  return (
    <header className="relative isolate overflow-hidden bg-brand">
      <Image
        src={site.heroBackground}
        alt=""
        fill
        priority
        className="-z-10 object-cover opacity-35"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/90 via-brand/85 to-brand"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{ backgroundImage: `url(${site.pattern})`, backgroundSize: "180px" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-16 pb-14 text-center sm:pt-24 sm:pb-20">
        <div className="relative size-28 overflow-hidden rounded-full border-4 border-accent/70 shadow-lg sm:size-32">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <p className="mt-6 text-xs font-semibold tracking-[0.28em] text-accent uppercase">
          {site.eyebrow}
        </p>

        <h1 className="mt-3 font-display text-3xl leading-[1.15] text-on-brand sm:text-5xl">
          {site.name}
        </h1>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-on-brand/10 px-4 py-1.5 text-xs font-medium text-on-brand">
          <Check className="size-3.5 text-accent" aria-hidden="true" />
          Verified Institution
        </div>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-on-brand/80 sm:text-base">
          {site.tagline}
        </p>
      </div>

      <div className="border-t border-on-brand/15">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-2 px-5">
          <nav
            aria-label="Section navigation"
            className="flex flex-1 items-center gap-1 overflow-x-auto py-3"
          >
            {anchorLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-on-brand/75 transition-colors hover:bg-on-brand/10 hover:text-on-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="py-2 pl-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
