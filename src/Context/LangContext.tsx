import { createContext } from 'react';

type context = {
  lang: string;
  setLang: (lang: string) => void;
};

const arrayOfLanguages = ['fr', 'en', 'ar', 'it'];

const langFromLocalStorage = localStorage.getItem('lang');

const langByNavigator = navigator.language.split('-')[0];

const langSupported = arrayOfLanguages.includes(langByNavigator) ? langByNavigator : 'en';

export const LangContext = createContext<context>({
  lang: langFromLocalStorage || langSupported,
  setLang: () => {},
});
