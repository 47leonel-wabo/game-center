import { useState } from "react";
import GameItemSelector from "./GameItemSelector";

interface Props {
  onSelect: (criteria: SortBy) => void;
}

interface SortBy {
  id: number;
  value: string;
  name: string;
}

const sortCriteria: SortBy[] = [
  { id: 0, value: "", name: "Relevance" },
  { id: 1, value: "-added", name: "Date added" },
  { id: 2, value: "name", name: "Name" },
  { id: 3, value: "-released", name: "Release date" },
  { id: 4, value: "-metacretic", name: "Popularity" },
  { id: 5, value: "-rating", name: "Average rating" },
];

const GameSortSelector = ({ onSelect }: Props) => {
  const [message, setMessage] = useState<string>("");

  return (
    <GameItemSelector title="Sort" data={sortCriteria} onSelect={onSelect} />
  );
};

export default GameSortSelector;
