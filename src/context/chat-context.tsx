import { createContext, useContext, useReducer } from 'react';

import { getCombinedId } from '../utils';
import { useApiContext } from './api-context';

// todo refactor this file
// @ts-ignore
export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const currentUser = useApiContext();
  const INITIAL_STATE = {
    chatId: '',
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case '':
        return {
          ...state,
          chatId: getCombinedId(currentUser, action.payload),
          user: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext<any>(ChatContext);