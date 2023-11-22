import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGenresList from "./components/GameGenresList";
import GamePlatform from "./components/GamePlatform";
import GamesGrid from "./components/GamesGrid";
import NavBar from "./components/NavBar";
import { Genre } from "./services/genres-service";
import { ParentPlatform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] =
    useState<ParentPlatform | null>(null);

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
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
        xl: `300px 1fr`,
      }}
    >
      <GridItem area="header">
        <HStack justifyContent={"space-between"}>
          <NavBar />
          <ColorModeSwitch />
        </HStack>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GameGenresList onGenreSelected={setSelectedGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack marginX={3}>
          <GamePlatform onPlatformSelected={setSelectedPlatform} />
        </HStack>
        <GamesGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
      <GridItem area="footer" bg="#3e3e3e">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
