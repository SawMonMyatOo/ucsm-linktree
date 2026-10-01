"use client";

import { ArrowUpRight } from "lucide-react";
import { Glyph } from "@/components/glyph";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { primaryLinks } from "@/data/links";
import { site } from "@/data/site";
import type { LinkItem } from "@/data/links";
import { useLanguage } from "@/context/language-context";
import { uiStrings } from "@/data/translations";

function LinkRow({ item, index }: { item: LinkItem; index: number }) {
  const { t } = useLanguage();

  return (
    <Reveal delay={index * 45}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md sm:px-5 sm:py-4"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
          <Glyph name={item.icon} className="size-5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.95rem] font-semibold text-text">
            {t(item.title)}
          </span>
          <span className="mt-0.5 block truncate text-xs text-muted">
            {t(item.description)}
          </span>
        </span>

        <ArrowUpRight
          className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
          aria-hidden="true"
        />
      </a>
    </Reveal>
  );
}

export function LinkList() {
  const { t } = useLanguage();
  const [featured, ...rest] = primaryLinks;

  return (
    <section id="links" className="scroll-mt-24 py-14 sm:py-20">
      <SectionHeading
        eyebrow={t(uiStrings.linkList.eyebrow)}
        title={t(uiStrings.linkList.title)}
        description={t(uiStrings.linkList.description)}
      />

      <div className="flex flex-col gap-3">
        {featured ? (
          <Reveal>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-brand px-5 py-5 text-on-brand shadow-lg transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-on-brand/15">
                <Glyph name={featured.icon} className="size-6" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  {t(uiStrings.linkList.officialBadge)}
                </span>
                <span className="mt-1 block text-lg font-semibold">
                  {t(featured.title)}
                </span>
                <span className="mt-0.5 block text-xs text-on-brand/75">
                  {site.officialWebsite.replace(/^https?:\/\//, "")}
                </span>
              </span>

              <ArrowUpRight
                className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        ) : null}

        {rest.map((item, index) => (
          <LinkRow key={item.title.en} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
