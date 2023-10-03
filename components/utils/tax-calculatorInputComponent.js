import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Center,
    Box,
    Button,
    VStack,
    chakra,
    Input,
    Icon,
    Select,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    CheckIcon,
    useColorModeValue,
    UnorderedList,
    List,
    ListItem,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    useControllableState
  } from '@chakra-ui/react';
  
  import React, { useState } from 'react';



  import Head from 'next/head';
  import NextLink from 'next/link' 
 
  let calculatedUserTaxSavingsVariable = 0;


export default function TaxCalculatorInputComponent () {
    const [userIncurredExpense, setIncurredExpense] = useState(0);

    return (
        <Box bg='white' mt={{base:-12,md: -20}}  p={{base:8,md: 16}} minW={{base:'65vw', md: '45vw'}} shadow='2xl' rounded='3xl' >
        <Container>
            <VStack pt={{base:6, md: 0}}>
                <Box
                    maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
                    pt={4}
                    paddingRight={8}
                    paddingLeft={2}
                    bgColor="gray.100"
                    // opacity={0.15}
                    background="rgba(192,192,192,0.1)"
                    border='80px'
                    shadow={'md'}
                >
                    <Box ml={{md:4}} mt={{base: -2, md:4}} pt={{base:4, md: 1}}>
                        <Text textAlign='center' fontSize={{base:'xl', md:'2xl', lg:'3xl'}}
                                                    w="full"
                                                    bgClip="text"
                                                    bgGradient='linear(to-r, blackAlpha.800, green.600)'
                                                    fontWeight="extrabold"
                                                    transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                        >
                                Total Estimated Savings
                                </Text>
                            {/* Show a variable here, modify that variable based on the button fucntion call */}
                            <Center w='full' pb={{base:10, md: 8}}>
                                <Stat>
                                    <StatNumber textAlign='center' fontSize={{base: '3xl', md: '5xl'}}>
                                         £ {userIncurredExpense}</StatNumber>
                                    {/* <StatArrow alignSelf='center' type='increase' /> */}
                                </Stat>
                            </Center>
                    </Box>
                </Box>

                <Box pt={{base: 6, md:10}}>
                <FormControl>
                    <Select 
                    placeholder='Select Tax Type' 
                    variant='filled' size='lg'
                    >
                        <option>Research and Development Tax Credit</option>
                        <option>Embedded Capital Allowances</option>
                        <option>Land Remediation Relief</option>
                    </Select>

                    <FormLabel pt={2} >Incurred Expense </FormLabel>
                        <Input size='lg' placeholder='Enter amount (£)' name='userIncurredExpense' />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                </FormControl>
                {/* <Text fontSize='xs'>
                    *Estimated tax savings you are due
                </Text> */}

                <SimpleGrid pt={{base: 6, md:8}}>
                <Button colorScheme='green'mb={4} type='submit' onClick={() => setUserTaxSaving(1000000)}>
                    Calculate Tax Savings*
                </Button>

                <Button as="a" href='/info/contact-enquiry'
>
                    Contact Us
                </Button>
                <Text pt={{base:10, md: 8}}>
                For a no obligation FREE eligibility check, contact us below.
                </Text>
                <Text pt={{base: 2, md:1}}>
                    Subject to professional checks*
                </Text>
                </SimpleGrid>
                </Box>

            </VStack>
        </Container>
    </Box>
    );
}