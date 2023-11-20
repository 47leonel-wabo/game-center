import { HStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/controller_logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" objectFit={"fill"} />
      <Heading as="h2" size="md">
        Game Store
      </Heading>
    </HStack>
  );
};

export default NavBar;
