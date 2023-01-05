import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppRoutes } from 'components/app-routes';
import { AuthContextProvider } from 'common/api-context';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <div>
          <AppRoutes/>
          <ToastContainer
            position="bottom-right"
            theme="colored"
            newestOnTop
            hideProgressBar
          />
        </div>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
