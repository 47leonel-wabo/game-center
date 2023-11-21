import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genres-service";
import { CanceledError } from "axios";
import { RAWGRequestResponse } from "./useData";

// Even as this approach is working it's better
// to use 'useData<T>(endpoint)' directly in order to avoid code
// duplication and multiple imports - clean code

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isGenreLoading, setGenresLoading] = useState<boolean>(false);
  const [genreError, setGenreError] = useState<string>("");

  useEffect(() => {
    setGenresLoading(true);
    const { resultPromise, controller } =
      genreService.getAll<RAWGRequestResponse<Genre>>();
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
