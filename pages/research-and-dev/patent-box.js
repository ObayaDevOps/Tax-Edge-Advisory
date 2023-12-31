import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Button,
  chakra,
  Icon,
  HStack,
  Center,
  VStack,
  useColorModeValue,
  UnorderedList,
  List,
  ListItem
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'


import Head from 'next/head';
import NextLink from 'next/link'
import NextImage from 'next/image';


import constructionIllustration  from '../../public/images/illustrations/undraw_visual_data_re_mxxo.svg';
import filesIllustration  from '../../public/images/illustrations/undraw_projections_re_ulc6.svg';
import filesIllustration2  from '../../public/images/illustrations/undraw_real_time_analytics_re_yliv.svg';
import filesIllustration3  from '../../public/images/illustrations/undraw_investment_data_re_sh9x.svg';
import filesIllustration4  from '../../public/images/illustrations/undraw_stock_prices_re_js33.svg';

import filesIllustration5  from '../../public/images/illustrations/undraw_financial_data_re_p0fl.svg';
import filesIllustration6  from '../../public/images/illustrations/undraw_term_sheet_re_ju7s.svg';



const Illustration1 = (props) => {
  return (
    <Box>
      <NextImage src={constructionIllustration} width={700} height={700} >
      </NextImage>
    </Box>
  )
}

