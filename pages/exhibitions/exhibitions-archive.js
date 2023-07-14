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
import museumOfSelves from '../../public/images/exhibitions/museum-of-selves/wide-shot-museum-of-selves.jpg'
import bookOfOwaz from '../../public/images/exhibitions/kharumwa-book-of-owaz-kla-art/Martin-10-scaled.jpg'
import alokaPhoto2 from '../../public/images/exhibitions/aloka-ready-for-export/aloka2.jpg'
import btsStudio from '../../public/images/studio/AfropoceneStudio65.jpg'

//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed
import client from '../../sanityClient'
import groq from 'groq'


//This exhibition details should be replaced by the data coming from sanity:
  

const exhibitionDetails = [
  {
    exhibitionName: 'Muwawa',
    artistName: 'Odur',
    startDate: '2021-04-06',
    endDate: '2021-04-06',
    headerExhibition: true,
    active: true,
    blogTags: ['Installation', 'Sculpture', 'Aluminium'],
    exhibitionDescription:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
    photo: odurMuwawaPhoto,
    artistPFP: odurPFP,
    linkToExhibition: '/exhibitions/odur-muwawa-exhibition',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    exhibitionName: 'Book of Owaz',
    artistName: 'Kharumwa',
    startDate: '2021-04-06',
    endDate: '2021-04-06',
    headerExhibition: true,
    active: true,
    blogTags: ['Installation','Plastic', 'Photography', 'Futuristic'],
    exhibitionDescription:"“The Book of Owaz”, borrowing from a medieval devotional that was filled with creative illustrations of spiritual and seasonal guidelines of that time.",
    photo: bookOfOwaz,
    artistPFP: odurPFP,
    linkToExhibition: '/exhibitions/kharumwa-book-of-owaz-exhibition',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    exhibitionName: 'Ready For Export',
    artistName: 'Aloka',
    startDate: '2021-04-06',
    endDate: '2021-04-06',
    headerExhibition: true,
    active: true,
    blogTags: ['Installation','Sack', 'Oil Paint'],
    exhibitionDescription:"An export clearance area as an inquiry into migratory labour practices among young people.",
    photo: alokaPhoto2,
    artistPFP: odurPFP,
    linkToExhibition: '/exhibitions/aloka-ready-for-export-exhibition',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    exhibitionName: 'Museum Of Selves',
    artistName: 'Allan Kyakonye',
    startDate: '2021-04-06',
    endDate: '2021-04-06',
    headerExhibition: true,
    active: true,
    blogTags: ['Portraiture','Egg Tempera', 'Bark Cloth'],
    exhibitionDescription:"A collaborative exhibition which brought together the egg tempera portrait works of Kyakonye Allan and the works of Kampala students who participated in the workshop.",
    photo: museumOfSelves,
    artistPFP: odurPFP,
    linkToExhibition: '/exhibitions/museum-of-selves-exhibition',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    exhibitionName: 'Boda Stage Concert',
    artistName: 'Nyarawaves',
    startDate: '2022-04-06',
    endDate: '2022-04-06',
    headerExhibition: false,
    active: false,
    blogTags: ['Music','Performance'],
    exhibitionDescription:"For one night only Afropocene transformed into a concert hall for the launch of Nyarawaves EP, Polar. The night kicked off with live performances for Izaya the composer and Wana DJ (Benjain Wana).",
    photo: museumOfSelves,
    artistPFP: odurPFP,
    linkToExhibition: '/exhibitions/boda-stage-concert',
    followLink:
        'https://www.instagram.com/afropocene/',
  },

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
      <Text>{props.date.toLocaleDateString()}</Text>
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



function ExhibitionCard(props) {

  // console.log("RETURNR3")
  // console.log(props)


  const {exhibitionName,artistName,exhibitionStartDate, featuresList, archivePageDisplayShortDescription,
     archiveDisplayImage, slug
    } = props;  



  return (
          <Box w="100%">
            <Box overflow="hidden">
              <NextLink href={slug} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <NextImage
                 src={archiveDisplayImage} 
                 height={1824} width={2736}
                 ></NextImage>
              </Link>
              </NextLink>
            </Box>
            <BlogTags tags={featuresList} marginTop="3" />
            <Heading fontSize="2xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {exhibitionName}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {archivePageDisplayShortDescription}
            </Text>
            <BlogAuthor
              name={artistName}
              date={new Date(exhibitionStartDate)}
            />
          </Box>

  )

}

// tHis is what is exported:

// I need to show that I can access the sanoty ehibition data here too , just like in [slug]
const ExhibitionList = ({exhibitionPage}) => {

  return (
    <Container maxW={'7xl'} p="3">
      <Head>
        <title>Exhibition Archive: Afropocene</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

      <Heading as="h1" size={'3xl'}>Exhibitions at the StudioLab</Heading>
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
          {exhibitionPage.map((cardInfo, index) => (
            <ExhibitionCard {...cardInfo} index={index} key={index} />
          ))}
        </SimpleGrid>
    </Container>
  );
};





//I wanr the query to return all the info
const query = groq`*[_type == "exhibitionPage"]{
  exhibitionName,
  artistName,
  exhibitionStartDate,
  featuresList,
  archivePageDisplayShortDescription,
  "archiveDisplayImage":archiveDisplayImage.asset->url,
  "slug": slug.current
}`


export async function getStaticProps(context) {
  const exhibitionPage = await client.fetch(
      query    
  )

  // console.log("RETURNR2")
  // console.log(exhibitionPage)


  return {
      props: {
          exhibitionPage
      },
      revalidate: 10,

  }
}





export default ExhibitionList;