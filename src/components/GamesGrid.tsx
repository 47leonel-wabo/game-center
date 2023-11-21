import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  if (isLoading)
    return (
      <>
        {skeleton.map((i) => (
          <GameCardSkeleton key={i} />
        ))}
      </>
    );

  return (
    <>
      {error && <Text>{error}</Text>}
      {!isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GamesGrid;
