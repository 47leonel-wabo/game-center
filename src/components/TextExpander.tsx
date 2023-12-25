import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}
const CHARACTER_LENGTH = 300;

const TextExpander = ({ text }: Props) => {
  const [expanded, setExpansion] = useState<boolean>(false);

  if (text.length > CHARACTER_LENGTH && !expanded) {
    return (
      <Text>
        {`${text.substring(0, CHARACTER_LENGTH)}...`}
        <Button
          colorScheme="gray"
          size="xs"
          marginStart={2}
          onClick={() => setExpansion(!expanded)}
        >
          Show more
        </Button>
      </Text>
    );
  }

  return (
    <Text>
      {text}
      <Button
        colorScheme="gray"
        size="xs"
        marginStart={2}
        onClick={() => setExpansion(false)}
      >
        Show less
      </Button>
    </Text>
  );
};

export default TextExpander;
