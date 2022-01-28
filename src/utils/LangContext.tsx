import { createContext } from "react";

type context = {
  lang: string;
  setLang: (lang: string) => void;
};

const arrayOfLanguages = ["fr", "en", "ar"];
let defaultLang = navigator.language.split("-")[0];
defaultLang = arrayOfLanguages.includes(defaultLang) ? defaultLang : "en";

export const LangContext = createContext<context>({
  lang: defaultLang,
  setLang: () => {},
});
