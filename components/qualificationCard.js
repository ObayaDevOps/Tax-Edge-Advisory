
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
import React, { useRef } from "react";
import { useInView } from "framer-motion";


import NextImage from 'next/image'
import IFAMasterLogo from '../public/images/qualification/IFA_Logo_Master_HR.png'


export default function QualificationCard(){
  const scaleFactor = 0.9;

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)


  const Feature = (props) => {
    return (
      <Flex >

        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
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
            _light={{ color: "green.800" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.700" _dark={{ color: "green.400" }}    fontSize="lg">
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (

    <Center py={8}>
      {/* <ScaleFade 
          initialScale={0.4}
          in={isInView1}
        > */}
        <Flex
          bg='white'
          w="auto"
          justifyContent="center"
          alignItems="center"
          maxW={'85vw'}
          rounded='3xl' 
          shadow='lg'
          minW={{md: '85vw'}}
          ref={ref1}
        >
          <Box
            bg="whiteAlpha.900"
            _dark={{ bg: "green.800" }}
            px={8}
            py={20}
            mx="auto"
            rounded='3xl' 
          >
            <NextImage src={IFAMasterLogo} width={(3531/5)} height={(1962/5)} />

          </Box>
        </Flex>
      {/* </ScaleFade> */}
    </Center>
  );
};
