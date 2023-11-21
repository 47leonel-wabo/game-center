import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./skeleton/GameCardSkeleton";
import { Genre } from "../services/genres-service";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  selectedGenre: Genre | null;
}

const GamesGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);

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
