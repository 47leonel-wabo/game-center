import { create } from "zustand";
import { GameQuery } from "./../App";

interface GameActions {
  setGenre: (id: number) => void;
  setPlatform: (id: number) => void;
  setSearchText: (keyWord: string) => void;
  setOrder: (order: string) => void;
}

interface GameStore extends GameQuery, GameActions {}

const useGameStore = create<GameStore>((set) => ({
  genreId: 0,
  platformId: 0,
  sortOrder: "",
  searchText: "",
  setGenre: (id: number) => set(() => ({ genreId: id })),
  setPlatform: (id: number) => set(() => ({ platformId: id })),
  setSearchText: (keyWord: string) =>
    set(() => ({
      // when searching, remove all existing criteria
      platformId: 0,
      genreId: 0,
      sortOrder: "",
      searchText: keyWord,
    })),
  setOrder: (order: string) => set(() => ({ sortOrder: order })),
}));

export default useGameStore;
