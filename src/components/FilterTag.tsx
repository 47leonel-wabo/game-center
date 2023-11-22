import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { IoGameController } from "react-icons/io5";

interface Props {
  message: string;
}

const FilterTag = ({ message }: Props) => (
  <Tag size="lg" colorScheme="green" borderRadius="full">
    <TagLeftIcon as={IoGameController} boxSize="12px" />
    <TagLabel>{message}</TagLabel>
  </Tag>
);

export default FilterTag;
