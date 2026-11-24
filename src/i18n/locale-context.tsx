"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "am";

/** A piece of copy provided in both supported languages. */
export type Bi = { en: string; am: string };

export function pick(locale: Locale, text: Bi): string {
  return text[locale] ?? text.en;
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (text: Bi) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "moenco-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "am") {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — fall back to English
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle("font-amharic", locale === "am");
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore persistence failures
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "am" : "en");
  }, [locale, setLocale]);

  const t = useCallback((text: Bi) => pick(locale, text), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
