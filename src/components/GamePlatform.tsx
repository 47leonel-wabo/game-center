import usePlatformQuery from "../hooks/usePlatformQuery";
import useGameStore, { ParentPlatform } from "../stores/store";
import GameItemSelector from "./GameItemSelector";

const GamePlatform = () => {
  const { data, error } = usePlatformQuery();
  const setSelectedPlatform = useGameStore((selector) => selector.setPlatform);

  if (error) return <></>;

  return (
    <GameItemSelector<ParentPlatform>
      title="Platforms"
      data={data?.results}
      onSelect={(platform) => setSelectedPlatform(platform.id)}
    />
  );
};

export default GamePlatform;
