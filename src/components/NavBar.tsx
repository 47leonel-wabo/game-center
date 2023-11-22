import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/controller.png";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack p={4}>
      <Image src={logo} boxSize="32px" objectFit={"contain"} />
      <Heading as="h2" size="md" whiteSpace="nowrap">
        Game Hub
      </Heading>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
