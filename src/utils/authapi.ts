import axios from 'axios';

type LoginDataProps = {
  email: string;
  password: string;
};

export const login = async (data: LoginDataProps) => {
  try {
    const res = await axios.post('/api/v1/auth/login', data);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
