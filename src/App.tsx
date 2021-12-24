import React, { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import { Loader } from './components/Loader';
import { AppRoutes } from './constants/constants';
import { AuthProvider } from './context/auth';

const Login = lazy(() => import('./pages/login/Login.container'));
const SignUp = lazy(
  () => import('./pages/registration/Registration.container')
);
const NotFound = lazy(() => import('./pages/notFound/NotFoundPage'));

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={AppRoutes.LOGIN} element={<Login />} />
            <Route path={AppRoutes.SIGN_UP} element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  );
};
