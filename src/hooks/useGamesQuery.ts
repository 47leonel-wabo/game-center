import { useQuery } from "@tanstack/react-query";
import { GAMES_KEY } from "../services/constants";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { RAWGRequestResponse } from "./useData";
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
