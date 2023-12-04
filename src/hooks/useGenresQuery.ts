import { useQuery } from "@tanstack/react-query";
import { GENRES_KEY } from "../services/constants";
import genreService from "../services/genres-service";

const userGenresQuery = () => {
  const genresQuery = useQuery({
    queryKey: GENRES_KEY,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // keep it for 24h
  });

  return genresQuery;
};

export default userGenresQuery;
