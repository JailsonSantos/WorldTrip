import { Flex, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";

export function ContinentBanner({ continent }: ContinentProps) {

  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`url('${continent.banner_image}')`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left",]}
        color="light.500"
        fontSize={["1.75rem", "5xl"]}
        fontWeight="500">
        {continent.title}
      </Heading>
    </Flex>
  )
}