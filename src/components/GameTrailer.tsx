import { Text } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailerQuery";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  //   const { data: movies, error, isFetching } = useGameTrailer(gameId);
  //   console.log("MOVIES", movies);

  //   if (error) throw error;

  //   if (isFetching) return <Text>Loading...</Text>;

  return <div>GameTrailer</div>;
};

export default GameTrailer;
