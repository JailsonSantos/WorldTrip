import { Grid, Text } from "@chakra-ui/react";
import { Infos } from "./Infos";

export function Content() {
  return (
    <Grid
      my={["8", "20"]}
      gap={[5, 10, 16, 20]}
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="black.500"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia,
        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Infos />
    </Grid>
  )
}