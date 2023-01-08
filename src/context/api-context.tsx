import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '../firebase-config';
// todo fix this file and added common hook which provide all actions and has common isLoading state
type CurrenUser = User | object;

// @ts-ignore
export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>( null);

  useEffect( () => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ?? false);
    });

    return unsub;
  }, []);

  return (
    <ApiContext.Provider value={currentUser}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext<any>(ApiContext);