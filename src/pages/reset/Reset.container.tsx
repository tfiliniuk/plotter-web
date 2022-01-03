import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reset } from './Reset';
import AuthContext from '../../context/auth';
import { AppRouters } from '../../constants/constants';

const ResetContainer = () => {
  const navigate = useNavigate();
  const { reset } = useContext(AuthContext);

  const handleRegistration = async (email: string) => {
    try {
      await reset(email);
      navigate(AppRouters.LOGIN);
    } catch (e) {
      console.log(e);
    }
  };

  return <Reset handleRegistration={handleRegistration} />;
};

export default ResetContainer;
