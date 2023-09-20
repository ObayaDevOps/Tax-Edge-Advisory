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
import { SlideData } from "../../components/utils/carousel/kharumwa-fotea-workshop-slides"
import Head from 'next/head'



  export default function UNDPNFTWorkshopPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Workshop: Zero to One - A Practical Guide to NFTs</title>
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
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Zero to One - A Practical Guide to NFTs
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                NFT Workshop
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'}>
                Have you been wanting to understand more about the NFT space as an artist? 
                If so join us on Saturday for an introduction and demo led by Obaya Dralega. 
                We’ll take you through the basics: historical context, setting up, platforms and wallets.
                Come with a smart phone or laptop to follow along, so that you can leave with your first NFT!
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
                    <ListItem>Workshop</ListItem>
                    <ListItem>Education</ListItem>{' '}
                    <ListItem>Blockchain Programming</ListItem>
                  </List>
                  {/* <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List> */}
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Talk Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Materials:
                    </Text>{' '}
                     Projector
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Length:
                    </Text>{' '}
                    2 Hours
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Language:
                    </Text>{' '}
                    English
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }