import { Heading, Box, Container, VStack, SimpleGrid, Center, Button, AspectRatio } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import LandingPageSplitWithImage from '../landingPageSections/feature'
import acunye from '../../public/images/visting-artists/acunye/Afropocene-Studio-BTS60.jpg'

const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )


export default function LandingPage() {


  return (
    <Box>

    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 18, md: 24, lg:5 }}
    >

      {/* backgroundImage={'../../../images/visting-artists/acunye/Afropocene-Studio-Acunye-darkened.jpg'}
      recursiveperlinnoise2.png */}
        <Box minHeight='100vh'  bgPosition="center"  backgroundImage={'../../../images/backgrounds/recursiveLarge.png'}
 >
            <Center p={{sm:1 , md:10}} >
                <Heading
                 as='h1'
                 size='4xl'
                //  fontSize = '6xl'
                textAlign="center"
                //  sx={{
                //   background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
                //   WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent"
                // }}
                color="white"
                pt={{base: 10, md: 55}}
                pb={{base: 5}}
                 >
                   Afropocene StudioLab
                </Heading>
            </Center>

            {/* Scrolling Text */}
            <Container maxW='md' centerContent     zIndex={1}
>
                <DynamicTypeWriterWithNoSSR/>
            </Container>

        </Box>

      <Center p={{sm:1 , md:10}} flex='1'>
        <Heading
          as='h1'
          size='4xl'
          sx={{
            background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          paddingBottom='1em'
          >
            What We Do
          </Heading>
      </Center>

        <LandingPageSplitWithImage />

      </SimpleGrid>
      </Box>
  )
}
