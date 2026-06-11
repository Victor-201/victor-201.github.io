"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import enCommon from "./en/common.json";
import enSkills from "./en/skills.json";
import enExperience from "./en/experience.json";
import enProjects from "./en/projects.json";
import enSeo from "./en/seo.json";
import viCommon from "./vi/common.json";
import viSkills from "./vi/skills.json";
import viExperience from "./vi/experience.json";
import viProjects from "./vi/projects.json";
import viSeo from "./vi/seo.json";

const translations = {
  en: { common: enCommon, skills: enSkills, experience: enExperience, projects: enProjects, seo: enSeo },
  vi: { common: viCommon, skills: viSkills, experience: viExperience, projects: viProjects, seo: viSeo },
};

type Namespace = keyof (typeof translations)["en"];

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (ns: Namespace, key?: string) => any;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: () => "",
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "vi" || stored === "en") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  }, []);

  const t = useCallback(
    (ns: Namespace, key?: string) => {
      const nsData = (translations as any)[locale]?.[ns];
      if (!nsData) return "";
      if (!key) return nsData;
      const keys = key.split(".");
      let value = nsData;
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? "";
    },
    [locale],
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
