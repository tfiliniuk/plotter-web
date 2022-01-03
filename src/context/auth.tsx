import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AuthService from '../services/AuthService';
import { IUser } from '../models/IUser';

interface AuthContextData {
  isAuth: boolean;
  user: IUser | null;
  isLoading: boolean;
  login(email: string, password: string): Promise<boolean>;
  logout(): Promise<void>;
  reset(email: string): Promise<void>;
  registration(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    function loadStorageData() {
      const storageUser = localStorage.getItem('user');
      const storageToken = localStorage.getItem('token');

      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(response.data.user);
      setIsAuth(true);
      return true;
    } catch (error) {
      return false;
    }
  }

  async function registration(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        first_name,
        last_name
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(response.data.user);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function reset(email: string) {
    try {
      await AuthService.reset(email);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      setIsAuth(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        login,
        registration,
        isLoading: loading,
        logout,
        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
