import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { cropImage } from "../services/games-service";
import GameScore from "./GameScore";
import PlatformIcon from "./PlatformIcon";
import RatingEmoji from "./RatingEmoji";
import useGameStore, { Game } from "../stores/store";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const setSelectedGameId = useGameStore((selector) => selector.setGameId);

  return (
    <Card
      borderRadius={8}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.09)",
        transition: "transform .18s ease-in",
      }}
    >
      <Image src={cropImage(game.background_image)} />
      <CardBody>
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
        <Link
          to={`/games/${game.slug}`}
          onClick={() => setSelectedGameId(game.id)}
        >
          <Heading fontSize={"md"} _hover={{ color: "tomato" }}>
            {/* {game.name.length > 25
            ? game.name.substring(0, 24).concat("...")
            : game.name} */}
            {game.name}
          </Heading>
        </Link>
        <RatingEmoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
