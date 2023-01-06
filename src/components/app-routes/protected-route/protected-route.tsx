import { FC, memo } from 'react';
import { Navigate } from 'react-router-dom';

import { ProtectedRouteProps } from './protected-route-interfaces';
import { useAppContext } from 'context/app-context';

export const ProtectedRoute: FC<ProtectedRouteProps> = memo(({ children }) => {
  const { currentUser } = useAppContext();

  return !currentUser ? <Navigate to="/login" /> : <>{children}</>;
});