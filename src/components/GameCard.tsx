import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game, cropImage } from "../services/games-service";
import PlatformIcon from "./PlatformIcon";
import GameScore from "./GameScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={"hidden"}>
      <Image src={cropImage(game.background_image, 600, 400)} />
      <CardBody>
        <Heading fontSize={"md"}>
          {game.name.length > 25
            ? game.name.substring(0, 24).concat("...")
            : game.name}
        </Heading>
        <HStack marginY={1} justifyContent="space-between" alignItems="center">
          <HStack>
            {game.parent_platforms.map((value) => (
              <PlatformIcon
                key={value.platform.id}
                slug={value.platform.slug}
              />
            ))}
          </HStack>
          <GameScore metacretic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
