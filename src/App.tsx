import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainPage } from 'pages/main';
// import { RegisterPage } from 'pages/register';

import './App.css';

function App() {
  return (
    <div>
      <MainPage/>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        newestOnTop
        hideProgressBar
      />
    </div>
  );
}

export default App;
