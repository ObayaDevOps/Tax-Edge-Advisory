// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii
import { Box, Text, Button, Container } from '@chakra-ui/layout'

import Head from 'next/head'
import dynamic from 'next/dynamic'

const Web3WalletLoginComponentWithCustomLoading = dynamic(
  () => import('../../components/web3/web3WalletLogin'),
  // { loading: () => <Box> </Box> }
  { loading: () => {
      <Box minHeight="60vh"  minWidth ="100vw" bgColor="red" position="fixed">
    </Box>
  } }
)

export default function AboutThisNftPage() {
  return (
    <Box>
      <Head>
        <title>Web3 Wallet Login | Afropocene Studio Lab </title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
      </Head>
        <Web3WalletLoginComponentWithCustomLoading />
    </Box>


  )
}
