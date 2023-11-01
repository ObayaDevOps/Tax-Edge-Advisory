'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Tag,
  HStack,
  Button,
  Center,
  Wrap,
  Icon,
  SimpleGrid,
  WrapItem,
  SpaceProps,
  Flex,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import NextImage from 'next/image';
import illustration1  from '../../public/images/illustrations/illustration1.svg';
import scientistIllustration  from '../../public/images/illustrations/undraw_scientist_ft0o.svg';
import devIllustration  from '../../public/images/illustrations/undraw_version_control_re_mg66.svg';

import NextLink from 'next/link'
import Head from 'next/head'

import client from '../../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}



export async function getStaticProps(context) {
  const rndLandingPageContent = await client.fetch(`
  *[_type == "rndLandingPage"]`);

  return {
    props: {
      rndLandingPageContent,
    },
    revalidate: 10, //In seconds
  };
}



export default function ArticleList ({rndLandingPageContent}) {
  const pageContent  = rndLandingPageContent[0] || [];

  console.log(pageContent.box1FeaturesArray)
  console.log(pageContent.box1FeaturesTopHeading)


  return (

    <Box bg='blackAlpha.200' pt={6} pb={{base:12,md:20}}>
        <Head>
          <title>Research and Development Landing Page | Tax Edge Advisory</title>
          <link rel="icon" href="../public/images/icon/logo-black.svg" />

          <meta name="description" content="Tax Edge Advisory Webpage" />
        </Head>

      <Container 
        maxW={{base:'1xl',md:'85vw'}} 
        p={{base: 12, md: 24}} 
        minHeight={{md:'110vh'}}   
        rounded='3xl' 
        shadow='2xl'    
        background="rgba(240,255,244,0.65)"
      >
        <Center 
        axis='horizontal'
        py={{base:8, md: 10}}
        >
          <Heading
                as={'h1'}
                mb={{base: 2, md: 6}}
                fontSize={{ base: "4xl",md: "6xl", lg:"6xl",}}
                minHeight={'1vh'}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{base: "normal",md: "tight" }}
                color="green.900"
                textAlign='center'
                maxW='3xl'
          >
            <Text
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, green.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
            >
              {pageContent.headingLarge}
            </Text>
            </Heading>
      </Center>

        <SimpleGrid
          columns={{base: 1, lg:2}}
          marginTop={{ base: '1', sm: '5' }}
          // display="flex"
          // flexDirection={{ base: 'column', sm: 'row' }}
          // justifyContent="space-between"
          mb={10}
          >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
              >
              <Box>
                <Box height={{ sm: '24rem', lg: '50vh' }} mt={{ base: 12, sm: 16, md:0 }} mb={{lg: 5}}>
                  <NextImage src={urlFor(pageContent.pageHeadingImage).url()}  width={(3531/5)} height={(1962/5)}  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop={{base:4,}}>
              <Text 
                fontSize={{ base: "2xl",md: "3xl", lg:"3xl",}}
                w="full"
                bgClip="text"
                bgGradient='linear(to-r, blackAlpha.800, green.500)'
                fontWeight="extrabold"
                transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}

              >
                {pageContent.headingSmall}
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
                {pageContent.introductionParagraph1}
              </Text>
              <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
                {pageContent.introductionParagraph2}
            </Text>
          </Box>
        </SimpleGrid>

        {/* <Divider marginTop="5" /> */}
          <SimpleGrid columns={{base:1, lg:2}} spacing={10}>
            <Box w="100%" 
                                   borderWidth='1px' borderRadius='lg' overflow='hidden'
                                  padding={{base:6, md:12, lg: 16}}
                                  background="white"
                                  border='30px'
                                  shadow={'xl'}
            
            >
              <Box borderRadius="lg" overflow="hidden" pt={{base:6}}>
                <Box textDecoration="none" _hover={{ textDecoration: 'none' }} maxH={{lg:'25vh'}}>
                    <NextLink href="/research-and-dev/tax-credits" passHref>
                      <NextImage src={urlFor(pageContent.box1TopImage).url()}  width={(3531/5)} height={(1962/5)}  />
                  </NextLink>
                </Box>
              </Box>

              <Heading as="h2" marginTop="10" mb={8}>
                <NextLink href='/research-and-dev/tax-credits' passHref >
                  <Text
                  fontSize={{ base: "2xl",md: "3xl", lg:"3xl",}}
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, green.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  >
                   {pageContent.box1TopHeading} 
                  </Text>
                </NextLink>
                
              </Heading>

              <Heading fontSize="xl" marginTop={{base: 6, md:2}}>
                  <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  {pageContent.box1ParagraphHeading1}
                  </Text>
              </Heading>
              <Text as="p" fontSize="md" marginTop={{base:4,md:2}}>
                {pageContent.box1ParagraphText1}
              </Text>

              <Heading fontSize="xl" marginTop={8}>
                  <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {pageContent.box1ParagraphHeading2}
                  </Text>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                {pageContent.box1ParagraphText2}
              </Text>
            
              <Heading fontSize="xl" py={6}>
                  <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {pageContent.box1FeaturesTopHeading}
                  </Text>
              </Heading>

              <Container maxW={{md: '85vw'}} mt={2} >
                <SimpleGrid columns={{ base: 1 }} spacing={8}>
                  {pageContent.box1FeaturesArray.map((feature) => (
                      <Box
                      maxW='md' borderWidth='1px' borderRadius='xl' overflow='hidden'
                      padding={4}

                      bgColor="gray.100"
                      // opacity={0.15}
                      // background="rgba(192,192,192,0.15)"
                      background="white"
                      // border='30px'
                      shadow={'lg'}
                      key={feature.id}
                      >

                      <HStack  align={'top'} >
                        {/* <Box color={'green.400'} px={2} >
                          <Icon as={CheckIcon} />
                        </Box> */}
                        <VStack align={'start'}>
                          <Text color={'black'} fontWeight={800} fontSize={'md'}>{feature.featureTitle}</Text>
                          <Text color={'black'}
                          fontSize={'md'}>{feature.featureText}</Text>
                        </VStack>
                      </HStack>
                      </Box>
                    ))}
                </SimpleGrid>
              </Container>  

              <Box my={8}>
                <Text fontStyle='italic'>
                  {pageContent.box1BottomItalicParagraphText}
                </Text>

              </Box>

              <Box>
                <NextLink href="/research-and-dev/tax-credits">
                    <Button
                    as="a"
                    colorScheme="green"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    shadow={'lg'}
                    textColor={'white'}
                    

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
                    whiteSpace='normal'
                    >
                    More about R&D Tax Credits

                    </Button>
                </NextLink>
              </Box>  



            </Box>


            <Box w="100%" 
                                   borderWidth='1px' borderRadius='lg' overflow='hidden'
                                   padding={{base:6, md:12, lg: 16}}
                                   background="white"
                                  border='30px'
                                  shadow={'xl'}
            
            >
              <Box borderRadius="lg" overflow="hidden">
                <Box textDecoration="none" _hover={{ textDecoration: 'none' }} maxH={'25vh'}>
                    <NextLink href="/research-and-dev/patent-box" passHref>
                      <NextImage src={urlFor(pageContent.box2TopImage).url()}  width={(3531/5)} height={(1962/5)}  />
                  </NextLink>
                </Box>
              </Box>

              <Heading as="h2" marginTop="10" mb={8}>
              <NextLink href='/research-and-dev/patent-box' passHref >
                  <Text
                    fontSize={{ base: "2xl",md: "3xl", lg:"3xl",}}
                    w="full"
                    bgClip="text"
                    bgGradient='linear(to-r, blackAlpha.800, green.500)'
                    fontWeight="extrabold"
                    transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}

                  >
                    {pageContent.box2TopHeading}
                  </Text>
                </NextLink>

              </Heading>

              <Heading fontSize="xl" marginTop={{md:2}}>
                  <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {pageContent.box2ParagraphHeading1}
                  </Text>
              </Heading>
              <Text as="p" fontSize="md" my={{base:4,md:2}}>
                {pageContent.box2ParagraphText1}
              </Text>

              <Heading fontSize="xl" marginTop={{md:10}}>
                  <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {pageContent.box2ParagraphHeading2}
                  </Text>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                {pageContent.box2ParagraphText2}
              </Text>           
              <Heading fontSize="xl" py={6} mt={{lg:8}}>
                  <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {pageContent.box2FeaturesTopHeading}
                  
                  </Text>
              </Heading>

              <Container maxW={{md: '85vw'}} mt={2} >
                <SimpleGrid columns={{ base: 1 }} spacing={8}>
                  {pageContent.box2FeaturesArray.map((feature) => (
                      <Box
                      maxW='md' borderWidth='1px' borderRadius='xl' overflow='hidden'
                      padding={4}

                      bgColor="gray.100"
                      // opacity={0.15}
                      // background="rgba(192,192,192,0.15)"
                      background="white"
                      // border='30px'
                      shadow={'lg'}
                      key={feature.id}
                      >

                      <HStack  align={'top'} >
                        {/* <Box color={'green.400'} px={2} >
                          <Icon as={CheckIcon} />
                        </Box> */}
                        <VStack align={'start'}>
                          <Text color={'black'} fontWeight={800} fontSize={'md'}>{feature.featureTitle}</Text>
                          <Text color={'black'}
                          fontSize={'md'}>{feature.featureText}</Text>
                        </VStack>
                      </HStack>
                      </Box>
                    ))}
                </SimpleGrid>
              </Container>  

              <Box my={8}>
                <Text fontStyle='italic'>
                {pageContent.box2BottomItalicParagraphText}
                </Text>

              </Box>

              <Box >
                <NextLink href="/research-and-dev/patent-box">
                    <Button
                    as="a"
                    colorScheme="green"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    shadow={'lg'}
                    textColor={'white'}


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
                    whiteSpace='normal'
                    >
                    More about Patent Box 

                    </Button>
                </NextLink>
              </Box>  

            </Box>
            </SimpleGrid>




        <Box pt={{base: 12,md:20}}>
          <Text             
          bgClip="text"
              bgGradient='linear(to-r, blackAlpha.800, green.500)'
              fontWeight="extrabold"
              fontSize={{ base: "4xl",md: "4xl",}}
              pb={2}>
                {pageContent.contactUsHeading}
          </Text>
          <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={6}>
            {pageContent.contactUsParagraph1}
          </Text>
          <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={6}>
            {pageContent.contactUsParagraph2}
           </Text>
          <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={6}>
          {pageContent.contactUsParagraph3}
          </Text>
        </Box>

        <NextLink href="/info/contact-enquiry">
                  <Button
                  as="a"
                  colorScheme="green"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow={'lg'}
                  textColor={'white'}


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
      </Container>

    </Box>
  )
}



