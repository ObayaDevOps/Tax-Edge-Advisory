import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'
import HeadImage from '../public/images/icon/africa.png'

import client from '../sanityClient'

  export async function getStaticProps() {
    const landingPageContent = await client.fetch(`
    *[_type == "landingPage"]`);

    return {
      props: {
        landingPageContent,
      },
      revalidate: 10, //In seconds
    };
  }
  


export default function Home(props) {
  return (
    <div >
      <Head>
        <title>Home | Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

      <Box>
        <LandingPage pageContent={props.landingPageContent} />
      </Box>

    </div>
  )
}
