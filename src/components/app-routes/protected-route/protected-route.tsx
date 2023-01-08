import { FC, memo } from 'react';
import { Navigate } from 'react-router-dom';

import { Loader } from 'components/loader';
import { ProtectedRouteProps } from './protected-route-interfaces';
import { useApiContext } from 'context';

export const ProtectedRoute: FC<ProtectedRouteProps> = memo(({ children }) => {
  const currentUser = useApiContext();

  if (currentUser === null) {
    return <Loader/>;
  }

  return !currentUser ? <Navigate to="/login" /> : <>{children}</>;
});