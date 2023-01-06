import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContextProvider } from 'context/app-context';
import { AppRoutes } from 'components/app-routes';
import { AppToggler } from 'components/app-toogler';
import { theme } from 'styles/theme';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AppRoutes/>
        <AppToggler/>
        <ToastContainer
          position="bottom-right"
          theme="colored"
          newestOnTop
          hideProgressBar
        />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