const Illustration2 = (props) => {
  return (
    <Box>
      <NextImage src={constructionIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}

// start here
const Illustration3 = (props) => {
  return (
    <Box>
      <NextImage src={filesIllustration3} width={250} height={250} >
      </NextImage>
    </Box>
  )
}


const Illustration4 = (props) => {
  return (
    <Box>
      <NextImage src={filesIllustration2} width={250} height={250} >
      </NextImage>
    </Box>
  )
}


const Illustration5 = (props) => {
  return (
    <Box>
      <NextImage src={filesIllustration4} width={250} height={250} >
      </NextImage>
    </Box>
  )
}


const Illustration6 = (props) => {
  return (
    <Box>
      <NextImage src={filesIllustration5} width={250} height={250} >
      </NextImage>
    </Box>
  )
}



const features2 = [
  {
    id: 0,
    title: 'Reduced Corporate Tax',
    text: 'One of the primary benefits of Patent Box tax relief is a reduced corporate tax rate. Qualifying profits derived from patented products or processes are taxed at a lower rate than standard corporate tax rates, potentially leading to substantial tax savings.'  },
  {
    id: 1,
    title: 'Encouragement for Innovation',
    text: ' The Patent Box scheme encourages companies to invest in research and development, as the financial benefits make innovation more appealing. It&apos;s a win-win situation – businesses thrive through innovation, and the government supports economic growth.s a win-win situation – businesses thrive through innovation, and the government supports economic growth.',
  },
  {
      id: 2,
      title: 'Competitive Advantage',
      text: 'Holding patents can provide a competitive edge by protecting your unique ideas and inventions. With Patent Box, you not only safeguard your innovations but also gain tax advantages, strengthening your market position',
    },

    {
      id: 3,
      title: 'Streamlined Application Process',
      text: 'Applying for Patent Box tax relief can be straightforward when done correctly. However, it&apos;s crucial to understand the eligibility criteria and ensure your business meets the necessary requirements to maximise your benefits.',
    },
    {
      id: 3,
      title: 'Supporting Documentation',
      text: 'Provide any relevant supporting documents, such as project plans, technical reports, or patent applications, to substantiate the R&D claim',
    },
];


const qualifiedFeatures3 = [
  {
    id: 0,
    title: 'Hold qualifying patents or exclusive licences',
    text: ''  },
  {
    id: 1,
    title: 'Encouragement for Innovation',
    text: '',
  },
  {
      id: 2,
      title: 'Competitive Advantage',
      text: '',
    },

    {
      id: 3,
      title: 'Streamlined Application Process',
      text: '',
    },
    {
      id: 3,
      title: 'Supporting Documentation',
      text: '',
    },
];

const qualifiedFeatures4 = [
  {
    id: 0,
    title: 'Patent Box eligibility assessments',
    text: ''  },
  {
    id: 1,
    title: 'Assistance with patent identification and documentation',
    text: '',
  },
  {
      id: 2,
      title: 'Comprehensive tax planning and compliance services',
      text: '',
    },
];


export default function PatentBoxPage() {
  return (
    <Box bg="blackAlpha.200" pt={6} pb={12}>
        <Head>
          <title>Patent Box | Tax Edge Advisory</title>
          <meta name="description" content="Tax Edge Advisory Webpage" />
          <link rel="icon" href="../public/images/icon/logo-black.svg" />

        </Head>

      <Container 
        maxW={{base:'1xl',md:'85vw'}} 
        py={12} 
        minHeight={{md:'110vh'}}   
        rounded='3xl' 
        shadow='2xl'    
        background="rgba(240,255,244,0.65)"
      >
        <Container maxW={{base:'1xl',md:'75vw'}} >
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 2 }}
          >                    
            <Flex
              textAlign={'center'}
              pt={10}
              justifyContent={'center'}
              direction={'column'}
              width={'full'}
              overflow={'hidden'}>

            <Box width={{ base: 'full', sm: 'lg', lg: '2xl' }} margin={'auto'} pb={32}>
              <chakra.h3
                fontWeight={'bold'}
                fontSize={20}
                textTransform={'uppercase'}
                color={'green.400'}>
                Tax Information Series
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
                    py={10}
                  >
                    Maximising Your Benefits with Patent Box Tax Relief

                  </Text>
                </Heading>
              <chakra.h2
                margin={'auto'}
                width={'70%'}
                fontWeight={'medium'}
                fontSize={'lg'}
                color={useColorModeValue('gray.500', 'gray.400')}
                >
                See why our clients have chosen Tax Edge Advisory
              </chakra.h2>
            </Box>
            </Flex>

          <SimpleGrid columns={{ base: 1, md: 1, lg:1 }} spacing={10} pb={{base: 2, md: 24}}>
            <Illustration2 height={{ sm: '24rem', lg: '30vh' }} mt={{ base: -8, md:-8 }} mb={{base:12,md: 5}} />
          </SimpleGrid>

          </Stack>
          
        <Box pb={8}>
          <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "3xl",md: "4xl",}}
            pb={{base: 6, md: 3}}
          >
          Unlock the Power of Intellectual Property
          </Text>
          <Text color={'black'} fontSize={{base:'xl', md: '2xl'}} pb={{base:12, md:12}} >
            The Patent Box scheme is a strategic move by the UK government to incentivise the protection and commercialisation of intellectual property. If your business holds patents or licences, you&apos;re on the path to unlocking exceptional tax advantages.        
            </Text>
          
            <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "3xl",md: "4xl",}}
            py={4}
          >
          What is Patent Box Tax Relief?
          </Text>
          
          <Text color={'black'} fontSize={{base:'xl', md: '2xl'}} pb={{base:6, md: 12}}>
          The Patent Box is a UK government initiative designed to reward businesses that actively innovate and hold patents. This initiative offers significant tax incentives, allowing eligible companies to reduce their corporate tax liability. Essentially, it rewards businesses for protecting their intellectual property.            </Text>
            
            
            <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "3xl",md: "4xl",}}
            py={4}
          >
          Benefits of Patent Box Tax Relief
          </Text>

          <Container maxW={{md: '85vw'}} mt={2} >
            <Box
              borderWidth='1px' 
              borderRadius='xl' 
              padding={8}
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
            Reduced Corporate Tax
            </Text>

            <Box  >
            <SimpleGrid columns={{base: 1, md:2}}  >
              <Center>
                <Illustration3  />
              </Center>
              
              <Box  mt={2} mb={{lg:20}} >
                <SimpleGrid columns={1} spacing={6}>

                      <Box
                      maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                      padding={3}
                      paddingRight={{base:8,md:12}}
                      // bgColor="gray.100"
                      background="whiteAlpha.800"
                      // border='30px'
                      // shadow={'md'}
                      >
                      <HStack  align={'flex-start'} >
                        
                        <Box color={'green.400'} px={2} >
                          {/* <Icon as={CheckIcon} /> */}
                        </Box>
                        <VStack align={'start'}>
                          <Text color={'black'} fontWeight={200} fontSize={'xl'} >
                            
                          </Text>
                          <Text color={'black'}
                          fontSize={'lg'}>
                            One of the primary benefits of Patent Box tax relief is a reduced corporate tax rate. Qualifying profits derived from patented products or processes are taxed at a lower rate than standard corporate tax rates, potentially leading to substantial tax savings.          
                            </Text>
                        </VStack>
                      </HStack>
                      </Box>

                      


                </SimpleGrid>
              </Box>
            </SimpleGrid>
            </Box>
        
            </Box>



            <Box
              borderWidth='1px' 
              borderRadius='xl' 
              padding={8}
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
            Encouragement for Innovation
            </Text>

            <Box  >
            <SimpleGrid columns={{base: 1, md:2}}  >
              <Center>
                <Illustration4  />
              </Center>
              
              <Box  mt={2} mb={{lg:20}} >
                <SimpleGrid columns={1} spacing={6}>

                      <Box
                      maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                      padding={3}
                      paddingRight={{base:8,md:12}}
                      // bgColor="gray.100"
                      background="whiteAlpha.800"
                      // border='30px'
                      // shadow={'md'}
                      >
                      <HStack  align={'flex-start'} >
                        
                        <Box color={'green.400'} px={2} >
                          {/* <Icon as={CheckIcon} /> */}
                        </Box>
                        <VStack align={'start'}>
                          <Text color={'black'} fontWeight={200} fontSize={'xl'} >
                            
                          </Text>
                          <Text color={'black'}
                          fontSize={'lg'}>
