import { City } from "./City";
import { Grid, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";

export function Cities({ continent }: ContinentProps) {
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
        {continent.cities100.map(city => (
          <City
            key={city.city}
            name={city.city}
            country={city.country}
            flag={city.flag}
            image={city.thumbnail}
          />

        ))}
      </Grid>
    </>
  )
}