import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Registration } from './Registration';
import AuthContext from '../../context/auth';

const RegistrationContainer = () => {
  const navigate = useNavigate();
  const { registration } = useContext(AuthContext);

  const handleRegistration = async (
    email: string,
    password: string,
    lastName: string,
    firstName: string
  ) => {
    try {
      const aa = await registration(email, password, lastName, firstName);
      console.log('aaa', aa);
      // navigate(AppRoutes.DASHBOARD);
    } catch (e) {
      console.log(e);
    }
  };

  return <Registration handleRegistration={handleRegistration} />;
};

export default RegistrationContainer;
