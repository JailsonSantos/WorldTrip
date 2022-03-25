import { Flex } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";

import { RichText } from "prismic-dom";
import Prismic from '@prismicio/client';
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import { Loading } from "../../components/Loading";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[]
  }
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner continent={continent} />
      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  )
}

// Sempre que for fazer um staticProps, antes precisa fazer um staticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const continents = await prismic.query(
    [Prismic.Predicates.at("document.type", 'contiente')]
  )

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid
      }
    }
  })

  return {
    paths,
    fallback: true // O True, faz a busca na hora a rota e completar a rota SSR
  }
}

// Buscando dos dados pelo slug
export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('continent', String(slug), {})

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: response.data.cities_list,
    cities100: response.data.cities100.map(city => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag: city.flag.url,
      }
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800,
  }
}