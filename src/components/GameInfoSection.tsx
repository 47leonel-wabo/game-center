import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const GameInfoSection = ({ term, children }: Props) => {
  return (
    <Box marginY={4}>
      <Heading as="dt" fontSize={"md"} color="gray.600" fontWeight="bold">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default GameInfoSection;
