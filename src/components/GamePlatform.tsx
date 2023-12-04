import usePlatformQuery from "../hooks/usePlatformQuery";
import { ParentPlatform } from "../hooks/usePlatforms";
import GameItemSelector from "./GameItemSelector";

interface Props {
  onSelect: (platform: ParentPlatform) => void;
}

const GamePlatform = ({ onSelect }: Props) => {
  const { data: platforms, error } = usePlatformQuery();

  if (error) return <></>;

  return (
    <GameItemSelector<ParentPlatform>
      title="Platforms"
      data={platforms?.results}
      onSelect={onSelect}
    />
  );
};

export default GamePlatform;
