"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Phone } from "lucide-react";
import { FooterSection } from "@/components/footer-section";
import { Glyph } from "@/components/glyph";
import { LanguageToggle } from "@/components/language-toggle";
import { LocalDate } from "@/components/local-date";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage, type Language } from "@/context/language-context";
import {
  admissionLinks,
  admissionSession,
  entranceInformation,
  type Bilingual,
  type NoticePoint,
} from "@/data/admissions";
import { site } from "@/data/site";
import { uiStrings } from "@/data/translations";

const s = uiStrings.admissions;

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all";

/**
 * Burmese is only set in the self-hosted Myanmar face for the page header, the
 * headline and the footer. Everything else is left to the body stack, where
 * Inter has no Burmese coverage and the glyphs fall through to Pyidaungsu (or
 * Myanmar Text / Padauk) — the face the reader already uses everywhere else on
 * their device.
 */
function useType() {
  const { language } = useLanguage();

  return {
    /** Self-hosted Myanmar face — header, headline and footer only. */
    display: language === "mm" ? "font-custom" : "",
    /** Body stack: Inter for Latin, Pyidaungsu for Burmese. */
    body: language === "mm" ? "font-sans" : "",
  };
}

/** English wins when it exists; otherwise the Burmese notice is shown as-is. */
function pick(language: Language, text: Bilingual) {
  return language === "en" && text.en.trim() ? text.en : text.mm;
}

