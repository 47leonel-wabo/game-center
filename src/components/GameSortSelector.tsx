import { useState } from "react";
import GameItemSelector from "./GameItemSelector";

interface Props {
  //   sortList: SortBy[];
  onSelect: (criteria: SortBy) => void;
}

interface SortBy {
  id: number;
  name: string;
}

const sortCriteria: SortBy[] = [
  { id: 0, name: "Relevance" },
  { id: 1, name: "Date added" },
  { id: 2, name: "Name" },
  { id: 3, name: "Release date" },
  { id: 4, name: "Popularity" },
  { id: 5, name: "Average rating" },
];

const GameSortSelector = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <GameItemSelector
      title="Sort"
      data={sortCriteria}
      onSelect={(data) => setMessage(data.name)}
    />
  );
};

export default GameSortSelector;
