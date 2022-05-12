import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  
  } from '@chakra-ui/react';

  import Head from 'next/head'
  import NextLink from 'next/link'
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        minH={'100vh'}
        // backgroundImage={'../../../../images/backgrounds/mandelbrot.jpg'        }
        backgroundSize={'fit'}
        backgroundPosition={'center center'}>
        <Head>
        <title>About Us: Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.900, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontFamily={'Space Mono'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
                Anthropocene

                /&apos;anθrəpəˌsiːn/ {' '}

                adjective

                relating to or denoting the current geological age, 
                viewed as the period during which human activity has been the dominant 
                influence on climate and the environment.

                ​
                </Text>
                <Text color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontFamily={'Space Mono'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
              
                Afro-

                /&apos;afrəʊ/

                combining form

                prefix: Afro-

                African; African and …

                &apos;Afro-Asiatic&apos;

                relating to Africa.

                &apos;Afrocentric&apos;

                ​
                </Text>
                <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontFamily={'Space Mono'}
                fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
                >
                We are afrofuturists interested in exploring the cultural aesthetics, 
                philosophies of science and history that are borne of the developing intersection of 
                African/Africana diaspora culture with technology. 

                ​

                A &apos;Co-Arts&apos; space for artists, researchers, thinkers, experimenters, developers 
                & do-ers. We provide space and community for any and all explorers of African futures. 
            </Text>
            <Stack direction={'row'}>
              <NextLink href="../about/artists">
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                fontFamily={'Space Mono'}
                _hover={{ bg: 'whiteAlpha.500' }}
                >
                Show me more
              </Button>
              </NextLink>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }