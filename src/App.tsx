import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGenresList from "./components/GameGenresList";
import GameHeading from "./components/GameHeading";
import GamePlatform from "./components/GamePlatform";
import GameSortSelector from "./components/GameSortSelector";
import GamesGrid from "./components/GamesGrid";
import NavBar from "./components/NavBar";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GameGenresList
            onGenreSelected={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack justifyContent="space-between">
          <HStack marginX={3}>
            <GamePlatform
              onSelect={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            {/* {gameQuery.platform && (
              <FilterTag message={gameQuery.platform?.name} />
            )}
            {gameQuery.genre && <FilterTag message={gameQuery.genre?.name} />} */}
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
