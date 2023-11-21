import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={8} overflow={"hidden"}>
      <CardHeader>
        <Skeleton height={20} />
      </CardHeader>
      <CardBody>
        <SkeletonText noOfLines={3} spacing={2} skeletonHeight={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
