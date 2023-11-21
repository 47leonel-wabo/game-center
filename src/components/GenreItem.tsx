import { Button, Text } from "@chakra-ui/react";
import { Genre } from "../services/genres-service";

interface Props {
  genre: Genre;
  handleClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, handleClick }: Props) => {
  return (
    <Button variant="link" onClick={() => handleClick(genre)}>
      {genre.name}
    </Button>
  );
};

export default GenreItem;
