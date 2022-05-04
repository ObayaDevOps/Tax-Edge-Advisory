import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import FooterLargeWithNewsletter from '../components/utils/footer' 
import theme from '../components/utils/theme'


import { Provider, chain, createClient, defaultChains } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// API key for Ethereum node
// Two popular services are Alchemy (alchemy.com) and Infura (infura.io)
const alchemyId = process.env.ALCHEMY_ID

const chains = defaultChains
const defaultChain = chain.mainnet

// Set up connectors
const client = createClient({
  autoConnect: true,
  connectors({ chainId }) {
    const chain = chains.find((x) => x.id === chainId) ?? defaultChain
    const rpcUrl = chain.rpcUrls.alchemy
      ? `${chain.rpcUrls.alchemy}/${alchemyId}`
      : chain.rpcUrls.default
    return [
      new InjectedConnector(),
      new CoinbaseWalletConnector({
        options: {
          appName: 'wagmi',
          chainId: chain.id,
          jsonRpcUrl: rpcUrl,
        },
      }),
      new WalletConnectConnector({
        options: {
          qrcode: true,
          rpc: {
            [chain.id]: rpcUrl,
          },
        },
      }),
    ]
  },
})

function MyApp({ Component, pageProps }) {
  return (   
    <Provider client={client}>
  
    <ChakraProvider theme={theme}>

      <WithSubnavigation />
      <Component {...pageProps} />
      <FooterLargeWithNewsletter />

    </ChakraProvider>
    </Provider>

    )
}

export default MyApp
