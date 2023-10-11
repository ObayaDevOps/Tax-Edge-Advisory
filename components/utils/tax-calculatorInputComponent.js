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
    InputLeftAddon,
    StatGroup,
    useControllableState
  } from '@chakra-ui/react';
  
  import React, { useState } from 'react';

  import ConfettiExplosion from 'react-confetti-explosion';



  import Head from 'next/head';
  import NextLink from 'next/link' 
 


export default function TaxCalculatorInputComponent () {
    const [inputValue, setInputValue] = useState(0);
    const [userTaxSavings, setUserTaxSavings] = useState(0);
    const [showUpOnlyGreenIcon, setshowUpOnlyGreenIcon] = useState(false);
    const [isExploding, setIsExploding] = React.useState(false);


    showUpOnlyGreenIcon

    const handleChange = (e) => {
        // 👇 Store the input value to local state
        setInputValue(e.target.value);
      };

      const handleChange2 = (e) => {
        // 👇 Store the input value to local state
        setUserTaxSavings(inputValue * 0.86);
        setshowUpOnlyGreenIcon(true);
        setIsExploding(true);

      };
    
    

    let  userInput = 0;
    return (
        <Box bg='green.300' mt={{base:-12,md: -20}}  p={{base:8,md: 16}} minW={{base:'65vw', md: '45vw'}} shadow='2xl' rounded='3xl' >

        <Container>

            <VStack pt={{base:6, md: 0}}>
                <Box
                    maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
                    pt={4}
                    paddingRight={8}
                    paddingLeft={2}
                    bgColor="gray.100"
                    // opacity={0.15}
                    // background="rgba(192,192,192,0.1)"
                    bg='green.100'
                    border='80px'
                    shadow={'md'}
                >

                    <Box ml={{md:4}} mt={{base: -2, md:4}} pt={{base:4, md: 0}}>
                        <Center mt={8}>
                            {isExploding && <ConfettiExplosion duration={2500} particleCount={80} width={1000} color={'green'} />}
                        </Center>
                        <Text textAlign='center' fontSize={{base:'xl', md:'2xl', lg:'3xl'}}
                                                    w="full"
                                                    bgClip="text"
                                                    bgGradient='linear(to-r, green.600, green.600)'
                                                    fontWeight="extrabold"
                                                    transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                        >
                                Total Estimated Savings
                                </Text>
                            {/* Show a variable here, modify that variable based on the button fucntion call */}
                            <Center w='full' pb={{base:10, md: 8}}>
                                <Stat>
                                    <StatNumber textAlign='center' fontSize={{base: '3xl', md: '5xl'}}>
                                         £ {userTaxSavings}</StatNumber>
                                        {/* { showUpOnlyGreenIcon && (
                                            // <StatArrow alignSelf='center' type='increase' />
                                            // <Icon />

                                        )} */}
                                </Stat>
                            </Center>
                    </Box>
                </Box>

                <Box pt={{base: 6, md:6}}>
                <FormControl>
                    {/* <Select 
                    placeholder='Select Tax Type' 
                    variant='filled' size='lg'
                    >
                        <option>Research and Development Tax Credit</option>
                        <option>Embedded Capital Allowances</option>
                        <option>Land Remediation Relief</option>
                    </Select> */}

                    <FormLabel fontSize='lg' pt={2} textColor='green.900' fontWeight={800} >Incurred Expense (Overall) </FormLabel>
                    <InputGroup>
                        <InputLeftAddon>£</InputLeftAddon>
                        <Input bgColor='white' size='md' type='number' placeholder='Enter amount (£)' onChange={handleChange} value={inputValue} /> 
                        {/* I need this value entered to be console.logged */}
                    </InputGroup>



                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                </FormControl>
                {/* <Text fontSize='xs'>
                    *Estimated tax savings you are due
                </Text> */}

                <SimpleGrid pt={{base: 6, md:8}}>
                <Button mb={4} type='submit' onClick={handleChange2}>
                    Calculate Tax Savings*
                </Button>

                <Button colorScheme='green' as="a" href='/info/contact-enquiry' whiteSpace='normal'>
                    <Text textAlign='center' fontSize='sm'>Get in Contact for FREE eligibility check!</Text>
                </Button>

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