import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack marginEnd={2}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? <FaMoon /> : <FiSun />}
    </HStack>
  );
};

export default ColorModeSwitch;
