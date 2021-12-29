import React, { lazy, FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { AppRouters } from '../constants/constants';

const NotFound = lazy(() => import('../pages/notFound/NotFoundPage'));

const HomePage = () => {
  return <div>Home page</div>;
};

const AppRoutes: FC = () => (
  <Switch>
    <Route path={AppRouters.HOME} element={<HomePage />} />
    <Route path="*" element={<NotFound />} />
  </Switch>
);

export default AppRoutes;
