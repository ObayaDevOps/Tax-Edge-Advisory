import Head from 'next/head'
import {  Box } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
      </Head>

      <Box>
        <LandingPage />
      </Box>

    </div>
  )
}
