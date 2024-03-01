//this will be the template page for all exhibitions

//Link: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
//Link: How to get images : https://www.sanity.io/docs/how-queries-work#584ed2426ff5

import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    VStack,
    Button,
    Heading,
    Icon,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    Image,
    List,
    ListItem,
    Link
  } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'

  
import client from '../../sanityClient'
import groq from 'groq'

import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'


import ImageSlider from '../../components/utils/carousel/imageSlider'


export default function TermsAndConditionsPage({termsAndConditions}) {
    const termsAndConditionsPage  = termsAndConditions[0] || [];


    return (
      <Box bg="blackAlpha.200" pt={8} pb={12}>
      <Head>
        <title>{termsAndConditionsPage.termsAndConditionsHeading}</title>
        <meta name="description" content="Tax Edge Advisory Webpage"  />
        <link rel="shortcut icon" href="../../public/images/icon/logo-black.svg"></link>
      </Head>

      <Container 
        maxW={{base:'1xl',md:'85vw'}} 
        py={12} 
        minHeight={{md:'110Fvh'}}   
        rounded='3xl' 
        shadow='2xl'    
        background="rgba(240,255,244,0.65)"
      >
      <Container maxW={{base:'1xl',md:'75vw'}} >
        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 0, md: 5, lg:8 }}>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>

            <Heading
              as={'h1'}
                mb={{base: 2, md: 6}}
                fontSize={{ base: "5xl",md: "6xl", lg:"7xl",}}
                minHeight={'1vh'}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{base: "normal",md: "tight" }}
                color="green.900"
                textAlign='center'
              >
                <Text
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, green.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  pt={8}
                  pb={6}
                >
                {termsAndConditionsPage.termsAndConditionsHeading}
                </Text>
              </Heading>

              <Text
                color={useColorModeValue('gray.600', 'gray.400')}
                fontWeight={300}
                fontSize={'xl'}>
                {termsAndConditionsPage.subTitle}
              </Text>
              <Box py={4}>
                <Text
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontWeight={300}
                  fontSize={'md'}>
                  Last Updated: {termsAndConditionsPage.termsAndConditionsDate}
                </Text>
              </Box>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    
                </Text>
                <Text fontSize={'lg'}>
                {termsAndConditionsPage.termsAndConditionsText}
                </Text>
              </VStack>

              <NextLink href="/info/contact-enquiry">
                  <Button
                  as="a"
                  colorScheme="green"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow={'lg'}
                  textColor={ 'white'}


                  w={{
                      base: "full",
                      sm: "auto",
                  }}
                  mb={{
                      base: 2,
                      sm: 0,
                  }}
                  size="lg"
                  cursor="pointer"
                  fontFamily="Helvetica"

                  >
                  Get in Contact
                  <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                      <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                      />
                  </Icon>
                  </Button>
                </NextLink>

            </Stack>
  
          </Stack>
        </SimpleGrid>
        </Container>
        </Container>
      </Box>
    )
}






export async function getStaticProps(context) {
    const termsAndConditions = await client.fetch(`
    *[_type == "termsAndConditionsPage"]`);
  
    console.log("HEEEEER")
    console.log(termsAndConditions)


    return {
      props: {
        termsAndConditions,
      },
      revalidate: 10, //In seconds
    };
  }
  


