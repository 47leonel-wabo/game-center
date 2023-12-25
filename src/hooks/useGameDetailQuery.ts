import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";
import { GAMES_DETAILS_KEY } from "../services/constants";
import useGameStore from "../stores/store";
import ms from "ms";
import { Genre } from "../services/genres-service";

export interface GameDetail {
  id: number;
  slug: string;
  name: string;
  rating: number;
  genres: Genre[];
  publishers: Publisher[];
  website: string;
  description_raw: string;
  metacritic: number;
  platforms: PlatformObject[];
}

interface Publisher {
  id: number;
  name: string;
}

interface PlatformObject {
  platform: Platform;
  released_at?: string;
}

interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new API_Client<GameDetail>("/games");

const userGameDetailsQuery = (gameId?: number) =>
  useQuery({
    queryKey: [GAMES_DETAILS_KEY],
    queryFn: () => apiClient.getOne(gameId),
  });

export default userGameDetailsQuery;
