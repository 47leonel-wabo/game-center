import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import usePlatforms, { ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  onPlatformSelected: (platform: ParentPlatform) => void;
}

const GamePlatform = ({ onPlatformSelected }: Props) => {
  const { data: platforms, error: platformsError } = usePlatforms();

  if (platformsError) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelected(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GamePlatform;
