import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text
} from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../pages/continent/[slug]";

export function Infos({ continent }: ContinentProps) {
  return (
    <Flex
      align="center"
      justifyContent="space-between"
    >
      <Flex
        justify="center"
        direction="column"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontWeight="500"
          color="yellow.900"
          fontSize={["2xl", "5xl"]}
        >
          {continent.countries}
        </Heading>
        <Text
          color="dark.500"
          fontWeight="600"
          fontSize={["md", "xl"]}
        >
          países
        </Text>
      </Flex>

      <Flex
        justify="center"
        direction="column"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontWeight="500"
          color="yellow.900"
          fontSize={["2xl", "5xl"]}
        >
          {continent.languages}
        </Heading>
        <Text
          color="dark.500"
          fontWeight="600"
          fontSize={["md", "xl"]}
        >
          línguas
        </Text>
      </Flex>

      <Flex
        justify="center"
        direction="column"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontWeight="500"
          color="yellow.900"
          fontSize={["2xl", "5xl"]}
        >
          {continent.cities}
        </Heading>
        <Text
          color="dark.500"
          fontWeight="600"
          fontSize={["md", "xl"]}
        >
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  ml="1"
                  cursor="pointer"
                  color="black.500"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                  as={RiInformationLine}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="black.500" color="yellow.900">
              <PopoverArrow bg="black.500" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                {continent.cities_list}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}