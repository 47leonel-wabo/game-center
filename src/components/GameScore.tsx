import { Badge } from "@chakra-ui/react";

interface Props {
  metacretic: number;
}

const defineBadgeColor = (value: number): string => {
  if (value >= 90) return "green";
  else if (value >= 70) return "";
  else return "red";
};

const GameScore = ({ metacretic }: Props) => {
  return <Badge colorScheme={defineBadgeColor(metacretic)}>{metacretic}</Badge>;
};

export default GameScore;
