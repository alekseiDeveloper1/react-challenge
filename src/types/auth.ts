import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(1, 'Логин обязателен'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  remember: z.boolean().optional(),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export type AuthResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};
