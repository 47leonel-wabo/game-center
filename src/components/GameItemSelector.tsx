import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

type Props<T> = {
  data?: T[];
  title: string;
  onSelect: (value: T) => void;
};

const GameItemSelector = <T extends { id: number; name: string }>({
  title,
  data,
  onSelect,
}: Props<T>) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {title}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameItemSelector;
