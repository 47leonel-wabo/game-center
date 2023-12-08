import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { GAMES_KEY } from "../services/constants";
import { Game } from "./useGames";
import API_Client from "../services/api-client";

const apiClient = new API_Client<Game>("/games");

const useGamesQuery = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: [...GAMES_KEY, gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGamesQuery;
