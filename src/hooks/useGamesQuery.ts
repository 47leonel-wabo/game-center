import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import API_Client from "../services/api-client";
import { GAMES_KEY } from "../services/constants";
import { Game } from "./useGames";

const apiClient = new API_Client<Game>("/games");

const useGamesQuery = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: [...GAMES_KEY, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });

export default useGamesQuery;
