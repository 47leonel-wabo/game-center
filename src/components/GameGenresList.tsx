import {
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import { cropImage } from "../services/games-service";
import GenreItem from "./GenreItem";
import GameGenreSkeleton from "./skeleton/GameGenreSkeleton";

const GameGenresList = () => {
  const { genres, isGenreLoading, genreError } = useGenre();

  if (isGenreLoading) return <GameGenreSkeleton />;

  return (
    <VStack>
      <Heading as="h3" size="sm">
        Game Genres
      </Heading>
      <Divider />
      <List spacing={2} padding={2}>
        {!isGenreLoading &&
          genres.map((genre) => (
            <ListItem key={genre.id} display="flex" alignItems="center">
              <Image
                boxSize="32px"
                objectFit="fill"
                overflow="hidden"
                borderRadius={8}
                src={cropImage(genre.image_background)}
                alt={genre.name}
                marginX={2}
              />
              <GenreItem
                genre={genre}
                handleClick={(g) => console.log(g.name)}
              />
            </ListItem>
          ))}
      </List>
    </VStack>
  );
};

export default GameGenresList;
