import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { STORE_NAME } from '@/data/constants/store-name';

interface UserStoreState {
  age: number;
  incrementAge: () => void;
  updateAge: (arg: number) => void;
}

export const useUserStore = create(
  persist<UserStoreState>(
    (set, get) => ({
      age: 0,
      incrementAge: () => set({ age: get().age + 1 }),
      updateAge: (newAge: number) => set({ age: newAge }),
    }),
    {
      name: STORE_NAME.USER,
      storage: createJSONStorage(() => localStorage),
    },
  ),
)