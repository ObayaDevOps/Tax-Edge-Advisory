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
import { MdLocalShipping } from 'react-icons/md';
import WithSubnavigation from '../../components/utils/navbar';

import NextImage from 'next/image';
import odurAssistantPhoto from '../../public/images/studio/afropocene-OdurAssistant.jpg'
import paperEggPhoto from '../../public/images/studio/PaperEgg.png'
import odurInstallationPhoto from '../../public/images/studio/odurInstallation.jpg'

import ImageSlider from '../../components/utils/carousel/imageSlider';
import { SlideData } from "../../components/utils/carousel/kabalagala-studio-slides";
import MapContainer from '../../components/utils/map';
import Head from 'next/head'


  export default function KabalagalaStudioPage() {
    return (
      <Container maxW={'7xl'}>

      <Head>
        <title>Afropocene StudioLab Kabalagala</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24, lg: 5 }}>
           <Flex>
            {/* <NextImage src={odurInstallation}  placeholder="blur" /> */}
            <ImageSlider slides={SlideData} />
            </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
                Afropocene StudioLab
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'1xl'}>
                Kabalagala, Kampala Uganda
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
                    Welcome to our (MeatSpace) Home
                </Text>
                <Text fontSize={'lg'}>
                The studio lab is a place for ideas big and small! With two floors in an industrial building, we
                provide space and community for experimentation and collaboration. So far the space has
                had several configurations: from studio space, to pop up museum, to a concert hall, and a
                film all in a year!
                </Text>
              </VStack>
              <Box>
                
              </Box>

            </Stack>
            <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Come Visit Us!
              </Text>
  
          </Stack>
          <Box>
          </Box>
        </SimpleGrid>
        <Box paddingBottom={10}>
        <MapContainer />

        </Box>

      </Container>
    );
  }