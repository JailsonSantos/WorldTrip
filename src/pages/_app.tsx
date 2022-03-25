import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import NextNProgress from 'nextjs-progressbar';
import { ChakraProvider } from '@chakra-ui/react'

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Styles com sass
import '../styles/slider.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
