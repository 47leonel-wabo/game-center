import { Button, Text } from "@chakra-ui/react";
import { Genre } from "../services/genres-service";

interface Props {
  genre: Genre;
  selectedGenre?: Genre | null;
  handleClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, selectedGenre, handleClick }: Props) => {
  return (
    <Button
      variant="link"
      fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
      onClick={() => handleClick(genre)}
    >
      {genre.name}
    </Button>
  );
};

export default GenreItem;
