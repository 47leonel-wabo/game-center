import { useQuery } from "@tanstack/react-query";
import { GENRES_KEY } from "../services/constants";
import API_Client from "../services/api-client";
import { Genre } from "../services/genres-service";

const apiClient = new API_Client<Genre>("/genres");

const userGenresQuery = () => {
  const genresQuery = useQuery({
    queryKey: GENRES_KEY,
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000, // keep it for 24h
  });

  return genresQuery;
};

export default userGenresQuery;
