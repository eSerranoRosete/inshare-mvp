import { create } from "zustand";

type ActiveNav = "dashboard" | "studio" | "analytics" | "interactions";

interface ActiveNavState {
  activeNav: ActiveNav;
  setActiveNav: (nav: string) => void;
}

export const useActiveNav = create<ActiveNavState>((set) => ({
  activeNav: "dashboard",
  setActiveNav: (nav: string) => set(() => ({ activeNav: nav as ActiveNav })),
}));
