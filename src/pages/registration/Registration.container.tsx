import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Registration } from './Registration';
import AuthContext from '../../context/auth';
import { AppRouters } from '../../constants/constants';

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
      await registration(email, password, lastName, firstName);
      navigate(AppRouters.HOME);
    } catch (e) {
      console.log(e);
    }
  };

  return <Registration handleRegistration={handleRegistration} />;
};

export default RegistrationContainer;
