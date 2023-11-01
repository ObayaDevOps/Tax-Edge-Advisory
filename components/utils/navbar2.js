import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  Container,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import NextLink from 'next/link'

import NextImage from 'next/image'
import taxEdgeLogo from '../../public/images/icon/logo-white-removebg-crop.png'



export default function WithSubnavigation(){
  const bg = useColorModeValue("green.600", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Container maxW={'7xl'}>

        <Flex alignItems="center" justifyContent="space-between" mx="auto">

        <Flex  display={{ base: "none", lg: "inline-flex" }}>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Flex >
                <NextImage src={ taxEdgeLogo } width={730/7} height={351/7}  />
              </Flex>
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </Flex>


        <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="white"
              display={{ base: "none", lg: "inline-flex" }}
            >
              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/tax/tax-calculator' passHref>
                Tax Calculator
                </NextLink>
              </Button>

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/research-and-dev/research-and-dev-landing-page' passHref>
                Research & Development
                </NextLink>
              </Button>

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/capital-allowance/capital-allowance-info' passHref>
                Capital Allowances
                </NextLink>
              </Button>

              {/* <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/past-work/client-testimonials' passHref>
                Client Testimonials
                </NextLink>
              </Button> */}

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/info/contact-enquiry' passHref>
                Contact Us
                </NextLink>
              </Button>

            
            </HStack>
            <Box display={{ base: "inline-flex", md: "flex", lg: "none" }}>
              <IconButton
                display={{ base: "flex", md: "flex", lg:"none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="green.100"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={0}
                bg={'green.100'}
                zIndex={999}
                spacing={3}
                w="100%"
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />


                <Button
                w="full"
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/tax/tax-calculator' passHref>
                Tax Calculator
                </NextLink>
              </Button>

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/research-and-dev/research-and-dev-landing-page' passHref>
                Research & Development
                </NextLink>
              </Button>

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/capital-allowance/capital-allowance-info' passHref>
                Capital Allowances
                </NextLink>
              </Button>

              {/* <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/past-work/client-testimonials' passHref>
                Client Testimonials
                </NextLink>
              </Button> */}

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/info/contact-enquiry' passHref>
                Contact Us
                </NextLink>
              </Button>
              </VStack>
            </Box>
          </HStack>


          <Flex  display={{ base: "inline-flex", lg: "none" }}>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Flex  ml={{base: '-55vw', md: '-53vw'}}>
                <NextImage src={ taxEdgeLogo } width={730/7} height={351/7}  />
              </Flex>
            </chakra.a>
          </Flex>


         
        </Flex>
        </Container>

      </chakra.header>
    </React.Fragment>
  );
};
