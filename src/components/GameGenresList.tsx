import {
  Box,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import userGenresQuery from "../hooks/useGenresQuery";
import { cropImage } from "../services/games-service";
import { Genre } from "../services/genres-service";
import GenreItem from "./GenreItem";
import GameGenreSkeleton from "./skeleton/GameGenreSkeleton";

interface Props {
  onGenreSelected: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GameGenresList = ({ selectedGenreId, onGenreSelected }: Props) => {
  // const { genres, isGenreLoading, genreError } = useGenre();
  const { data: genres, isLoading, error } = userGenresQuery();

  if (isLoading) return <GameGenreSkeleton />;

  return (
    <VStack>
      <Heading as="h3" size="sm">
        Game Genres
      </Heading>
      {error && <Box>{error?.message}</Box>}
      <Divider />
      <List spacing={2} padding={2}>
        {!isLoading &&
          genres?.results.map((genre) => (
            <ListItem key={genre.id} display="flex" alignItems="center">
              <Image
                boxSize="32px"
                objectFit="cover"
                overflow="hidden"
                borderRadius={8}
                src={cropImage(genre.image_background)}
                alt={genre.name}
                marginX={2}
              />
              <GenreItem
                genre={genre}
                selectedGenreId={selectedGenreId}
                handleClick={onGenreSelected}
              />
            </ListItem>
          ))}
      </List>
    </VStack>
  );
};

export default GameGenresList;
