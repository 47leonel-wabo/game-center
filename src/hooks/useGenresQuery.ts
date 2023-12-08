import { useQuery } from "@tanstack/react-query";
import { GENRES_KEY } from "../services/constants";
import API_Client from "../services/api-client";
import { Genre } from "../services/genres-service";
import ms from "ms";

const apiClient = new API_Client<Genre>("/genres");

const userGenresQuery = () => {
  const genresQuery = useQuery({
    queryKey: GENRES_KEY,
    queryFn: () => apiClient.getAll({}),
    staleTime: ms("24h"), // keep it for 24h
  });

  return genresQuery;
};

export default userGenresQuery;
