import { useQuery } from "@tanstack/react-query";
import { GENRES_KEY } from "../services/constants";
import genreService from "../services/genres-service";

const userGenresQuery = () => {
  const genresQuery = useQuery({
    queryKey: GENRES_KEY,
    queryFn: genreService.getAll,
  });

  return genresQuery;
};

export default userGenresQuery;
