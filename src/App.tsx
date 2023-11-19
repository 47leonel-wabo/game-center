import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header" "aside main" "footer footer"`,
      }}
      gap={1}
    >
      <GridItem area="header" bg="red">
        Header
      </GridItem>
      <GridItem area="header">Header</GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
      <GridItem area="footer" bg="#3e3e3e">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
