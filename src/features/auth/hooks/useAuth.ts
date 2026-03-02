import { useMutation } from '@tanstack/react-query';
import { authService } from '@/api/authService';
import type { LoginFormValues } from '@/types/auth';

export const useAuth = () => {
  return useMutation({
    mutationFn: (credentials: LoginFormValues) =>
      authService.login(credentials),
    onSuccess: (data) => {
      console.log('Login successful', data.token);
    },
    onError: (error) => {
      console.error('Login failed', error);
    },
  });
};
