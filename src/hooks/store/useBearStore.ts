import { create } from "zustand";

interface BearState {
  bears: string;
  addBear: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: "I'm a bear 🐻",
  addBear: () => set((state) => ({ bears: state.bears + "🐻" })),
}));
