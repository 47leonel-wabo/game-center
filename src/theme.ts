import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const appThemeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ appThemeConfig });

export default theme;
