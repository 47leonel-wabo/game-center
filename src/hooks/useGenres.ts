import { useEffect, useState } from "react";
import genreService, {
  Genre,
  ResultGenreRequest,
} from "../services/genres-service";
import { CanceledError } from "axios";

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isGenreLoading, setGenresLoading] = useState<boolean>(false);
  const [genreError, setGenreError] = useState<string>("");

  useEffect(() => {
    setGenresLoading(true);
    const { resultPromise, controller } =
      genreService.getAll<ResultGenreRequest>();
    resultPromise
      .then(({ data }) => setGenres(data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setGenreError(error.message);
      })
      .finally(() => setGenresLoading(false));

    return () => controller.abort();
  }, []);

  return { genres, isGenreLoading, genreError };
};

export default useGenre;
