import api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export default class AuthServices {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/auth/login', { email, password });
  }

  static async registration(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/auth/register', {
      email,
      password,
      first_name,
      last_name,
    });
  }

  static async reset(email: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/auth/reset', {
      email,
    });
  }

  static async logout(): Promise<void> {
    return api.get('/logout');
  }
}
