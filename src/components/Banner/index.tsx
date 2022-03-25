import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/images/background.svg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        mx="auto"
        align="center"
        px={["4", "10", "15", "20", "36"]}
        justify={['center', 'space-between']}
      >
        <Box>

          <Heading
            fontWeight="500"
            color="light.500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontWeight="400"
            color="light.100"
            fontSize={["sm", "xl"]} mt="5"
            maxWidth={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a vigem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/images/airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  )
}