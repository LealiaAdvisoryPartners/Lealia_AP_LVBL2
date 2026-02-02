import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/translations/en";
import { pt } from "@/translations/pt";
import { es } from "@/translations/es";

type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en,
  pt,
  es,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Save to localStorage (your existing behavior)
    localStorage.setItem("language", lang);
    
    // Tell Netlify to override future IP redirects
    document.cookie = `nf_country=${getNfCountry(lang)}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  // Helper: map lang to Netlify country override
  const getNfCountry = (lang: Language): string => {
    if (lang === "pt") return "PT";
    if (lang === "es") return "ES";
    return "US"; // en
  };

  useEffect(() => {
    // 1. Check localStorage first (user preference)
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "pt" || saved === "es")) {
      setLanguageState(saved);
      return;
    }

    // 2. Extract from URL path (/pt/about → "pt")
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const pathLang = pathSegments[0] as Language | undefined;
    if (pathLang && (pathLang === "en" || pathLang === "pt" || pathLang === "es")) {
      setLanguageState(pathLang);
      return;
    }

    // 3. Default to en
    setLanguageState("en");
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
