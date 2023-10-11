import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import FooterLargeWithNewsletter from '../components/utils/footerNew' 
import theme from '../components/utils/theme'



function MyApp({ Component, pageProps }) {
  return (   
    <ChakraProvider theme={theme}>

      <WithSubnavigation />
      <Component {...pageProps} />
      <FooterLargeWithNewsletter />

    </ChakraProvider>
    )
}

export default MyApp
