import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AuthResponse } from '@/types/auth';

type AuthState = {
  username: string | null;
  accessToken: string | null;
  rememberMe: boolean;
  login: (data: AuthResponse, remember: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      accessToken: null,
      rememberMe: false,
      login: (data, remember) => {
        set({
          username: data.username,
          accessToken: data.accessToken,
          rememberMe: remember,
        });
      },
      logout: () => {
        set({ username: null, accessToken: null, rememberMe: false });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state && !state.rememberMe) {
          state.logout();
        }
      },
    },
  ),
);
