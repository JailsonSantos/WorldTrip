import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Cities } from "../../components/Cities";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  )
}