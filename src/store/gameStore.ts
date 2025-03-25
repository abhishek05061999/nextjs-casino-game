// src/store/gameStore.ts

import { create } from "zustand";
import { Game } from "@/types/Game";
import { fetchGames } from "@/services/api";

// Define the interface for the state structure
interface GameState {
  games: Game[];
  loading: boolean;
  error: string | null;
  fetchGames: (query: string) => Promise<void>;
}

// Create and export a Zustand store for game management
export const useGameStore = create<GameState>((set) => ({
  games: [],
  loading: false,
  error: null,

  // fetchGames method to load games based on the query
  fetchGames: async (query: string = "") => {
    set({ loading: true, error: null });
    try {
      const fetchedGames = await fetchGames(query);
      set({ games: fetchedGames, loading: false });
    } catch (error) {
      set({ error: "Failed to load games", loading: false });
    }
  },
})); 

                                                                                                                                                               //src/types/game.ts


