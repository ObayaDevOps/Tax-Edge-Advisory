import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar2'
import FooterLargeWithNewsletter from '../components/utils/footerNew' 
import theme from '../components/utils/theme'
import 'easymde/dist/easymde.min.css'




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
