import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function City({ name, country, flag, image }) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={image} alt={`${name}, ${country}`} h="170px" w="100%" />
      <Flex
        p="6"
        bg="white"
        border="1px"
        borderTop="0"
        align="center"
        justify="space-between"
        borderColor="yellow.50"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{name}</Heading>
          <Text mt="3" fontSize="md" color="black.500" fontWeight="500">{country}</Text>
        </Flex>
        <Image src={flag} w="50px" h="50px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  )
}