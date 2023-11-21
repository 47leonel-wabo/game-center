import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./skeleton/GameCardSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();

  if (isLoading)
    return (
      <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
        {skeleton.map((i) => (
          <GameCardSkeleton key={i} />
        ))}
      </SimpleGrid>
    );

  return (
    <>
      {error && <Text>{error}</Text>}
      {!isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
          {data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GamesGrid;
