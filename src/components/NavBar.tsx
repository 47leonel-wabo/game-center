import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/controller.png";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack p={4}>
      <Image src={logo} boxSize="32px" objectFit={"contain"} />
      <Heading as="h2" size="md" whiteSpace="nowrap">
        Game Hub
      </Heading>
      <SearchInput onSearch={(keyWord) => console.log("Search on", keyWord)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
