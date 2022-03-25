import { Flex, Text, Image, Icon } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'


import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface CharacteristicProps {
  icon: string;
  text: string;
}

export function Characteristic({ icon, text }: CharacteristicProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ?
        <Image src={`/icons/${icon}.svg`} w="85px" mb="6" />
        : <Icon as={RiCheckboxBlankCircleFill} fontSize="16" color="yellow.900" mr="5px" />}
      <Text fontWeight="500" color="dark.500" fontSize={["md", "xl", "2xl"]}>{text}</Text>
      <Text></Text>
    </Flex>
  )
}