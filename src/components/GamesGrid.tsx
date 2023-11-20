import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import gamesService, {
  Game,
  ResultGameRequest,
} from "../services/games-service";

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const { resultPromise, controller } =
      gamesService.getAll<ResultGameRequest>();
    resultPromise
      .then(({ data }) => setGames(data.results))
      .catch((error) => setError(error.message));

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
