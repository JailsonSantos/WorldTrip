import { Infos } from "./Infos";
import { Grid, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";

export function Content({ continent }: ContinentProps) {
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
        {continent.description}
      </Text>
      <Infos continent={continent} />
    </Grid>
  )
}