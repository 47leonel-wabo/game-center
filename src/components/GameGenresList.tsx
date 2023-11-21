import { Heading, Text, VStack } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GameGenreSkeleton from "./skeleton/GameGenreSkeleton";

const GameGenresList = () => {
  const { genres, isGenreLoading, genreError } = useGenre();

  if (isGenreLoading) return <GameGenreSkeleton />;

  console.log("GENRES", genres);

  return (
    <VStack>
      <Heading as="h3" size="sm">
        Game Genres
      </Heading>
      {genreError && <Text>{genreError}</Text>}
      {!isGenreLoading &&
        genres.map((genre) => <GenreItem key={genre.id} genre={genre} />)}
    </VStack>
  );
};

export default GameGenresList;
