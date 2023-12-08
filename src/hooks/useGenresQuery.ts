import { useQuery } from "@tanstack/react-query";
import { GENRES_KEY } from "../services/constants";
import genreService, { Genre } from "../services/genres-service";
import apiClient, { RAWGRequestResponse } from "../services/api-client";

const userGenresQuery = () => {
  const genresQuery = useQuery({
    queryKey: GENRES_KEY,
    queryFn: () =>
      apiClient
        .get<RAWGRequestResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // keep it for 24h
  });

  return genresQuery;
};

export default userGenresQuery;
