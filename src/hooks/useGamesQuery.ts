import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { RAWGRequestResponse } from "../services/api-client";
import { GAMES_KEY } from "../services/constants";
import { Game } from "./useGames";

const useGamesQuery = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: [...GAMES_KEY, gameQuery],
    queryFn: () =>
      apiClient
        .get<RAWGRequestResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((response) => response.data),
  });

export default useGamesQuery;
