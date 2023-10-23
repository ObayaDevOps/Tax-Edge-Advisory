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
  {/* <Blur
    position={'absolute'}
    top={'60vh'}
    left={'40vw'}
    style={{ filter: 'blur(80px)' }}
    /> */}

    <Box pt={{base: 8, md: 5}}  ref={ref1}>
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
        <Container maxW={{base: '2xl', md:'3xl',lg:'5xl'}}  >
        <Heading
          fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg:'7xl' }}
          letterSpacing={'tight'}
          lineHeight={'110%'}
          
          bgClip="text"
          bgGradient="linear(to-r, blackAlpha.900, green.500)"
          fontWeight="extrabold"
          transition='all .65s ease'
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
        </Container>
        <Container maxW={{base: 'xl', md:'3xl',lg:'5xl'}}  >
            <Text 
            color={useColorModeValue('green.900', 'gray.50')} 
            fontSize={{ base: 'lg', sm: '4xl', md: 'xl', lg:'xl' }} 
            transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(140%)", }}
            >
            Tax Edge Advisory seeks to be a leading specialist tax consultancy firm with
            a focus on providing expert advice on UK tax incentives to businesses,
            accountants, and other professional advisers.
            </Text>
        </Container>


        <Stack spacing={{base: 8, md: 12}} direction={{base:'column',md:'row'}} p={{md:6}}>
          <Button
            _hover={{ bg: 'green.300', textColor: 'green.700'  }}
            as="a"
            colorScheme="green"
            textColor={useColorModeValue('green.50', 'green.200')}
            alignItems="center"
            justifyContent="center"
            mb={{ base: 0, sm: 0 }}
            shadow={'xl'}
            size={'lg'}
            href='/tax/tax-calculator'
            >
            Calculate Tax Savings
            <Icon boxSize={4} ml={4} viewBox="0 0 20 20" fill="currentColor">
                      <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                      />
                  </Icon>
          </Button>

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
            href='/info/contact-enquiry'
          >
            Get in Contact
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </Icon>
          </Button>
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

