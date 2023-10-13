import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    Button,
    VStack,
    chakra,
    Center,
    Input,
    Icon,
    Select,
    useColorModeValue,
    UnorderedList,
    List,
    ListItem,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
  
  import Head from 'next/head';
  import NextLink from 'next/link' 
import TaxCalculatorInputComponent from '../../components/utils/tax-calculatorInputComponent';

 
 export default function TaxCalculatorPage() {
     return (
        <Box bg="blackAlpha.200" pt={8} pb={12}>
            <Head>
            <title>Tax Calculator | Tax Edge Advisory</title>
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
                    spacing={{ base: 8, md: 0 }}
                    >                    
                    <Flex
                        textAlign={'center'}
                        pt={8}
                        justifyContent={'center'}
                        direction={'column'}
                        width={'full'}
                        overflow={'hidden'}>

                    <Box width={{ base: 'full', sm: 'lg', lg: '2xl' }} margin={'auto'} pb={{base:12, md:32}}>
                        <chakra.h3
                        fontWeight={'bold'}
                        fontSize={20}
                        textTransform={'uppercase'}
                        color={'green.400'}>
                         Business tax savings
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
                            Tax Relief Calculator
                            </Text>
                        </Heading>
                        <chakra.h2
                        margin={'auto'}
                        width={'70%'}
                        fontWeight={'medium'}
                        fontSize={'lg'}
                        color={useColorModeValue('gray.500', 'gray.400')}
                        >
                        See How Much 
                        Tax Relief could you claim today!
                        </chakra.h2>
                    </Box>
                    </Flex>

                    {/* Calculator */}
                    <Center>
                        <TaxCalculatorInputComponent />
                    </Center>



                    <Box p={{base:4, md:20}}>
                        <Text  textAlign='center' color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={10}>
                        Our calculator tool is designed to provide you with an approximate figure of the tax credits you could be eligible for based on your incurred expenditure for each incentive. Please note that the results provided by our calculator tool are approximate figures, and it’s essential to consult one of our tax advisors for a more accurate assessment tailored to your specific circumstances.
                     
                        </Text>

                    </Box>

                    </Stack>
                </Container>

            </Container>
         </Box>
     )
 }