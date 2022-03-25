import { Flex, Heading } from "@chakra-ui/react"

// Components
import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { Characteristics } from "../components/Characteristics"
import { Separator } from "../components/Separator"
import { Slider } from "../components/Slider"

export default function Home() {
  return (
    <Flex direction="column" >
      <Header />
      <Banner />
      <Characteristics />

      <Separator />

      <Heading
        mb={["5", "14"]}
        fontWeight="500"
        textAlign="center"
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br />Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
