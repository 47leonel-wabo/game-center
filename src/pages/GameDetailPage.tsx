import { log } from "console";
import { useSearchParams } from "react-router-dom";
import useGameStore from "../stores/store";

const GameDetailPage = () => {
  const gameId = useGameStore((selector) => selector.gameId);

  console.log("ID", gameId);

  return <div>GameDetails</div>;
};

export default GameDetailPage;
