import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import FooterLargeWithNewsletter from '../components/utils/footer' 
import theme from '../components/utils/theme'

import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";


import { Analytics } from '@vercel/analytics/react';

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});


function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>

      <ChakraProvider theme={theme}>
        <WithSubnavigation  {...pageProps} />
        <Component {...pageProps} />
        <FooterLargeWithNewsletter />
        <Analytics />

      </ChakraProvider>      
    
    </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;