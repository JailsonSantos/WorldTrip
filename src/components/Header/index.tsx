import { Flex, Grid, Image, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/"

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "100px"]}
      bg="white.900"
      justify="center"
      align="center"
    >
      <Grid
        w="100%"
        h="100%"
        mx="auto"
        maxWidth="1160px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >

        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} ml="10px" justifySelf="start" />
            </a>
          </Link>
        )
        }

        <Image
          src="/images/logo.svg"
          w={["81px", "184px"]}
          alt='Um avião voando sobre o nome da marca World Trip'
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}