import { create } from 'zustand'
import { persist } from 'zustand/middleware';

type UserStore = {
  userId: string;
  username: string;
  email: string;
  updateUsername: (username: string) => void;
  updateUserId: (userId: string) => void;
  updateEmail: (email: string) => void;
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      userId: "default",
      username: "default",
      email: "",

      updateUsername: (username) => set({ username }),
      updateUserId: (userId) => set({ userId }),
      updateEmail: (email) => set({ email }),
    }),
    {
      name: "user-store",
    }
  )
);