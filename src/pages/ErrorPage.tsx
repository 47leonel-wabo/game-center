import { Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { MdOutlineVideogameAsset } from "react-icons/md";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <VStack marginTop={16}>
        <MdOutlineVideogameAsset size={128} />
        <Heading as="h1" size="2xl" whiteSpace="nowrap">
          Ooops!
        </Heading>

        <Text fontSize="lg">
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : "Something wrong happened"}
        </Text>
      </VStack>
    </>
  );
};

export default ErrorPage;
