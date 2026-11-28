"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
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

const STORAGE_KEY = "renia-lang-v2";
const DEFAULT_LANGUAGE: Language = "fr";

function applyLanguageToDocument(next: Language) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = next;
  }
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    applyLanguageToDocument(language);
  }, [language]);

  const setLanguageAndPersist = useCallback((next: Language) => {
    setLanguage(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageAndPersist(language === "en" ? "fr" : "en");
  }, [language, setLanguageAndPersist]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageAndPersist,
      toggleLanguage,
      t: {
        ...dictionary[language],
        ...translations[language],
      },
    }),
    [language, setLanguageAndPersist, toggleLanguage],
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
