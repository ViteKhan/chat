import React, { FC, memo, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'common/api-context';
import { ProtectedRouteProps } from './protected-route-interfaces';

export const ProtectedRoute: FC<ProtectedRouteProps> = memo(({ children }) => {
  const currentUser = useContext(AuthContext);

  return !currentUser ? <Navigate to="/login" /> : <>{children}</>;
});