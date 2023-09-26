'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Flex,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'

import NextLink from 'next/link'


const ArticleList = () => {
  return (

    <Box bg='blackAlpha.200' py={6}>
      <Container 
        maxW={{base:'1xl',md:'85vw'}} 
        py={12} 
        minHeight={{md:'110vh'}}   
        rounded='3xl' 
        shadow='2xl'    
        background="rgba(240,255,244,0.65)"
      >
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}
            >
        <Heading
              as={'h1'}
              mb={{base: 2, md: 6}}
              fontSize={{ base: "5xl",md: "6xl", lg:"6xl",}}
              minHeight={'1vh'}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={{base: "normal",md: "tight" }}
              color="green.900"
              textAlign='center'
        >
          Unleash the Power of Innovation with R&D Tax Credits and Patent Box</Heading>
      </Flex>

        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Box>
            </Box>
            {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)',
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box> */}
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Fueling Growth Through Innovation and Tax Incentives
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
              Welcome to our exploration of two powerful incentives that can transform the way your business thrives in today&apos;s competitive landscape: Research and Development (R&D) Tax Credits and the Patent Box scheme. At TaxEdge Advisory, we believe in harnessing the full potential of innovation while optimising your tax strategy. Let&apos;s take a high-level glimpse into these game-changing incentives.
            </Text>
          </Box>
        </Box>
        <Heading as="h2" marginTop="10">
          Our Offering
        
        </Heading>
        <Divider marginTop="5" />

        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '45%' }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href="/research-and-dev/tax-credits" passHref>
                      <Image
                      transform="scale(1.0)"
                      src={
                          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                      }
                      alt="some text"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                          transform: 'scale(1.05)',
                      }}
                      />
                  </NextLink>
                </Box>
              </Box>
              <Heading fontSize="xl" marginTop="2">
                <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                R&D Tax Credits: Fueling Innovation and Savings
                </Text>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
              R&D Tax Credits are a dynamic government initiative designed to reward businesses that dare to innovate. If your company invests in research and development activities, you may be sitting on a goldmine of tax-saving opportunities.
              </Text>
            </Box>
          </WrapItem>

          <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '45%' }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <NextLink href="/research-and-dev/patent-box" passHref>

                  <Image
                    transform="scale(1.0)"
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                  </NextLink>
                </Box>
              </Box>
              <Heading fontSize="xl" marginTop="2">
                <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Patent Box: Protecting Intellectual Capital and Tax Advantage
                </Text>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
              The Patent Box scheme is a strategic move by the UK government to incentivise the protection and commercialisation of intellectual property. If your business holds patents or licences, you&apos;re on the path to unlocking exceptional tax advantages.            </Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Container>

    </Box>
  )
}

export default ArticleList