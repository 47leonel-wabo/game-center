import { PlatformObject } from "../services/games-service";
import { Genre } from "../services/genres-service";
import useData from "./useData";
import { ParentPlatform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
  metacritic: number;
}

const useGames = (
  selectedPlatform: ParentPlatform | null,
  selectedGenre: Genre | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
