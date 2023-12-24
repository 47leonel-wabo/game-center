import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGenresList from "../components/GameGenresList";
import GameHeading from "../components/GameHeading";
import GamePlatform from "../components/GamePlatform";
import GameSortSelector from "../components/GameSortSelector";
import GamesGrid from "../components/GamesGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` 
               "main" 
               "footer"`,
        lg: `
             "aside main" 
             "footer footer"`,
        xl: `"
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
      <Show above="lg">
        <GridItem area="aside">
          <GameGenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack justifyContent="space-between">
          <HStack marginX={3}>
            <GamePlatform />
            {/* {gameQuery.platform && (
              <FilterTag message={gameQuery.platform?.name} />
            )}
            {gameQuery.genre && <FilterTag message={gameQuery.genre?.name} />} */}
          </HStack>
          <Box marginX={4}>
            <GameSortSelector />
          </Box>
        </HStack>
        <GamesGrid />
      </GridItem>
      <GridItem area="footer" bg="#3e3e3e">
        Footer
      </GridItem>
    </Grid>
  );
};

export default HomePage;
