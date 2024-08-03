import { create } from "zustand";
import { createSelectors } from "./create-selectors";
import { persist, createJSONStorage } from "zustand/middleware";

interface NavigationState {
  id: number;
  setId: (id: number) => void;

}

const useNavigationStoreBase = create<NavigationState>()(
  persist(
    (set) => ({
      id: 0,
      setId: (id: number) => set({ id }),
    }),
    {
      name: "navigation-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useNavigationStore = createSelectors(useNavigationStoreBase);
