import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  useColorMode,
  Container,
  VStack,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';

import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'

import odurMuwawaPhoto from '../../public/images/exhibitions/odur-muwawa-kla-art/odur-studio-plants.jpg'
import odurPFP from '../../public/images/team/Odur/Odur2022.jpg'
import FoteaPhoto from '../../public/images/workshops/Fotea-Kharumwa.png'
import MuseumOfselvesWorkshopPhoto from '../../public/images/workshops/museum-of-selves/MuseumOfSelves1.jpg'

//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed


const workshopDetails = [
  {
    workshopName: 'Nothing New Under the Sun',
    artistName: 'Kharumwa',
    startDate: '2022-04-22',
    endDate: '2022-04-22',
    headerWorkshop: true,
    active: true,
    blogTags: ['Photography'],
    workshopDescription: 
    "This creative workshop was produced by Martin Kharumwa in collaboration with Fotea an organisation dedicated to producing photographic and visual literacy education programs.",
    photo: FoteaPhoto,
    artistPFP: odurPFP,
    linkToWorkshop: '/workshops/kharumwa-fotea-workshop',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    workshopName: 'Museum of Selves Workshop',
    artistName: 'Allan Kyakman',
    startDate: '2021-12-21',
    endDate: '2021-12-21',
    headerWorkshop: true,
    active: true,
    blogTags: ['Mixed Media', 'Youth'],
    workshopDescription:"Artist Allan Kyakman worked with high school students from around kampala to explore ideas of representation, self imaging and identity as an ever evolving process.",
    photo: MuseumOfselvesWorkshopPhoto,
    artistPFP: odurPFP,
    linkToWorkshop: '/workshops/museum-of-selves-workshop', 
    followLink:
        'https://www.instagram.com/afropocene/',
  }
];





export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {/* <Image
        borderRadius="full"
        boxSize="40px"
        src={artistPFP}
        alt={`Avatar of ${props.artistName}`}
      /> */}
      <Text fontWeight="medium">{props.artistName}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString('en-GB')}</Text>
    </HStack>
  );
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



function WorkshopCard(props) {
  const { workshopName, artistName, startDate, endDate, headerWorkshop, active, blogTags, workshopDescription,
     photo, artistPFP, linkToWorkshop,  followLink ,index  } = props;

  return (
          <Box w="100%">
            <Box overflow="hidden">
              <NextLink href={linkToWorkshop} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <NextImage src={photo} ></NextImage>
                {/* <Image
                  transform="scale(1.0)"
                  src={photo}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                /> */}
              </Link>
              </NextLink>
            </Box>
            <BlogTags tags={blogTags} marginTop="3" />
            <Heading fontSize="2xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {workshopName}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {workshopDescription}
            </Text>
            <BlogAuthor
              name={artistName}
              date={new Date(startDate)}
            />
          </Box>

  )

}


const WorkshopList = () => {

  return (
    <Container maxW={'7xl'} p="3">
      <Head>
        <title>Workshops: Afropocene</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

      <Heading as="h1" size={'3xl'}>Workshops at the StudioLab</Heading>
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
          {/* <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                
                src={'../../../images/workshops/studioWorkshop.jpg'}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(blue.600 1px, transparent 1px)',
                'radial(blue.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box> */}
        </Box>
        {/* <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1">
            <NextLink href={'/studios/contact-enquiry'} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Host your Workshop with Us!
              </Link>
            </NextLink>

          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Host your workshop with Afropocene !
          </Text>
        </Box> */}
      </Box>
      <Heading as="h2" marginTop="10">
        Archive
      </Heading>
      <Divider marginTop="5" />

      <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {workshopDetails.map((cardInfo, index) => (
            <WorkshopCard {...cardInfo} index={index} key={index} />
          ))}
        </SimpleGrid>
    </Container>
  );
};

export default WorkshopList;
