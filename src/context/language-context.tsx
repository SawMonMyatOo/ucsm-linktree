"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

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
const CHANGE_EVENT = "ucsm-lang-change";
const DEFAULT_LANGUAGE: Language = "en";

function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "mm";
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function getServerLanguageSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

function subscribeToLanguage(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  const setLanguage = useCallback((lang: Language) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("data-lang", lang);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "mm" : "en");
  }, [language, setLanguage]);

  const t = useCallback(
    (bilingual: Bilingual | string) => {
      if (typeof bilingual === "string") return bilingual;
      if (!bilingual) return "";
      if (language === "mm" && bilingual.mm && bilingual.mm.trim() !== "") {
        return bilingual.mm;
      }
      return bilingual.en;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}