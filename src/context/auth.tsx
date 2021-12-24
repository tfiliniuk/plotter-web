import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AuthService from '../services/AuthService';
import { IUser } from '../models/IUser';
import { JsxElement } from 'typescript';
import axios from 'axios';

interface AuthContextData {
  isAuth: boolean;
  user: IUser | null;
  isLoading: boolean;
  login(email: string, password: string): Promise<void>;
  // signOut(): Promise<void>;
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

  // useEffect(() => {
  //   function loadStorageData() {
  //     const storageUser = localStorage.getItem('user');
  //     const storageToken = localStorage.getItem('token');

  //     if (storageToken && storageUser) {
  //       setUser(JSON.parse(storageUser));
  //       setLoading(false);
  //     }
  //   }
  //   loadStorageData();
  // }, []);

  async function login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log('reee', response);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
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
      setUser(response.data.user);
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {}
  }

  async function checkAuth() {
    setLoading(true);
    try {
      // const response = await axios;
    } catch (error) {
    } finally {
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuth: !!user, user, login, registration, isLoading: loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
