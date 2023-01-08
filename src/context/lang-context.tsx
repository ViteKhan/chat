import { createContext, useContext, useEffect, useState } from 'react';

import { LANGUAGES } from 'common/constants';

interface LangContext {
  language: string;
  changeLanguageHandler: (lang: string) => void;
}

export const LangContext = createContext<LangContext>({} as LangContext);

export const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || LANGUAGES.EN);

  const changeLanguageHandler = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, []);

  const value: LangContext = {
    language,
    changeLanguageHandler,
  };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => useContext(LangContext);