"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { uiStrings } from "@/data/translations";

export function FooterSection() {
  const { t, language } = useLanguage();

  return (
    <footer className="mt-14 border-t border-line bg-brand py-10 text-on-brand sm:mt-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-5 text-center">
        <p className={`font-display text-lg ${language === "mm" ? "font-custom" : ""}`}>{t(site.shortName)}</p>
        <p className={`max-w-md text-xs leading-relaxed text-on-brand/70 ${language === "mm" ? "font-custom" : ""}`}>
          {t(site.name)} — {t(site.eyebrow)}. {t(uiStrings.footer.servicesNote)}
        </p>
        <p className={`text-xs text-on-brand/50 ${language === "mm" ? "font-custom" : ""}`}>
          &copy; {new Date().getFullYear()} {t(site.name)}
        </p>
        <nav
          aria-label={t(uiStrings.footer.policiesAria)}
          className={`flex items-center gap-4 text-xs text-on-brand/70 ${language === "mm" ? "font-custom" : ""}`}
        >
          <Link
            href="/privacy"
            className="underline-offset-2 transition-colors hover:text-on-brand hover:underline"
          >
            {t(uiStrings.footer.privacyPolicy)}
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/cookies"
            className="underline-offset-2 transition-colors hover:text-on-brand hover:underline"
          >
            {t(uiStrings.footer.cookiePolicy)}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
