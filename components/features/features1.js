import React, { useRef } from "react";

import {
  chakra,
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Center,
  GridItem,
  ScaleFade,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";

import NextLink from 'next/link'



export default function App(){
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)


  const Feature = (props) => {
    return (
    <NextLink href={props.href}>
      <Box
      maxW='5xl' borderWidth='1px' borderRadius='xl' overflow='hidden'
      padding={6}
      paddingRight={{base:8,md:16}}
      // bgColor="gray.100"
      background="blackAlpha.100"
      shadow='md'
      >
        <Flex py={8}>
          <Flex shrink={0}>
            <Icon
              boxSize={5}
              mt={1}
              mr={2}
              color="green.500"
              _dark={{ color: "brand.300" }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </Icon>
          </Flex>
          <Box ml={4}>
            <chakra.dt
              fontSize="xl"
              fontWeight="bold"
              lineHeight="6"
              _light={{ color: "green.600" }}
            >
            <Box>
              <NextLink href={props.href}>{props.title}</NextLink>
            </Box>
            </chakra.dt>
            <chakra.dd mt={2} color="gray.900" _dark={{ color: "green.400" }}    fontSize="lg">
              <NextLink href={props.href}>
                <Box>{props.children}</Box></NextLink>
            </chakra.dd>
          </Box>
        </Flex>
  
        </Box>
      </NextLink>
    );
  };

  return (
    <Center 
    pt={16}>
      {/* <ScaleFade 
        initialScale={0.4}
        in={isInView1}
      > */}
    <Flex
      bg='green.50'
      p={{base:0, md:12, lg:12}}
      w="auto"
      justifyContent="center"
      alignItems="center"
      maxW={'85vw'}
      rounded='3xl' 
      shadow='xl'
      ref={ref1}

    >
      <Box
        bg="whiteAlpha.900"
        px={8}
        py={20}
        mx="auto"
        rounded='3xl' 
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start" >
            <chakra.h2
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }}
              textAlign={{ base: "center", sm: "left" }}
              mb={{base:6,md:3}}

              lineHeight={'110%'}
              bgClip="text"
              bgGradient="linear(to-r, blackAlpha.900, green.500)"
            >
              Everything you need
            </chakra.h2>
            <chakra.h2
              mb={{base:6,md:3}}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              _light={{ color: "black" }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              One stop shop for UK Tax Incentives
            </chakra.h2>
            <chakra.p
              mb={{md:0, lg:6}}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color="green.900"
              _dark={{ color: "green.500" }}
            >
              Click on a box to learn more about the incentive and how we can help you!
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 12 }}
            >
              <Feature title="R&D Tax credits" href="/research-and-dev/tax-credits">
                If your company invests in research and development activities, you may be sitting on a goldmine of tax-saving opportunities{" "}
              </Feature>
              <Feature title="Patent Box tax relief" href="/research-and-dev/patent-box">
                {" "}
                Offers significant tax incentives, allowing eligible companies to reduce their corporate tax liability - rewarding businesses for protecting their intellectual property
              </Feature>
              <Feature title="Land remediation relief" href="/capital-allowance/capital-allowance-info">
                {" "}
                Provides financial benefits to companies for cleaning up contaminated or derelict land to encourage its redevelopment{" "}
              </Feature>
              <Feature title="New property transactions" href="/capital-allowance/capital-allowance-info">
                {" "}
                Claim tax deductions on qualifying capital expenditures related to commercial buildings
              </Feature>
              <Feature title="Refurbishments for existing property" href="/capital-allowance/capital-allowance-info">
                {" "}
                Claim tax deductions on qualifying capital expenditures related to existing commercial buildings{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
    {/* </ScaleFade> */}
    </Center>
  );
};
