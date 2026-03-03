import { useMutation } from '@tanstack/react-query';
import { authService } from '@/api/authService';
import { useAuthStore } from '@/store/authStore';
import type { LoginFormValues } from '@/types/auth';

export const useAuth = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: (credentials: LoginFormValues) =>
      authService.login(credentials),
    onSuccess: (data, variables) => {
      login(data, variables.remember || false);
    },
    onError: (error) => {
      console.error('Login failed', error);
    },
  });
};
