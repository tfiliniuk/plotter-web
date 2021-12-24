import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { Login } from './Login';
import AuthContext from '../../context/auth';

const LoginContainer = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = async (email: string, password: string) => {
    try {
      const aa = await login(email, password);
      console.log('aaa', aa);
      // navigate(AppRoutes.DASHBOARD);
    } catch (e) {
      console.log(e);
    }
  };
  return <Login handleLogin={handleLogin} />;
};

export default LoginContainer;
