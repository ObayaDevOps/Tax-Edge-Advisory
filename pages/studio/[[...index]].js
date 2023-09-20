import Head from "next/head";
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import config from '../../sanity.config';
import {
    Box
  } from '@chakra-ui/react';

export default function Index() {
    return (
        <Box minHeight={'120vh'} position="fixed" top="0" minWidth={'100vw'} zIndex={9999}>
        <Head>
            <title>Editor Studio| Afropocene StudioLab</title>
            <meta name="description" content="Afropocene StudioLab Webpage" />
            <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>

            <NextStudioHead />
        </Head>
            <NextStudio config={config} />
        </Box>
    )
}

