import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

//SwiperCore.use([Navigation, Pagination, Autoplay])

export function Slider() {
  return (
    <Flex
      w="100%"
      maxWidth="1160px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        style={{ width: "100%", flex: 1 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/continent1.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100">Europa</Heading>
                <Text
                  fontWeight="500"
                  color="light.500"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/continent2.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100">Italia</Heading>
                <Text
                  fontWeight="500"
                  color="light.500"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  Um paraíso cultural</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/continent3.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100">Roma</Heading>
                <Text
                  fontWeight="500"
                  color="light.500"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  Monumentais históricos e belíssimos</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

      </Swiper>

    </Flex>
  )
}