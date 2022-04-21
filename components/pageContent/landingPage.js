import { Heading, Box, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import LandingPageSplitWithImage from '../landingPageSections/feature'

const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )

const WhatWeDoContent = () => (
  <Box>
  <SplitWithImage />
  </Box>
)

export default function LandingPage() {
  return (
      <VStack>
        <Box minHeight='100vh'>
            <Box p={10} >
                <Heading
                 as='h1'
                 size='4xl'
                 sx={{
                  background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                 >
                   Afropocene StudioLab
                </Heading>
            </Box>

            {/* Scrolling Text */}
            <Container maxW='md' centerContent>
                <DynamicTypeWriterWithNoSSR/>
            </Container>

        </Box>

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
        
        <LandingPageSplitWithImage />

      </VStack>
  )
}
