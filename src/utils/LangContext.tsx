import { createContext } from "react";

type context = {
  lang: string;
  setLang: (lang: string) => void;
};

export const LangContext = createContext<context>({ lang: "fr", setLang: () => {} });
