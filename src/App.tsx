import { Box } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppRoutes } from 'components/app-routes';
import { AppToggler } from 'components/app-toogler';

import './App.css';

function App() {
  return (
    <Box position="relative" w="100vw" h="100vh">
      <AppRoutes/>
      <AppToggler/>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        newestOnTop
        hideProgressBar
      />
    </Box>
  );
}

export default App;
