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
import { SlideData } from "../../components/utils/carousel/odur-muwawa-slides"

import Head from 'next/head'


  export default function DreamcatcherExhibitionPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Dreamcatcher x Generative Dreams Installation | Afropocene StudioLab</title>
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
                Dreamcatcher x Generative Dreams
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Immersive Light Sculpture Installation
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
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    
                </Text>
                <Text fontSize={'xl'}>
                    Collaboration between Obaya Dralega and SCARLETMOTIFF. 
                </Text>
                <Text fontSize={'lg'}>
                <strong>Dreamcatcher</strong>: A sculptural stage for Light. Constructed from architecturally arranged and angled mosquito nets,
                Obaya has invented a technique (volumetric net projection) which gives a sensations of depth and volume to projected images with dual projectors using low cost and widely available materials.
                The piece invites the audience to walk between and sit beneath the dancing visuals, each viewpoint giving the user a unique perspective.
                </Text>
                <Text fontSize={'lg'}>
                <strong>Generative Dreams</strong>: A series of audio-visual artworks created from July 2020 to the present day as part of SCARLETMOTIFF&apos;s daily audio-visual generative art practice. Made with TouchDesigner and Ableton Live.
                </Text>
                <Text fontSize={'lg'}>
                    Together, the two pieces of work act synergetically and invite the audience to sit and reflect amongst the soul-calming, intricate changing visuals and the undulating meditative audio. 
                </Text>
                <Text fontSize={'xl'}>
                    Part of the &apos;PROOF OF WORK.&apos; Exhibition
                </Text>



                <Text fontSize={'md'}>
                <strong> Music Credits</strong> : excerpt from the Immersive installation IN LINEAR RES<br></br>            

                Music Composition, Instrumentation and Production: SCARLETMOTIFF<br></br>

                Arrangement + Additional Production: Abaasa Rwemereza<br></br>

                Vocals + Additional Instrumentation: Aliddeki Brian
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
                    <ListItem>Volumetric Projection</ListItem>
                    <ListItem>Installation</ListItem>
                    <ListItem>Mosquito Net Sculpture</ListItem>{' '}
                    <ListItem>Visual Art</ListItem>
                    <ListItem>Soundtrack</ListItem>

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
                  Art Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Materials:
                    </Text>{' '}
                     Mosquito Nets
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dimensions
                    </Text>{' '}
                    3m x 5m
                  </ListItem>
                  {/* <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem> */}
                </List>
              </Box>
            </Stack>
  
            {/* <Button
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
              Purchase
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>Physical Delivery Only</Text>
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }