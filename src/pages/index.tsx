import { Flex, Heading } from "@chakra-ui/react"

// Components
import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { Characteristics } from "../components/Characteristics"
import { Separator } from "../components/Separator"
import { Slider } from "../components/Slider"

import { GetStaticProps } from "next"
import { getPrismicClient } from "../services/prismic"
import Prismic from '@prismicio/client'

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({ continents }: ContinentProps) {
  return (
    <Flex direction="column" >
      <Header />
      <Banner continents={continents} />
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

      <Slider continents={continents} />
    </Flex>
  )
}

// Usando o Prismic
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")]
  )

  // Formatando o retorno dos dados vindos da API do prismic
  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url

    }
  })

  return {
    props: {
      continents
    },
    revalidate: 1800,
  }
}