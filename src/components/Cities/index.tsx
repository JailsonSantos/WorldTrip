import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades + 100</Heading>
      <Grid
        px={["30px", "0"]}
        alignItems="center"
        justifyContent="center"
        gap={["20px", "45px"]}
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      >
        <City />
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </>
  )
}