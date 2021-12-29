import React, { lazy, FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { AppRouters } from '../constants/constants';

const Login = lazy(() => import('../pages/login/Login.container'));
const SignUp = lazy(
  () => import('../pages/registration/Registration.container')
);

const AuthRoutes: FC = () => (
  <Switch>
    <Route path={AppRouters.LOGIN} element={<Login />} />
    <Route path={AppRouters.SIGN_UP} element={<SignUp />} />
  </Switch>
);

export default AuthRoutes;
