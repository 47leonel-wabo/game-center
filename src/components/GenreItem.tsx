import { Button } from "@chakra-ui/react";
import { Genre } from "../services/genres-service";

interface Props {
  genre: Genre;
  selectedGenreId?: number;
  handleClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, selectedGenreId, handleClick }: Props) => {
  return (
    <Button
      variant="link"
      fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
      onClick={() => handleClick(genre)}
    >
      {genre.name}
    </Button>
  );
};

export default GenreItem;
