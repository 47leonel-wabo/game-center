import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./skeleton/GameCardSkeleton";
import { Genre } from "../services/genres-service";
import usePlatforms from "../hooks/usePlatforms";
import GamePlatform from "./GamePlatform";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  selectedGenre: Genre | null;
}

const GamesGrid = ({ selectedGenre }: Props) => {
  const {
    data: games,
    error: gamesError,
    isLoading: gamesLoading,
  } = useGames(selectedGenre);
  const {
    data: platforms,
    error: platformsError,
    isLoading: platformsLoading,
  } = usePlatforms();

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
          <HStack marginX={3}>
            <GamePlatform title="Game Platforms" platforms={platforms} />
          </HStack>
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
