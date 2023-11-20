import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

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