function SessionCard() {
  const { language } = useLanguage();
  const { body } = useType();
  const session = admissionSession;

  return (
    <Reveal>
       <section
        aria-label={pick(language, session.academicYear)}
        className="relative isolate overflow-hidden rounded-3xl bg-brand p-6 text-on-brand shadow-lg sm:p-8"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.18]"
          style={{ backgroundImage: `url(${site.pattern})`, backgroundSize: "180px" }}
          aria-hidden="true"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={`text-xs font-semibold tracking-[0.18em] text-accent uppercase ${body}`}>
            {pick(language, s.sessionEyebrow)}
          </p>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
              session.isOpen ? "bg-on-brand/15" : "bg-brand-soft/40 text-on-brand/80"
            } ${body}`}
          >
            {session.isOpen ? (
              <Check className="size-3.5 text-accent" aria-hidden="true" />
            ) : null}
            {pick(language, session.status)}
          </span>
        </div>

        <p className={`mt-4 text-sm text-on-brand/75 ${body}`}>
          {pick(language, session.academicYear)}
        </p>

        {session.opensOn || session.closesOn ? (
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {session.opensOn ? (
              <div className="rounded-2xl bg-on-brand/10 px-4 py-3">
                <dt className={`flex items-center gap-1.5 text-xs text-on-brand/70 ${body}`}>
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  {pick(language, s.opensOn)}
                </dt>
                <dd className={`mt-1 text-sm font-semibold ${body}`}>
                  <LocalDate date={session.opensOn} />
                </dd>
              </div>
            ) : null}
            {session.closesOn ? (
              <div className="rounded-2xl bg-on-brand/10 px-4 py-3">
                <dt className={`flex items-center gap-1.5 text-xs text-on-brand/70 ${body}`}>
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  {pick(language, s.closesOn)}
                </dt>
                <dd className={`mt-1 text-sm font-semibold ${body}`}>
                  <LocalDate date={session.closesOn} />
                </dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {session.note ? (
          <p className={`mt-4 text-sm leading-relaxed text-on-brand/80 ${body}`}>
            {pick(language, session.note)}
          </p>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={session.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-on-brand text-brand hover:bg-accent ${body}`}
          >
            {pick(language, s.applyNow)}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={session.statusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} border border-on-brand/35 hover:bg-on-brand/10 ${body}`}
          >
            {pick(language, s.checkStatus)}
          </a>
        </div>

        <p className={`mt-4 text-xs text-on-brand/60 ${body}`}>
          {pick(language, s.externalNote)}
        </p>
      </section>
    </Reveal>
  );
}

/**
 * One lettered point of the notice ("A." / "(က)"), with its nested
 * qualifications, the degrees it awards, or its phone numbers underneath. The
 * marker is rendered as a badge so the text in the data file stays free of it.
 */
function NoticePointRow({ point }: { point: NoticePoint }) {
  const { language } = useLanguage();
  const { body } = useType();

  return (
    <li className="flex gap-4">
      <span
        className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-on-brand ${body}`}
      >
        {pick(language, point.label)}
      </span>
      <div className="min-w-0 flex-1 pb-6">
        <p className={`text-base leading-relaxed font-semibold text-text ${body}`}>
          {pick(language, point.text)}
        </p>

        {point.children?.length ? (
          <ul className="mt-4 flex list-none flex-col gap-4">
            {point.children.map((child) => (
              <li key={pick(language, child.label)} className="flex gap-3">
                <span
                  className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-accent-deep ${body}`}
                >
                  {pick(language, child.label)}
                </span>
                <p className={`min-w-0 flex-1 text-sm leading-relaxed text-muted ${body}`}>
                  {pick(language, child.text)}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        {point.programmes?.length ? (
          <div className="mt-6">
            <h2 className={`font-display text-lg leading-snug text-text sm:text-xl ${body}`}>
              {pick(language, entranceInformation.programmesHeading)}
            </h2>

            <ol className="mt-4 flex flex-col gap-3">
              {point.programmes.map((programme, index) => (
                <Reveal key={programme.degree.en} delay={index * 40}>
                  <li className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-4 py-4">
                    <span
                      className={`shrink-0 text-sm font-semibold text-accent-deep ${body}`}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-semibold text-text ${body}`}>
                        {pick(language, programme.degree)}
                      </span>
                      <span className={`mt-1 block text-sm leading-relaxed text-muted ${body}`}>
                        {pick(language, programme.title)}
                      </span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        ) : null}

        {point.phones?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={pick(language, s.callLabel)}>
            {point.phones.map((phone) => (
              <li key={phone.href}>
                <a
                  href={`tel:${phone.href}`}
                  className={`inline-flex items-center gap-2 rounded-xl bg-brand-soft px-3 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-on-brand ${body}`}
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {pick(language, phone.label)}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

/** The entrance notice exactly as the university published it. */
function NoticeSection() {
  const { language } = useLanguage();

  return (
    <section aria-labelledby="notice-heading" className="mt-12 sm:mt-16">
      <ol className="flex list-none flex-col gap-0">
        {entranceInformation.points.map((point) => (
          <NoticePointRow key={pick(language, point.label)} point={point} />
        ))}
      </ol>
    </section>
  );
}

function LinksSection() {
  const { language } = useLanguage();
  const { body } = useType();
  const [featured, ...rest] = admissionLinks;

  return (
    <section aria-labelledby="links-heading" className="mt-14 sm:mt-20">
      <SectionHeading
        id="links-heading"
        eyebrow={pick(language, s.linksSection.eyebrow)}
        title={pick(language, s.linksSection.title)}
        description={pick(language, s.linksSection.description)}
        titleClassName={language === "mm" ? "font-sans" : undefined}
      />

      <div className="flex flex-col gap-3">
        {featured ? (
          <Reveal>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-brand px-5 py-5 text-on-brand shadow-lg transition-transform hover:-translate-y-0.5 sm:px-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-on-brand/15">
                <Glyph name={featured.icon} className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block text-lg font-semibold ${body}`}>
                  {pick(language, featured.title)}
                </span>
                <span className={`mt-0.5 block text-xs text-on-brand/75 ${body}`}>
                  {pick(language, featured.description)}
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
          <Reveal key={item.title.en} delay={index * 45}>
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
                <span className={`block text-[0.95rem] font-semibold text-text ${body}`}>
                  {pick(language, item.title)}
                </span>
                <span className={`mt-0.5 block text-xs text-muted ${body}`}>
                  {pick(language, item.description)}
                </span>
              </span>
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

export function AdmissionsContent() {
  const { language } = useLanguage();
  const { display } = useType();
  const notice = entranceInformation;

  return (
    <div className="min-h-dvh bg-page">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-5 py-4">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover ${display}`}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {pick(language, s.backToHome)}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.18em] text-accent-deep uppercase">
              {pick(language, notice.eyebrow)}
            </span>
          </div>
          <h1
            id="notice-heading"
            className={`mt-3 font-display text-3xl leading-tight text-text sm:text-4xl ${display}`}
          >
            {pick(language, notice.heading)}
          </h1>
        </div>

        <div className="mt-8">
          <SessionCard />
          <NoticeSection />
          <LinksSection />
        </div>

        <p
          className={`mt-12 rounded-2xl border border-line bg-surface-2 px-4 py-4 text-xs leading-relaxed text-muted ${
            language === "mm" ? "font-sans" : ""
          }`}
        >
          {pick(language, s.disclaimer)}
        </p>
      </main>

      <FooterSection />
    </div>
  );
}
