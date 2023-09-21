import Head from 'next/head'
import {  Box, Icon, useColorModeValue } from '@chakra-ui/react'
import LandingPage1 from '../components/landingPage/landingPage1'
import LandingPage2 from '../components/landingPage/landingPage2'
import LandingPage3 from '../components/landingPage/landingPage3'


import Features1 from '../components/features/features1'
import Features2 from '../components/features/features2'
import Features3 from '../components/features/features3'




import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | Tax Edge Advisory</title>
        <meta name="description" content="Tax Edge Advisory Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/logo-black.svg"></link>
      </Head>

      <Box bg={'blackAlpha.50'}>
        {/* Landing Page */}
        <LandingPage3 />


        {/* Features */}
        <Features3 />

        
      </Box>

    </div>
  )
}
