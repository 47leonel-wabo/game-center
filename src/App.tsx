import { Box, Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGenresList from "./components/GameGenresList";
import GamePlatform from "./components/GamePlatform";
import GamesGrid from "./components/GamesGrid";
import NavBar from "./components/NavBar";
import { Genre } from "./services/genres-service";
import { ParentPlatform } from "./hooks/usePlatforms";
import FilterTag from "./components/FilterTag";
import GameSortSelector from "./components/GameSortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GameGenresList
            onGenreSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack justifyContent="space-between">
          <HStack marginX={3}>
            <GamePlatform
              onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            {gameQuery.platform && (
              <FilterTag message={gameQuery.platform?.name} />
            )}
            {gameQuery.genre && <FilterTag message={gameQuery.genre?.name} />}
          </HStack>
          <Box marginX={4}>
            <GameSortSelector
              onSelect={(sortCriteria) =>
                setGameQuery({ ...gameQuery, sortOrder: sortCriteria.value })
              }
            />
          </Box>
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
      <GridItem area="footer" bg="#3e3e3e">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
