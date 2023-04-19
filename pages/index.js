import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'
import HeadImage from '../public/images/icon/africa.png'
import sanityClient from "@sanity/client";


const client = sanityClient({ 
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v2023-04-13",
  useCdn: false
  })


  export async function getStaticProps() {
    const landingPageContent = await client.fetch(`
    *[_type == "landingPage"]`);
    // *[_type == "landingPage"]`, { next: { revalidate: 1 } });

    // const posts = await client.fetch(`
    // *[_type == "post"]`);

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
