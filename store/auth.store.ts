import { getCurrentUser } from "@/lib/appwrite";
import { User } from "@/type";
import { create } from "zustand";
import { mapUser } from "@/lib/mapper/user.mapper";

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;

  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;

  fetchAuthenticatedUser: () => Promise<void>;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,

  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),

  fetchAuthenticatedUser: async () => {
    set({ isLoading: true });

    try {
      const res = await getCurrentUser();

      if (res?.user) {
        const mappedUser = mapUser(res.user);

        set({
          isAuthenticated: true,
          user: mappedUser,
        });
      } else {
        set({
          isAuthenticated: false,
          user: null,
        });
      }
    } catch (error) {
      console.log("fetchAuthenticatedUser error", error);
      set({
        isAuthenticated: false,
        user: null,
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
