"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "mm";

type Bilingual = {
  en: string;
  mm?: string;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (bilingual: Bilingual | string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ucsm-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "mm") {
        setLanguageState(stored);
        document.documentElement.setAttribute("data-lang", stored);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("data-lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "mm" : "en";
    setLanguage(next);
  };

  const t = (bilingual: Bilingual | string) => {
    if (typeof bilingual === "string") return bilingual;
    if (!bilingual) return "";
    if (language === "mm" && bilingual.mm && bilingual.mm.trim() !== "") {
      return bilingual.mm;
    }
    return bilingual.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
