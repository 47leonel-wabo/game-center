import { create } from "zustand";
import { PlatformObject } from "../services/games-service";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
  metacritic: number;
  rating_top: number;
}

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
  //   platform: Platform[];
}

interface GameStore {
  setGenre: (id: number) => void;
  setPlatform: (id: number) => void;
  setSearchText: (keyWord: string) => void;
  setSortOrder: (order: string) => void;
  gameQuery: GameQuery;
}

const useGameStore = create<GameStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { searchText } })),
  setGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameStore;
