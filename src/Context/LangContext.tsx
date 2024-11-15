import { createContext, useContext, useState } from 'react';

type contextType = {
  lang: string;
  setLang: (lang: string) => void;
};

export const LangContext = createContext<contextType | null>(null);

const arrayOfLanguages = ['fr', 'en', 'ar', 'it', 'jp'];

const langFromLocalStorage = localStorage.getItem('lang');

const langByNavigator = navigator.language.split('-')[0];

const langSupported = arrayOfLanguages.includes(langByNavigator) ? langByNavigator : 'en';

/*Provider*/
export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(langFromLocalStorage || langSupported);

  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
};

/*Hook*/
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within a LangProvider');

  return context;
};
