import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => (
  <Heading padding={3}>
    {gameQuery
      ? `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} `
      : ""}
    Games
  </Heading>
);

export default GameHeading;
