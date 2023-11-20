import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-service";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Heading fontSize={"md"} padding={4}>
        {game.name.length > 25
          ? game.name.substring(0, 24).concat("...")
          : game.name}
      </Heading>
    </Card>
  );
};

export default GameCard;
