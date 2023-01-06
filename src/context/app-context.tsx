import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from 'firebase-config';
import { LANGUAGES } from 'common/constants';

type CurrenUser = User | null;

interface ContextValue {
  currentUser: CurrenUser;
  language: string;
  changeLanguageHandler: (lang: string) => void;
}

export const AppContext = createContext<ContextValue>({
  currentUser: null,
  language: LANGUAGES.EN,
  changeLanguageHandler: () => undefined,
});

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrenUser>(null);
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || LANGUAGES.EN);

  const changeLanguageHandler = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };
  
  const value = { currentUser, language, changeLanguageHandler };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem('language', language);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext<ContextValue>(AppContext);
