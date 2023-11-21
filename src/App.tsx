import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GamesGrid from "./components/GamesGrid";
import GameGenresList from "./components/GameGenresList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" 
               "main" 
               "footer"`,
        lg: `"header header" 
             "aside main" 
             "footer footer"`,
        xl: `"header header header" 
             "aside main main" 
             "footer footer footer"`,
      }}
      gap={1}
    >
      <GridItem area="header">
        <HStack justifyContent={"space-between"}>
          <NavBar />
          <ColorModeSwitch />
        </HStack>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GameGenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
      <GridItem area="footer" bg="#3e3e3e">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
