import { useEffect, useState } from "react";
import gamesService, {
  Game,
  ResultGameRequest,
} from "../services/games-service";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { resultPromise, controller } =
      gamesService.getAll<ResultGameRequest>();
    resultPromise
      .then(({ data }) => setGames(data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
