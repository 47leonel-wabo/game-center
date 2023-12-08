import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGamesQuery from "../hooks/useGamesQuery";
import GameCard from "./GameCard";
import GameCardSkeleton from "./skeleton/GameCardSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error: gamesError,
    isFetching: gamesLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGamesQuery(gameQuery);

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
      {gamesError && <Text>{gamesError.message}</Text>}
      {!gamesLoading && (
        <>
          <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
            {games?.pages.map((page) =>
              page.results.map((game) => <GameCard key={game.id} game={game} />)
            )}
          </SimpleGrid>
          <Button
            size={"sm"}
            ml={3}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </Button>
        </>
      )}
    </>
  );
};

export default GamesGrid;
