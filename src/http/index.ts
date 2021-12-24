import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export const API_URL = `http://localhost:4000/api/v1`;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return config;
  }
  // (error) => {
  //   return Promise.reject(error);
  // }
);

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    console.dir(error.config);
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.token);
        return api.request(originalRequest);
      } catch (e) {
        console.log('Not authorizing');
      }
    }
    throw error;
  }
);

export default api;
