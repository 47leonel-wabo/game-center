import { PlatformObject } from "../services/games-service";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
