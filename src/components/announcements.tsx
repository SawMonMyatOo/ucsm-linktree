import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LocalDate } from "@/components/local-date";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { announcements } from "@/data/links";

export function Announcements() {
  if (announcements.length === 0) return null;

  const sorted = [...announcements].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <section id="announcements" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
      <SectionHeading
        eyebrow="Notice board"
        title="Latest announcements"
        description="Notices from the rectorate, faculties and departments."
      />

      <div className="grid gap-3 sm:gap-4">
        {sorted.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md sm:gap-5 sm:p-5"
            >
              {item.image ? (
                <div className="relative hidden size-28 shrink-0 overflow-hidden rounded-xl sm:block">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-brand uppercase">
                    {item.tag}
                  </span>
                  <span className="text-xs text-muted">
                    <LocalDate date={item.date} />
                  </span>
                </div>

                <h3 className="mt-2 text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.excerpt}
                </p>
              </div>

              <ArrowUpRight
                className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
