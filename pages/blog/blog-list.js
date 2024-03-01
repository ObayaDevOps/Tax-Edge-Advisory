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


//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed
import client from '../../sanityClient'
import groq from 'groq'


  

// const exhibitionDetails = [
//   {
//     exhibitionName: 'Muwawa',
//     artistName: 'Odur',
//     startDate: '2021-04-06',
//     endDate: '2021-04-06',
//     headerExhibition: true,
//     active: true,
//     blogTags: ['Installation', 'Sculpture', 'Aluminium'],
//     exhibitionDescription:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
//     photo: odurMuwawaPhoto,
//     artistPFP: odurPFP,
//     linkToExhibition: '/exhibitions/odur-muwawa-exhibition',
//     followLink:
//         'https://www.instagram.com/afropocene/',
//   },

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
      <Text fontWeight="medium">{props.authorName}</Text>
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



function BlogCard(props) {

  // console.log("RETURNR3")
  // console.log(props)


  const {blogName,authorName,blogDate, blogTagList, blogLandingPageDisplayShortDescription,
    blogLandingDisplayImage, slug
    } = props;  



  return (
          <Box w="100%">
            <Box overflow="hidden">
              <NextLink href={slug} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <NextImage
                 src={blogLandingDisplayImage} 
                 height={1824} width={2736}
                 ></NextImage>
              </Link>
              </NextLink>
            </Box>
            <BlogTags tags={blogTagList} marginTop="3" />
            <Heading fontSize="2xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {blogName}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {blogLandingPageDisplayShortDescription}
            </Text>
            <BlogAuthor
              name={authorName}
              date={new Date(blogDate)}
            />
          </Box>

  )

}

// tHis is what is exported:

// I need to show that I can access the sanoty ehibition data here too , just like in [slug]
const BlogList = ({blogPage}) => {

  return (
    <Container maxW={'7xl'} p="3">
      <Head>
        <title>Blog Articles</title>
        <meta name="description" content="Tax Edge Advisory Webpage" />
        <link rel="shortcut icon" href="../../public/images/icon/logo-black.svg"></link>
      </Head>

      <Heading
              as={'h1'}
                mb={{base: 2, md: 6}}
                fontSize={{ base: "5xl",md: "6xl", lg:"7xl",}}
                minHeight={'1vh'}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{base: "normal",md: "tight" }}
                color="green.900"
                textAlign='center'
              >
                <Text
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, green.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  pt={8}
                  pb={6}
                >
                  Tax Edge Advisory Blog Articles
                </Text>
              </Heading>
      
      
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="10">
        Blog Articles
      </Heading>
      <Divider marginTop="5" />

      <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {blogPage.map((cardInfo, index) => (
            <BlogCard {...cardInfo} index={index} key={index} />
          ))}
        </SimpleGrid>
    </Container>
  );
};





//I wanr the query to return all the info
const query = groq`*[_type == "blogPage"]{
    blogName,
    authorName,
    blogDate,
    blogTagList,
    blogLandingPageDisplayShortDescription,
    "blogLandingDisplayImage":blogLandingDisplayImage.asset->url,
    "slug": slug.current
}`


export async function getStaticProps(context) {
  const blogPage = await client.fetch(
      query    
  )

  console.log("RETURNR2")
  console.log(blogPage)


  return {
      props: {
        blogPage
      },
      revalidate: 10,

  }
}





export default BlogList;