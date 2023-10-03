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
  } from '@chakra-ui/react';
  
  import Head from 'next/head';
  import NextLink from 'next/link' 
 

export default function TaxCalculator () {
    return (
        <Box bg='white' mt={{md: -20}} p={12} minW={'65vw'} shadow='2xl' rounded='3xl' >
        <Container>
            <VStack>
                <Text
                fontSize='7xl'
                    bgClip="text"
                    bgGradient='linear(to-r, blackAlpha.800, green.500)'
                    fontWeight="extrabold"
                    transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                >
                    Calculator
                </Text>
                <Text>
                    Estimated tax savings you are due*
                </Text>
                <Text>
                *Subject to professional checks
                </Text>

                <InputGroup>
                    {/* <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='£'
                    /> */}
                    <Input placeholder='Enter amount ' />
                </InputGroup>

                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select placeholder='Select Tax Type'>
                        <option>Research and Development Tax Credit</option>
                        <option>Embedded Capital Allowances</option>
                        <option>Land Remediation Releif</option>
                    </Select>

                    <FormLabel pt={2}>Incurred Expense</FormLabel>
                        <Input />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                </FormControl>
                <Button>
                    Calculate Tax Savings
                </Button>
                <Text>
                For a no obligation FREE eligibility check, contact us below.
                </Text>
                <Button>
                    Contact Us
                </Button>
            </VStack>
        </Container>
    </Box>
    );
}