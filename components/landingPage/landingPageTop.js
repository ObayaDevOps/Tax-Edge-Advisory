'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Box,
  IconProps,
  useColorModeValue,
  ScaleFade,
  useBreakpointValue
} from '@chakra-ui/react'

import Lottie from "lottie-react";
import taxAnimation from "../utils/animation/animation_1.json"; //they like this one
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const TaxAnimation = () => {
  return <Lottie animationData={taxAnimation} />;
};



export default function CallToActionWithIllustration() {
  const scaleFactor = 0.9;

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  return (
<Box>
  <Blur
    position={'absolute'}
    top={'60vh'}
    left={'40vw'}
    style={{ filter: 'blur(80px)' }}
    />

  {/* <ScaleFade 
    initialScale={0.6}
    in={isInView1}
  > */}
    <Box pt={{md: 5}}  ref={ref1}>
    <Container 
      maxW={'85vw'} 
      rounded='3xl' 
      shadow='2xl'    
      background="rgba(240,255,244,0.55)"
    >
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 5 }}
        py={{ base: 20, md: 16 }}
        >
        <Heading
          fontSize={{ base: '3xl', sm: '7xl', md: '8xl' }}
          letterSpacing={'tight'}
          lineHeight={'110%'}

          bgClip="text"
          bgGradient="linear(to-r, blackAlpha.900, green.500)"
          fontWeight="extrabold"
          transition='all .65s ease' _hover={{ transform: 'scale(1.005)', filter: "brightness(110%)", }}
          >
          Tax affairs{' '}
          <Text as={'span'} color={'green.400'}
          bgClip="text"
          bgGradient="linear(to-r, green.600, green.500)"
          fontWeight="extrabold"
          transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(110%)", }}
          >
            made easy
          </Text>
        </Heading>
        <Text 
        color={useColorModeValue('green.900', 'gray.50')} maxW={'5xl'} 
        fontSize={{ base: 'xl', sm: '4xl', md: '2xl' }} 
        transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(140%)", }}
        >
        Tax Edge Advisory seeks to be a leading specialist tax consultancy firm with
        a focus on providing expert advice on UK tax incentives to businesses,
        accountants, and other professional advisers.
        </Text>


        <Stack spacing={{base: 8, md: 12}} direction={'row'} p={{md:6}}>
          <Button
            _hover={{ bg: 'green.300', textColor: 'green.700'  }}
            as="a"
            colorScheme="green"
            textColor={useColorModeValue('green.50', 'green.200')}
            alignItems="center"
            justifyContent="center"
            mb={{ base: 2, sm: 0 }}
            shadow={'xl'}
            size={'lg'}
            href='/tax/tax-calculator'
            >
            Calculate Tax Savings
          </Button>
{/* 
          <Button
            _hover={{ bg: 'whiteAlpha.500', textColor:'green.500'}}
            as="a"
            textColor={useColorModeValue('green.500', 'green.200')}
            alignItems="center"
            justifyContent="center"
            mb={{ base: 2, sm: 0 }}
            shadow={'xl'}
            size={'lg'}
            bg={'whiteAlpha.800'}


          >
            Learn more
          </Button> */}
        </Stack>
        {/* <Flex w={'full'}>
          <Illustration height={{ sm: '24rem', lg: '40rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex> */}

        <Flex maxH={'50vh'}>
          <TaxAnimation />
        </Flex>

      </Stack>
    </Container>
    </Box>
    {/* </ScaleFade> */}
    </Box>
  )
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '25vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      alignContent={'center'}
      height={useBreakpointValue({  lg: '65vh' })}
      viewBox="-30 0 928 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>

      <circle cx="11" cy="11" r="811" fill="#48BB78" />
      {/* <circle cx="230.5" cy="58.5" r="101.5" fill="#48BB78" /> */}
      {/* <circle cx="230.5" cy="58.5" r="101.5" fill="#48BB78" /> */}



      
      {/* <circle cx="244" cy="106" r="139" fill="#68D391" />
      <circle cy="291" r="139" fill="#68D391" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#68D391" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#68D391" />

      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#48BB78" />
      <circle cx="71" cy="61" r="111" fill="#48BB78" />
      <circle cx="244" cy="106" r="139" fill="#48BB78" /> */}

      {/* <circle cy="291" r="139" fill="#22543D" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#22543D" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#22543D" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#22543D" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#22543D" /> */}
    </Icon>
  );
};