The Patent Box scheme encourages companies to invest in research and development, as the financial benefits make innovation more appealing. It&#x27;s a win-win situation – businesses thrive through innovation, and the government supports economic growth.                            </Text>
                        </VStack>
                      </HStack>
                      </Box>

                      


                </SimpleGrid>
              </Box>
            </SimpleGrid>
            </Box>
        
            </Box>




            <Box
              borderWidth='1px' 
              borderRadius='xl' 
              padding={8}
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
            Competitive Advantage
            </Text>

            <Box  >
            <SimpleGrid columns={{base: 1, md:2}}  >
              <Center>
                <Illustration6  />
              </Center>
              
              <Box  mt={2} mb={{lg:20}} >
                <SimpleGrid columns={1} spacing={6}>

                      <Box
                      maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                      padding={3}
                      paddingRight={{base:8,md:12}}
                      // bgColor="gray.100"
                      background="whiteAlpha.800"
                      // border='30px'
                      // shadow={'md'}
                      >
                      <HStack  align={'flex-start'} >
                        
                        <Box color={'green.400'} px={2} >
                          {/* <Icon as={CheckIcon} /> */}
                        </Box>
                        <VStack align={'start'}>
                          <Text color={'black'} fontWeight={200} fontSize={'xl'} >
                            
                          </Text>
                          <Text color={'black'}
                          fontSize={'lg'}>
                            Holding patents can provide a competitive edge by protecting your unique ideas and inventions. With Patent Box, you not only safeguard your innovations but also gain tax advantages, strengthening your market position.                            </Text>
                        </VStack>
                      </HStack>
                      </Box>

                      


                </SimpleGrid>
              </Box>
            </SimpleGrid>
            </Box>
        
            </Box>


            <Box
              borderWidth='1px' 
              borderRadius='xl' 
              padding={8}
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
            Streamlined Application Process
            </Text>

            <Box  >
            <SimpleGrid columns={{base: 1, md:2}}  >
              <Center>
                <Illustration5  />
              </Center>
              
              <Box  mt={2} mb={{lg:20}} >
                <SimpleGrid columns={1} spacing={6}>

                      <Box
                      maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
                      padding={3}
                      paddingRight={{base:8,md:12}}
                      // bgColor="gray.100"
                      background="whiteAlpha.800"
                      // border='30px'
                      // shadow={'md'}
                      >
                      <HStack  align={'flex-start'} >
                        
                        <Box color={'green.400'} px={2} >
                          {/* <Icon as={CheckIcon} /> */}
                        </Box>
                        <VStack align={'start'}>
                          <Text color={'black'} fontWeight={200} fontSize={'xl'} >
                            
                          </Text>
                          <Text color={'black'}
                          fontSize={'lg'}>
