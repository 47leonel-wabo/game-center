import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshot from "../hooks/useGameScreenshots";
interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useGameScreenshot(gameId);

  console.log("SCREENS", screenshots);

  if (error) throw error;

  if (isLoading) return;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
