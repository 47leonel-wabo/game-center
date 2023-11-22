import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  title: string;
  platforms: ParentPlatform[];
}

const GamePlatform = ({ title, platforms }: Props) => (
  <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
      {title}
    </MenuButton>
    <MenuList>
      {platforms.map((platform) => (
        <MenuItem key={platform.id}>{platform.name}</MenuItem>
      ))}
    </MenuList>
  </Menu>
);

export default GamePlatform;
