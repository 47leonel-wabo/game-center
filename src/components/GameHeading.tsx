import { Heading } from "@chakra-ui/react";
import usePlatformQuery from "../hooks/usePlatformQuery";
import useGameStore from "../stores/store";
import useGenresQuery from "../hooks/useGenresQuery";

const GameHeading = () => {
  const { data: platforms } = usePlatformQuery();
  const selectedPlatformId = useGameStore(
    (selector) => selector.gameQuery.platformId
  );

  const { data: genres } = useGenresQuery();
  const selectedGenreId = useGameStore(
    (selector) => selector.gameQuery.genreId
  );

  const selectedPlatform = platforms?.results.find(
    (p) => p.id === selectedPlatformId
  );
  const selectedGenre = genres?.results.find((g) => g.id === selectedGenreId);

  return (
    <Heading padding={3}>
      Games {selectedPlatform && selectedPlatform.name}{" "}
      {selectedGenre && selectedGenre.name}
    </Heading>
  );
};

export default GameHeading;
