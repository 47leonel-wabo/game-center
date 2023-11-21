import { HStack, Text } from "@chakra-ui/react";
import { Genre } from "../services/genres-service";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack>
      <Text>{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
