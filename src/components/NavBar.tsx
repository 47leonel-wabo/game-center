import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/controller.png";

const NavBar = () => {
  return (
    <HStack p={4}>
      <Image src={logo} boxSize="32px" objectFit={"contain"} />
      <Heading as="h2" size="md">
        Game Hub
      </Heading>
    </HStack>
  );
};

export default NavBar;
