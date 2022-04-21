import Head from 'next/head'
import Image from 'next/image'
import { Heading, Box } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import LandingPage from '../components/pageContent/landingPage'
import FooterLargeWithNewsletter from '../components/utils/footer'
import AsciiTorus from './tech/asciiTorus'



function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}



export default function Home() {
  return (
    <div >
      <Head>
        <title>Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="icon" href="../public/images/icon/uganda.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <Box>
        <LandingPage />
      </Box>

    </div>
  )
}
