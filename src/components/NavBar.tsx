import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/controller.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p={4}>
      <Image src={logo} boxSize="32px" objectFit={"contain"} />
      <Heading as="h2" size="md" whiteSpace="nowrap">
        Game Hub
      </Heading>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
