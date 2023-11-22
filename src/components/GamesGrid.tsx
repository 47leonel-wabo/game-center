import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../services/genres-service";
import GameCard from "./GameCard";
import GameCardSkeleton from "./skeleton/GameCardSkeleton";
import { ParentPlatform } from "../hooks/usePlatforms";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: ParentPlatform | null;
}

const GamesGrid = ({ selectedPlatform, selectedGenre }: Props) => {
  const {
    data: games,
    error: gamesError,
    isLoading: gamesLoading,
  } = useGames(selectedPlatform, selectedGenre);

  if (gamesLoading)
    return (
      <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
        {skeleton.map((i) => (
          <GameCardSkeleton key={i} />
        ))}
      </SimpleGrid>
    );

  return (
    <>
      {gamesError && <Text>{gamesError}</Text>}
      {!gamesLoading && (
        <>
          <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default GamesGrid;
