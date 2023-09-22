'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  useColorMode,
  ScaleFade
} from '@chakra-ui/react'

import NextLink from 'next/link'

import React, { useRef } from "react";
import { useInView } from "framer-motion";
  


//put this in a carousel
export default function blogPostWithImage() {
  const scaleFactor = 0.9;

  const { colorMode } = useColorMode()

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2)

  const ref3 = useRef(null)
  const isInView3 = useInView(ref3)

  const ref4 = useRef(null)
  const isInView4 = useInView(ref4)

  const ref5 = useRef(null)
  const isInView5 = useInView(ref5)

  return (
    
    <Box p={4}>

<ScaleFade initialScale={0.6}
    in={isInView1}>

      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}pt={{md:40}}     ref={ref1}
 >
      {colorMode === 'light' && (
        <Heading fontSize={{base: '7xl', md:'9xl'}} bgClip="text"
            bgGradient="linear(to-r, green.900, green.300)"
            fontWeight="extrabold">
              Our Work
        </Heading>)}

      {colorMode === 'dark' && (
        <Heading fontSize={{base: '7xl', md:'8xl'}} bgClip="text"
            bgGradient="linear(to-r, white, whiteAlpha.500)"
            fontWeight="extrabold">
              Our Work
        </Heading>)}


        <Text color={useColorModeValue('gray.600', 'green.200')}   fontSize={'2xl'} p={4}>
          Past Clients that we have been happy to work with
        </Text>
      </Stack>
      </ScaleFade>

    
    <Center>
      <VStack padding={{md:15}} spacing={12}>
      
      <ScaleFade initialScale={scaleFactor}
    in={isInView2}>

      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'green.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref2}
        >

        <Box  maxW={{md:'75vw'}} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.medopticsltd.com/'>
            My name Jeff
            </NextLink>

        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            Land Remediation
          </Text>
          <NextLink href='https://www.medopticsltd.com/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('green.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Client 1
            </Heading>
          </NextLink>

          <Text color={useColorModeValue('gray.500', 'white')}>
          A 'Top 100 Mid-Sized Companies in UK 2022' Winner. 
          </Text>
        </Stack>
      </Box>
      </ScaleFade>

      <ScaleFade initialScale={scaleFactor}
    in={isInView3}>
      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'green.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref3}

        >
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.afropocene.com/'>
            Heyo
        </NextLink>
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            
            Capital Allowance
          </Text>
          <NextLink href='https://www.afropocene.com/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('green.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Client 2 
            </Heading>
          </NextLink>
          <Text color={useColorModeValue('gray.500', 'white')}>
          Made client a profit of £150,000
          </Text>
        </Stack>
      </Box>
      </ScaleFade>

      <ScaleFade initialScale={scaleFactor}
    in={isInView4}>
      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'green.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref4}

        >
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='http://humble-beeing.com/'>
            Another one
        </NextLink>
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            color={useColorModeValue('green.500', 'white')}

            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            R&D Credits
          </Text>
          <NextLink href='http://humble-beeing.com/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('green.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Client 3
            </Heading>
          </NextLink>
          <Text color={useColorModeValue('gray.500', 'white')}>
              Made Savings of over $100,000
        </Text>
        </Stack>
      </Box>
      </ScaleFade>


      </VStack>
      </Center>


      </Box>
  )
}