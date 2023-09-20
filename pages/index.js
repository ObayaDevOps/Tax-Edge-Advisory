import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | Tax Edge Advisory</title>
        <meta name="description" content="Tax Edge Advisory Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/logo-black.svg"></link>
      </Head>

      <Box>
        <LandingPage />
      </Box>

    </div>
  )
}
