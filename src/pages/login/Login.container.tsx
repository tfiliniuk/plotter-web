import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouters } from '../../constants/constants';
import { Login } from './Login';
import AuthContext from '../../context/auth';

const LoginContainer = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = async (email: string, password: string) => {
    const res = await login(email, password);
    res && navigate(AppRouters.HOME);
  };
  return <Login handleLogin={handleLogin} />;
};

export default LoginContainer;
