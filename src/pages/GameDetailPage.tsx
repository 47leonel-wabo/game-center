import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import GameInfoSection from "../components/GameInfoSection";
import TextExpander from "../components/TextExpander";
import userGameDetailsQuery from "../hooks/useGameDetailQuery";
import useGameStore from "../stores/store";
import GameScore from "../components/GameScore";
import { Link } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const gameId = useGameStore((selector) => selector.gameId);
  const { data: gameDetail, error, isFetching } = userGameDetailsQuery(gameId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box p={6}>
      <Heading>{gameDetail?.name}</Heading>
      <TextExpander text={gameDetail?.description_raw!} />
      <GameAttributes gameDetail={gameDetail!} />
    </Box>
  );
};

export default GameDetailPage;
