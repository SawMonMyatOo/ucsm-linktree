"use client";

import { useLanguage } from "@/context/language-context";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language between English and Burmese"
      className="inline-flex items-center gap-1.5 rounded-full border border-on-brand/20 bg-on-brand/10 px-3 py-1.5 text-xs font-semibold text-on-brand transition-colors hover:bg-on-brand/20 hover:text-on-brand"
    >
      <Languages className="size-3.5" aria-hidden="true" />
      <span>{language === "en" ? "မြန်မာ" : "English"}</span>
    </button>
  );
}
