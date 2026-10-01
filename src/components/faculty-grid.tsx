"use client";

import { ArrowUpRight } from "lucide-react";
import { Glyph } from "@/components/glyph";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faculties } from "@/data/links";
import { useLanguage } from "@/context/language-context";
import { uiStrings } from "@/data/translations";

export function FacultyGrid() {
  const { t } = useLanguage();

  if (faculties.length === 0) return null;

  return (
    <section id="faculties" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
      <SectionHeading
        eyebrow={t(uiStrings.facultiesSection.eyebrow)}
        title={t(uiStrings.facultiesSection.title)}
        description={t(uiStrings.facultiesSection.description)}
      />

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {faculties.map((faculty, index) => (
          <Reveal key={faculty.code} delay={(index % 2) * 60}>
            <a
              href={faculty.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
                  <Glyph name={faculty.icon} className="size-5" />
                </span>
                <span className="rounded-md border border-line px-2 py-1 font-mono text-[0.7rem] font-semibold text-muted">
                  {faculty.code}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-text">
                {t(faculty.name)}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                {t(faculty.description)}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                {t(uiStrings.facultiesSection.viewFaculty)}
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
