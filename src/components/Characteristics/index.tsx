import { Grid, GridItem } from "@chakra-ui/react";
import { Characteristic } from "./Characteristic";

export function Characteristics() {
  return (
    <Grid
      mx="auto"
      width="100%"
      maxWidth="1160px"
      gap={[1, 5]}
      mt={["10", "32"]}
      alignContent="center"
      justifyContent="space-between"
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
    >
      <GridItem>
        <Characteristic icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Characteristic icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Characteristic icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Characteristic icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Characteristic icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}