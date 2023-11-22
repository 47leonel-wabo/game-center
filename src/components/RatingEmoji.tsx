import { HiThumbUp } from "react-icons/hi";
import { FaFire } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  rating: number;
}

const emojis: { [key: number]: IconType } = {
  3: HiThumbUp,
  4: TbTargetArrow,
  5: FaFire,
};

const RatingEmoji = ({ rating }: Props) => {
  if (rating < 3) return <></>;
  return <Icon as={emojis[rating]} color="red.500" boxSize={8} marginY={2} />;
};

export default RatingEmoji;
