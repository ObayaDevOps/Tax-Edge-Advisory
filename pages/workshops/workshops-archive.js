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

import client from '../../sanityClient'
import groq from 'groq'


//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed


// const workshopDetails = [
//   {
//     workshopName: 'Nothing New Under the Sun',
//     artistName: 'Kharumwa',
//     startDate: '2022-04-22',
//     endDate: '2022-04-22',
//     headerWorkshop: true,
//     active: true,
//     blogTags: ['Photography'],
//     workshopDescription: 
//     "This creative workshop was produced by Martin Kharumwa in collaboration with Fotea an organisation dedicated to producing photographic and visual literacy education programs.",
//     photo: FoteaPhoto,
//     artistPFP: odurPFP,
//     linkToWorkshop: '/workshops/kharumwa-fotea-workshop',
//     followLink:
//         'https://www.instagram.com/afropocene/',
//   },
//   {
//     workshopName: 'Museum of Selves Workshop',
//     artistName: 'Allan Kyakman',
//     startDate: '2021-12-21',
//     endDate: '2021-12-21',
//     headerWorkshop: true,
//     active: true,
//     blogTags: ['Mixed Media', 'Youth'],
//     workshopDescription:"Artist Allan Kyakman worked with high school students from around kampala to explore ideas of representation, self imaging and identity as an ever evolving process.",
//     photo: MuseumOfselvesWorkshopPhoto,
//     artistPFP: odurPFP,
//     linkToWorkshop: '/workshops/museum-of-selves-workshop', 
//     followLink:
//         'https://www.instagram.com/afropocene/',
//   }
// ];





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

  // console.log("RETURNR3")
  // console.log(props)



  const {workshopName,artistName,workshopStartDate, featuresList, archivePageDisplayShortDescription,
     archiveDisplayImage, slug
    } = props;  



  return (
          <Box w="100%">
            <Box overflow="hidden">
              <NextLink href={slug} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <NextImage 
                src={archiveDisplayImage} 
                height={1824} 
                width={2736}></NextImage>
              </Link>
              </NextLink>
            </Box>
            <BlogTags tags={featuresList} marginTop="3" />
            <Heading fontSize="2xl" marginTop="2">
            <NextLink href={slug} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {workshopName}
              </Link>
              </NextLink>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {archivePageDisplayShortDescription}
            </Text>
            <BlogAuthor
              name={artistName}
              date={new Date(workshopStartDate)}
            />
          </Box>

  )

}


const WorkshopList = ({workshopPage}) => {

  return (
    <Container maxW={'7xl'} p="3">
      <Head>
        <title>Workshop Archive: Afropocene</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

      <Heading as="h1" size={'3xl'}>Workshops at the StudioLab</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
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
          {workshopPage.map((cardInfo, index) => (
            <WorkshopCard {...cardInfo} index={index} key={index} />
          ))}
        </SimpleGrid>
    </Container>
  );
};



//I wanr the query to return all the info
const query = groq`*[_type == "workshopPage"]{
  workshopName,
  artistName,
  workshopStartDate,
  featuresList,
  archivePageDisplayShortDescription,
  "archiveDisplayImage":archiveDisplayImage.asset->url,
  "slug": slug.current
}`


export async function getStaticProps(context) {
  const workshopPage = await client.fetch(
      query    
  )

  // console.log("RETURNR2")
  // console.log(workshopPage)


  return {
      props: {
          workshopPage
      },
      revalidate: 10, //In seconds

  }
}

export default WorkshopList;
