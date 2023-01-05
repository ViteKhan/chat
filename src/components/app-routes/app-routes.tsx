import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from 'pages/login';
import { MainPage } from 'pages/main';
import { ProtectedRoute } from './protected-route';
import { RegisterPage } from 'pages/register';
import { ROUTES } from 'common/constants';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN}>
        <Route index
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage/>} />
    </Route>
  </Routes>
  );
};