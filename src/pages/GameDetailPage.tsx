import { Box, Heading, Text } from "@chakra-ui/react";
import userGameDetailsQuery from "../hooks/useGameDetailQuery";
import useGameStore from "../stores/store";

const GameDetailPage = () => {
  const gameId = useGameStore((selector) => selector.gameId);
  const { data: gameDetail, error, isFetching } = userGameDetailsQuery(gameId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box p={6}>
      <Heading>{gameDetail?.name}</Heading>
      <Text>{gameDetail?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
