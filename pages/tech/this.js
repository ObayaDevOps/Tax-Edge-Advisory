// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii
import { Box, Text, Button, Container } from '@chakra-ui/layout'

import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicAsciiTorusComponentWithCustomLoading = dynamic(
  () => import('../../components/asciiTorusNonDynamic'),
  // { loading: () => <Box> </Box> }
  { loading: () => {
      <Box minHeight="60vh"  minWidth ="100vw" bgColor="red" position="fixed">
    </Box>
  } }
)

export default function AsciiTorus() {
  return (
    <Box>
      <Head>
        <title>Ascii Torus: Interactive</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
      </Head>

      <Box>
        <DynamicAsciiTorusComponentWithCustomLoading />
      </Box>
    </Box>


  )
}
