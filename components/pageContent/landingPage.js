import { Heading, Box, Container, VStack, SimpleGrid, Center } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import LandingPageSplitWithImage from '../landingPageSections/feature'

const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )


export default function LandingPage() {
  return (
    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 18, md: 24, lg:5 }}>        
        <Box minHeight='100vh'>
            <Center p={{sm:1 , md:10}} >
                <Heading
                 as='h1'
                 size='3xl'
                //  fontSize = '6xl'
                textAlign="center"
                 sx={{
                  background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                 >
                   Afropocene StudioLab
                </Heading>
            </Center>

            {/* Scrolling Text */}
            <Container maxW='md' centerContent>
                <DynamicTypeWriterWithNoSSR/>
            </Container>
        </Box>

      <Center p={{sm:1 , md:10}}>
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
  )
}
