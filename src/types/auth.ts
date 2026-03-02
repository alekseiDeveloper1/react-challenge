import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;

export const AuthResponseSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  image: z.string().url({ message: 'Invalid URL format' }),
  token: z.string(),
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;
