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

const features1 = [
  {
    id: 0,
    title: 'Our team provides comprehensive feasibility reports and cost estimates',
    text: ''  },
  {
    id: 1,
    title: 'We assess potential relief opportunities to help you make informed decisions',
    text: '',
  },
  {
      id: 2,
      title: 'These insights are invaluable for financial projections and evaluating the advantages of project proposals',
      text: '',
    },
];

const features2 = [
  {
    id: 0,
    title: 'We craft highly detailed technical capital allowances cost reports',
    text: ''  },
  {
    id: 1,
    title: 'These reports optimise your claims by categorising assets effectively',
    text: '',
  },
  {
      id: 2,
      title: 'This process simplifies filings with HMRC and ensures you claim every eligible allowance',
      text: '',
    },
  {
      id: 3,
      title: 'Past Expenditure Analysis and Audit of Historic Claims',
      text: '',
    },
];

const features3 = [
  {
    id: 0,
    title: 'Our team conducts thorough reviews of your past expenditure',
    text: ''  },
  {
    id: 1,
    title: 'We identify additional qualifying expenditure that can be included for capital allowances purposes',
    text: '',
  },
  {
      id: 2,
      title: 'This leads to substantial cash reimbursements and future tax savings',
      text: '',
    },
];

const features4 = [
  {
    id: 0,
    title: 'We offer advanced guidance on how to maximise qualifying expenditure',
    text: ''  },
  {
    id: 1,
    title: 'We help businesses navigate the nuances of the new relief, available for expenditures between April 1, 2021, and March 31, 2023 (Super Deductions) and March 31, 2023, onwards (Full Expensing)',
    text: '',
  },
];

const features5 = [
  {
    id: 0,
    title: 'We assist businesses in factoring capital allowances into commercial negotiations and contract documentation.',
    text: ''  },
  {
    id: 1,
    title: 'Ensuring that value is preserved and maximised throughout property transactions',
    text: '',
  },
];

const features6 = [
  {
    id: 0,
    title: 'We specialise in optimising 150% tax relief claims for companies involved in land remediation projects',
    text: ''  },
  {
    id: 1,
    title: 'This includes the possibility of repayable cash credits, ultimately generating substantial tax savings',
    text: '',
  },
];

const features7 = [
  {
    id: 0,
    title: 'Our team is spearheaded by specialists possessing a unique blend of expertise',
    text: ''  },
  {
    id: 1,
    title: 'We are committed to guiding you through the intricate regulations with a personalised approach',
    text: '',
  },
  {
      id: 2,
      title: 'Our modus operandi involves real-time, tailored advice',
      text: '',
    },

    {
      id: 3,
      title: 'We leverage tried-and-tested methodologies to minimise disruptions to your business operations while achieving optimal outcomes',
      text: '',
    },,
];




export default function CapitalAllowancePage() {
  return (
    <Box bg="blackAlpha.200" pt={8} pb={12}>
        <Head>
          <title>Capital Allowances | Tax Edge Advisory</title>
          <meta name="description" content="Tax Edge Advisory Webpage" />
          <link rel="icon" href="../public/images/icon/logo-black.svg" />

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
              Capital Allowance Series
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
                  Unlock Hidden Tax Savings with Property Capital Allowances
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

        <SimpleGrid columns={{ base: 1, md: 1, lg:1 }} spacing={10} pb={{base: 2, md:4}}>
          <Illustration1  />
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
          Introduction
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={2}>
        Have you recently purchased a commercial property, or perhaps undertaken renovations on one? If you have, then you may be sitting on a goldmine of potential tax savings waiting to be uncovered.
         </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={{base:4, md:4}}>
        Whenever your business invests in purchasing, constructing, refurbishing, fitting, or acquiring equipment, you have an opportunity to claim valuable capital allowances.
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={16}>
        Capital allowances are a valuable tax benefit that can be claimed on the money you&apos;ve invested in your commercial property. Even better, you can still claim these allowances on qualifying expenditure from the past that is now part of the property        </Text>
      </Box>

      <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "3xl",md: "5xl",}}
          pb={{base:10,lg:10}}
      >
      How We Empower Your Financial Success
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
        Feasibility Reports and Estimates
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration2  />
          </Center>

          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features1.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
        Capital Allowances Cost Reports
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration3  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features2.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
        Review and Analysis of Prior Expenditure
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration4  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features3.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
        Full Expensing and Super Deductions
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration5  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features4.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
        Capital Allowances Integration
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration6  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features5.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
        150% Contaminated Land Remediation Relief Claims
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration7  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features6.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
        Negotiations with HMRC
        </Text>

        <Box  >
        <SimpleGrid columns={{base: 1, md:2}}  >
          <Center>
            <Illustration8  />
          </Center>



          <Box  mt={2} mb={{lg:20}} >
            <SimpleGrid columns={1} spacing={6}>
              {features7.map((feature) => (
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
                      fontSize={'lg'}>{feature.text}</Text>
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
          Our Approach
        </Text>

        <Box  mt={2} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {features7.map((feature) => (
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
                  <Text color={'black'} fontWeight={200} fontSize={'xl'} >{feature.title}</Text>
                  <Text color={'black'}
                  fontSize={'lg'}>{feature.text}</Text>
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
        Contact Us
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={6}>
        Contact Tax Edge Advisory today to schedule a consultation with our experienced tax professionals. Together, we can build a tax strategy that supports your innovation and growth.
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
      <NextImage src={filesIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}


const Illustration3 = (props) => {
  return (
    <Box>
      <NextImage src={segmentIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}


const Illustration4 = (props) => {
  return (
    <Box>
      <NextImage src={timeIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}


const Illustration5 = (props) => {
  return (
    <Box>
      <NextImage src={calendarIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}


const Illustration6 = (props) => {
  return (
    <Box>
      <NextImage src={flatsIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}


const Illustration7 = (props) => {
  return (
    <Box>
      <NextImage src={environmentsIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}


const Illustration8 = (props) => {
  return (
    <Box>
      <NextImage src={negotiateIllustration} width={400} height={400} >
      </NextImage>
    </Box>
  )
}