Applying for Patent Box tax relief can be straightforward when done correctly. However, it&#x27;s crucial to understand the eligibility criteria and ensure your business meets the necessary requirements to maximise your benefits.                            </Text>
                        </VStack>
                      </HStack>
                      </Box>

                      


                </SimpleGrid>
              </Box>
            </SimpleGrid>
            </Box>
        
            </Box>



          </Container>
            

        </Box>

        <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "3xl",md: "4xl",}}
            py={4}
          >
          Who Qualifies for Patent Box?
          </Text>
          
          <Text color={'black'} fontSize={{base:'xl', md: '2xl'}} pb={2}>
          To be eligible for Patent Box tax relief, your business must:
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} pb={16}>
          {qualifiedFeatures3.map((feature) => (
              <Box
              maxW='7xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
              padding={8}
              // py={10}
              // paddingRight={8}
              // paddingLeft={6}
              bgColor="gray.100"
              // opacity={0.15}
              // background="rgba(192,192,192,0.15)"
              background="white"
              border='30px'
              shadow={'xl'}
              key={feature.id}
              >

              <HStack  align={'top'} >
                <Box color={'green.400'} px={4} >
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text color={'black'} fontWeight={800} fontSize={'xl'}>{feature.title}</Text>
                  <Text color={'black'}
                  fontSize={'lg'}>{feature.text}</Text>
                </VStack>
              </HStack>
              </Box>
            ))}
        </SimpleGrid>

            


          <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "3xl",md: "4xl",}}
            py={4}
          >
          How Can Tax Edge Advisory Help?
          </Text>
          
          <Text color={'black'} fontSize={{base:'2xl', md: '2xl'}} pb={{base:6, md:2}}>
          Navigating the intricacies of tax incentives like the Patent Box scheme can be challenging. That&apos;s where Tax Edge Advisory comes in. Our team of experts specialises in helping businesses like yours make the most of tax relief opportunities.
          </Text>
          <Text
            bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "2xl",md: "4xl",}}
            py={4}
          >
          We provide:
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} pb={16}>
          {qualifiedFeatures4.map((feature) => (
              <Box
              maxW='7xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
              padding={8}
              // py={10}
              // paddingRight={8}
              // paddingLeft={6}
              bgColor="gray.100"
              // opacity={0.15}
              // background="rgba(192,192,192,0.15)"
              background="white"
              border='30px'
              shadow={'xl'}
              key={feature.id}
              >

              <HStack  align={'top'} >
                <Box color={'green.400'} px={4} >
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text color={'black'} fontWeight={800} fontSize={'xl'}>{feature.title}</Text>
                  <Text color={'black'}
                  fontSize={'lg'}>{feature.text}</Text>
                </VStack>
              </HStack>
              </Box>
            ))}
        </SimpleGrid>

            
          <Text color={'black'} fontSize={'2xl'} pb={2}>
          Let us help you harness the power of Patent Box tax relief to drive innovation, reduce your tax liability, and enhance your competitive advantage.
          </Text>

            
        <Box py={12}>
          <Text             
          bgClip="text"
              bgGradient='linear(to-r, blackAlpha.800, green.500)'
              fontWeight="extrabold"
              fontSize={{ base: "4xl",md: "4xl",}}
              pb={2}>
          Contact Us
          </Text>
          <Text color={'black'} fontSize={'2xl'} pb={6}>
          Ready to explore the benefits of Patent Box tax relief for your business? Contact Tax Edge Advisory today to schedule a consultation with our experienced tax professionals. Together, we can build a tax strategy that supports your innovation and growth.
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
                  
          </Stack>
        </Box>
        </Container>
      </Container>
    </Box>
  );
}