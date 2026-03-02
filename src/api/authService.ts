import { api } from './index';
import type { LoginFormValues, AuthResponse } from '../types/auth';

export const authService = {
  login: async (credentials: LoginFormValues): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/login', credentials);
    return data;
  },
};
