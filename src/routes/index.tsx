import React, { FC, useContext } from 'react';
import AuthContext from '../context/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export const Routes: FC = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <AppRoutes /> : <AuthRoutes />;
};
