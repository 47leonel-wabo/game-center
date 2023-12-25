import { SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GameDetail } from "../hooks/useGameDetailQuery";
import GameInfoSection from "./GameInfoSection";
import GameScore from "./GameScore";

interface Props {
  gameDetail: GameDetail;
}

const GameAttributes = ({ gameDetail }: Props) => {
  return (
    <SimpleGrid as={"dl"} columns={2}>
      <GameInfoSection term="Platforms">
        {gameDetail?.platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameInfoSection>
      <GameInfoSection term="Metascore">
        <GameScore metacretic={gameDetail?.metacritic!} />
      </GameInfoSection>
      <GameInfoSection term="Genres">
        {gameDetail?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameInfoSection>
      <GameInfoSection term="Publisher">
        {gameDetail?.publishers.map((publisher) => (
          <Link to={gameDetail?.website} key={publisher.id}>
            {publisher.name}
          </Link>
        ))}
      </GameInfoSection>
    </SimpleGrid>
  );
};

export default GameAttributes;
