import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GameGenreSkeleton = () => {
  return (
    <Stack direction="column">
      {skeleton.map((item) => (
        <Skeleton key={item} height="20px" />
      ))}
    </Stack>
  );
};

export default GameGenreSkeleton;
