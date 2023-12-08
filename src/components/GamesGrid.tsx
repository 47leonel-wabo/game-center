import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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

  if (gamesLoading) return <Spinner />;
  //   return (
  //     <SimpleGrid columns={{ sm: 1, md: 3, xl: 4 }} spacing={8} padding={4}>
  //       {skeleton.map((i) => (
  //         <GameCardSkeleton key={i} />
  //       ))}
  //     </SimpleGrid>
  //   );

  const fetchedGamesTotal =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {gamesError && <Text>{gamesError.message}</Text>}
      {!gamesLoading && (
        <>
          <InfiniteScroll
            hasMore={hasNextPage}
            dataLength={fetchedGamesTotal}
            loader={<Spinner />}
            next={() => fetchNextPage()}
          >
            <SimpleGrid
              columns={{ sm: 1, md: 3, xl: 4 }}
              spacing={8}
              padding={4}
            >
              {games?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </React.Fragment>
              ))}
            </SimpleGrid>
          </InfiniteScroll>
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
