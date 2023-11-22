import usePlatforms, { ParentPlatform } from "../hooks/usePlatforms";
import GameItemSelector from "./GameItemSelector";

interface Props {
  onSelect: (platform: ParentPlatform) => void;
}

const GamePlatform = ({ onSelect }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return;

  return <GameItemSelector data={platforms} onSelect={onSelect} />;
};

export default GamePlatform;
