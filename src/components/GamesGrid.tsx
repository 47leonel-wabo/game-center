import React, { useEffect, useState } from "react";
import gamesService, { Game } from "../services/games-service";
import { Text } from "@chakra-ui/react";

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const { resultPromise, controller } = gamesService.getGames();
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
