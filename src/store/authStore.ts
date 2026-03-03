import { create } from 'zustand';
import {
  persist,
  createJSONStorage,
  type PersistOptions,
} from 'zustand/middleware';
import type { AuthResponse } from '@/types/auth';

type AuthState = {
  user: Omit<AuthResponse, 'token'> | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (data: AuthResponse, remember: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _, api) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (data, remember) => {
        const storage = remember ? localStorage : sessionStorage;
        (
          api.persist as {
            setOptions: (options: Partial<PersistOptions<AuthState>>) => void;
          }
        ).setOptions({
          storage: createJSONStorage(() => storage),
        });
        set({
          user: {
            id: data.id,
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            image: data.image,
          },
          token: data.token,
          isAuthenticated: true,
        });
      },
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        localStorage.removeItem('auth-storage');
        sessionStorage.removeItem('auth-storage');
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
