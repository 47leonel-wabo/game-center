import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";
import { GAMES_DETAILS_KEY } from "../services/constants";
import useGameStore from "../stores/store";
import ms from "ms";

interface GameDetail {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}

const apiClient = new API_Client<GameDetail>("/games");

const userGameDetailsQuery = (gameId?: number) =>
  useQuery({
    queryKey: [GAMES_DETAILS_KEY],
    queryFn: () => apiClient.getOne(gameId),
  });

export default userGameDetailsQuery;
