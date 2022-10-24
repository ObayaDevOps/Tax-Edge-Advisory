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
import { SlideData } from "../../components/utils/carousel/museum-of-selves-workshop-slides"
import Head from 'next/head'



  export default function MuseumOfSelvesWorkshopPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Workshop: Museum Of Selves</title>
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
                Museum of Selves
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Youth Workshop
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
                Artist Allan Kyakman worked with high school students from around kampala to explore
                ideas of representation, self imaging and identity as an ever evolving process. Over the
                course of 3 weeks the students engaged in conversation with the artist, visited 32 degrees
                East arts trust and library and experimented with a range of in materials. The workshop
                culminated in a collaborative exhibition hosted at Afropocene, curated by Violet Nantume
                and Julia Gyemant and made possible by Goethe Zentrum Kampala.

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
                    <ListItem>Photography</ListItem>
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
                      Length
                    </Text>{' '}
                    3 Weeks
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