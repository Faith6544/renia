"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

import {
  dictionary,
  type Dictionary,
  type Language,
} from "@/data/dictionary";
import { translations, type Translation } from "@/lib/translations";

type SiteTranslations = Dictionary & Translation;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: SiteTranslations;
};

const STORAGE_KEY = "renia-language";

const listeners = new Set<() => void>();
let cachedLanguage: Language | null = null;

function getSnapshot(): Language {
  if (cachedLanguage) {
    return cachedLanguage;
  }

  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  cachedLanguage = stored === "en" || stored === "fr" ? stored : "en";
  return cachedLanguage;
}

function getServerSnapshot(): Language {
  return "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function updateLanguage(next: Language) {
  cachedLanguage = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, next);
  }
  listeners.forEach((listener) => listener());
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    updateLanguage(getSnapshot() === "en" ? "fr" : "en");
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: {
        ...dictionary[language],
        ...translations[language],
      },
    }),
    [language, setLanguage, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
