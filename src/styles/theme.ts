import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: {
      "900": "#000000",
      "500": "#47585B",
      "100": "#999999",
      "50": "RGBA(153, 153, 153,.5)",
    },
    white: {
      "900": "#FFFFFF",
    },
    light: {
      "500": "#F5F8FA",
      "100": "#DADADA",
    },
    yellow: {
      "900": "#FFBA08",
      "50": "RGBA(255,186,8,.5)",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.500',
        color: 'black.500',
      },
    }
  }
})