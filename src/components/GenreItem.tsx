import { Button } from "@chakra-ui/react";
import { Genre } from "../services/genres-service";
import useGameStore from "../stores/store";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const selectedGenreId = useGameStore(
    (selector) => selector.gameQuery.genreId
  );
  const setSelectedGenre = useGameStore((selector) => selector.setGenre);

  return (
    <Button
      variant="link"
      fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
      onClick={() => setSelectedGenre(genre.id)}
    >
      {genre.name}
    </Button>
  );
};

export default GenreItem;
