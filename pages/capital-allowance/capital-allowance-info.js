import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Center,
  HStack,
  VStack,
  Button,
  chakra,
  Spacer,
  Icon,
  useColorModeValue,
  UnorderedList,
  List,
  ListItem
} from '@chakra-ui/react';
import { CheckIcon, ChatIcon, ArrowRightIcon } from '@chakra-ui/icons'
// import { ReactComponent as RndSvgIllustration } from '../../public/images/illustrations/undraw_maker_launch_re_rq81.svg';

import rndSvgIllustration  from '../../public/images/illustrations/undraw_maker_launch_re_rq81.svg';
import constructionIllustration  from '../../public/images/illustrations/undraw_under_construction_-46-pa.svg';
import filesIllustration  from '../../public/images/illustrations/undraw_file_analysis_8k9b.svg';
import segmentIllustration  from '../../public/images/illustrations/undraw_segment_analysis_re_ocsl.svg';
import timeIllustration  from '../../public/images/illustrations/undraw_timeline_re_aw6g.svg';
import calendarIllustration  from '../../public/images/illustrations/undraw_online_calendar_re_wk3t.svg';
import flatsIllustration  from '../../public/images/illustrations/undraw_agreement_re_d4dv.svg';
import environmentsIllustration  from '../../public/images/illustrations/undraw_environment_iaus.svg';
import negotiateIllustration  from '../../public/images/illustrations/undraw_interview_re_e5jn.svg';


import NextImage from 'next/image';

import Head from 'next/head';
import NextLink from 'next/link'

import client from '../../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}



export async function getStaticProps(context) {
  const capitalAllowancePageContent = await client.fetch(`
  *[_type == "capitalAllowancePage"]`);

  return {
    props: {
      capitalAllowancePageContent,
    },
    revalidate: 10, //In seconds
  };
}



export default function CapitalAllowancePage({capitalAllowancePageContent}) {
  const pageContent  = capitalAllowancePageContent[0] || [];

  console.log(pageContent.subSection1Array1)

  return (
    <Box bg="blackAlpha.200" pt={8} pb={12}>
        <Head>
          <title>Capital Allowances | Tax Edge Advisory</title>
          <meta name="description" content="Tax Edge Advisory Webpage" />
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
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 0 }}
        >                    
          <Flex
            textAlign={'center'}
            pt={8}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}
            >

          <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'} pb={{base:12, md:0}}>
            <chakra.h3
              fontWeight={'bold'}
              fontSize={20}
              textTransform={'uppercase'}
              color={'green.400'}>
              {pageContent.headingTopSmall}
            </chakra.h3>
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
                  {pageContent.headingMiddleLarge}
                </Text>
              </Heading>
            <chakra.h2
              margin={'auto'}
              width={'70%'}
              fontWeight={'medium'}
              fontSize={'lg'}
              color={useColorModeValue('gray.500', 'gray.400')}
              >
                {pageContent.headingBottomSmall}
            </chakra.h2>
          </Box>
          </Flex>

        <SimpleGrid columns={{ base: 1, md: 1, lg:1 }} spacing={10} pb={{base: 2, md:4}}>
          <NextImage src={urlFor(pageContent.pageImage).url()}  width={700} height={700}  />
        </SimpleGrid>

        </Stack>
      <Box pb={8}>
        <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "4xl",md: "5xl",}}
          pb={4}
        >
          {pageContent.introductionHeading}
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={2}>
          {pageContent.introductionParagraph1}
         </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={{base:4, md:4}}>
          {pageContent.introductionParagraph2}
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={16}>
          {pageContent.introductionParagraph3}
        </Text>
      </Box>

      <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "3xl",md: "5xl",}}
          pb={{base:10,lg:10}}
      >
        {pageContent.mainSectionHeading1}
      </Text>

      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
          {pageContent.subSection1Heading1}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image1).url()}  width={400} height={400}  />
          </Center>

          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array1.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>
     
      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
          {pageContent.subSection1Heading2}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image2).url()}  width={400} height={400}  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array2.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>

      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
          {pageContent.subSection1Heading3}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image3).url()}  width={400} height={400}  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array3.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>

      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
          {pageContent.subSection1Heading4}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image4).url()}  width={400} height={400}  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array4.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>

      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
          {pageContent.subSection1Heading5}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image5).url()}  width={400} height={400}  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array5.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>

      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
        {pageContent.subSection1Heading6}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image6).url()}  width={400} height={400}  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array6.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>

      <Box
         borderWidth='1px' borderRadius='xl' 
        //  overflow='hidden'
        padding={8}
        // paddingRight={12}
        background="whiteAlpha.700"
        mb={{base: 16,md:20}}
      >
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            p={{base: 4, lg:4}}
        >
          {pageContent.subSection1Heading7}
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <NextImage src={urlFor(pageContent.subSection1Image7).url()}  width={400} height={400}  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {pageContent.subSection1Array7.map((feature) => (
                  <Box
                  maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                  padding={3}
                  paddingRight={{base:8,md:12}}
                  // bgColor="gray.100"
                  background="whiteAlpha.800"
                  // border='30px'
                  // shadow={'md'}
                  key={feature.id}
                  >
                  <HStack  align={'flex-start'} >
                    
                    <Box color={'green.400'} px={2} >
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                      <Text color={'black'}
                      fontSize={'lg'}>{feature}</Text>
                    </VStack>
                  </HStack>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        </Box>
        
      </Box>



      <Box pb={20}>
        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "4xl",md: "5xl",}}
            pt={12}
            pb={8}
        >
          {pageContent.mainSectionHeading2}
        </Text>

        <Box  mt={2} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {pageContent.subSection2Array.map((feature) => (
              <Box
              maxW='2xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
              padding={8}
              // py={8}
              paddingRight={12}
              // paddingLeft={2}
              bgColor="gray.100"
              // opacity={0.15}
              // background="rgba(192,192,192,0.15)"
              background="white"
              border='30px'
              shadow={'md'}
              key={feature.id}

              >

              <HStack  align={'flex-start'} >
                <Box color={'green.400'} px={7} >
                  <Icon as={ArrowRightIcon} />
                </Box>
                <VStack align={'start'}>
                  {/* <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text> */}
                  <Text color={'black'}
                  fontSize={'lg'}>{feature}</Text>
                </VStack>
              </HStack>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
                
      </Box>


      <Box py={12}>
        <Text             
        bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "4xl",md: "4xl",}}
            pb={2}>
        {pageContent.contactUsHeading}
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={6}>
          {pageContent.contactUsParagraph}
        </Text>
        <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
            pb={12}
          >
            

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
      </Box>
      </Container>
      </Container>
    </Box>
  );
}