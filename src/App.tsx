import React, { Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar/Navbar';
import { AuthProvider } from './context/auth';
import { Routes } from './routes';

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </AuthProvider>
    </Router>
  );
};
