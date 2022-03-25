import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
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
          50
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
          60
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
          50
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
                París, Europa, Canadá, Londres, Itália, outros...
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}