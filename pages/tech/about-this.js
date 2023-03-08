import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'
import ImageSlider from '../../components/utils/carousel/imageSlider'
import { SlideData } from "../../components/utils/carousel/about-this-nft-slides"

import Head from 'next/head'
import Link from 'next/link'

  export default function AboutThisNFTPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>About <i>this.</i></title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>


        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24, lg:5 }}>
          <Flex>
            {/* <NextImage src={odurInstallation}  placeholder="blur" /> */}
            <ImageSlider slides={SlideData} />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontStyle={'italic'}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                this.
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                A Meditators Journey: Reference and Perspective
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.400')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'}>
                If not investigated, nothing is noted about the piece.
                </Text>
                <Text fontSize={'lg'} textAlign="left">
                It is said, according to the Pitāpūtrasamāgama-sūtra, Siddhārtha became a buddha &apos;awakened one&apos; because he fully understood the meaning of the two truths—conventional truth (saṁvṛti-satya) and ultimate truth (paramārtha-satya)—and that the reality of all the objects of knowledge, the text says, is exhaustively comprised of these two truths. [https://plato.stanford.edu/entries/twotruths-india/]               </Text>
                <Text fontSize={'lg'} textAlign="left">
                Taking Inspiration from the Heart Sutra of Buddist Teaching, the Dharmachakra wheel and Concepts of Dependent Origination, &apos;this.&apos; represents the reality around us symbolically in a digital interactive sculpture.

                </Text>

                <Text fontSize={'lg'} textAlign="start">
                Created from only the basic computing symbols of ‘0’ and ‘1’ ,the two sides to the simplest ‘bit’ of information -  on-off / light-dark / yes-no , and the Logical AND operator
                </Text>
                <Text fontSize={'lg'} textAlign="start">
                When further investigated, the shape of a knotted Torus is seen in ASCII, rotating about an axis, the user can use the mouse (or fingers on mobile) to play with the newly revealed shape.
                </Text>
                <Text fontSize={'lg'}>
                ‘this.’ is a keyword in programming used to specify what the programmer is referring to. 
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Digital Sculpture</ListItem>
                    <ListItem>Interactive</ListItem>{' '}
                    <ListItem>NFT</ListItem>
                  </List>
                  {/* <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List> */}
                </SimpleGrid>
              </Box>
              <Box>
                {/* <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Art Details
                </Text>
   */}
                {/* <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Materials:
                    </Text>{' '}
                     Oil Paint, Shipping Materials
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dimensions
                    </Text>{' '}
                    10m x 10m
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                </List>
                <Text fontSize={'xs'} textAlign="left" paddingTop="1em">
                    Slide Photo Credit: https://klaart.org/showcase-item/trevor-aloka-2/
                </Text> */}
                <Text fontSize={'xl'}>
                Minting allows the owner to set the ASCII characters of the Torus to whatever they please. But only once. The work is forever free for all to view through the Afropocene website. 
                </Text>
              </Box>
            </Stack>  

            <Link href="/tech/web3-login" passHrefs>      
            <Button
            
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Mint 1 of 1
            </Button>
            </Link>  
  
            {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>Physical Delivery Only</Text>
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }