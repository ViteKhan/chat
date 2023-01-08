import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { ApiContextProvider, ChatContextProvider, LangContextProvider } from 'context';
import App from './App';
import { theme } from 'styles/theme';

import './firebase-config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
      <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ApiContextProvider>
          <ChatContextProvider>
            <LangContextProvider>
              <App/>
            </LangContextProvider>
          </ChatContextProvider>
        </ApiContextProvider>
      </ChakraProvider>
    </BrowserRouter>
);
