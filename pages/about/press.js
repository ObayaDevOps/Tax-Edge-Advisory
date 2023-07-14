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
  Container,
  VStack,
} from '@chakra-ui/react';

import Head from 'next/head'
import NextLink from 'next/link'

import client from '../../sanityClient'
import groq from 'groq'


const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
          <Tag size={'md'} variant="solid" colorScheme="orange" key={props.tags}>
            {props.tags}
          </Tag>
    </HStack>
  );
};


export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const PressCard = (props) => {
  const { articleName, articleTag, articlePFP, pressArticleUrl, index  } = props;

  console.log("HEYO");
  console.log(props);



  return (
    <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
    <Box w="100%">
      <Box  overflow="hidden">
        <NextLink textDecoration="none" _hover={{ textDecoration: 'none' }} href={pressArticleUrl} passHref>
          <Image
            transform="scale(1.0)"
            src={articlePFP}
            alt="some text"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            rounded={'none'}
            _hover={{
              transform: 'scale(1.05)',
            }}
          />
        </NextLink>
      </Box>
      <BlogTags tags={articleTag} marginTop="3" />
      <Heading fontSize="xl" marginTop="2">
        <NextLink textDecoration="none" _hover={{ textDecoration: 'none' }} href={pressArticleUrl} passHref>
          {articleName}
        </NextLink>
      </Heading>
    </Box>

    
  </WrapItem>
  );
};


const ArticleList = ({pressCardPage}) => {
  return (
    <Container maxW={'7xl'} p="12" minH="80vh">
      <Heading as="h1">Afropocene in the News</Heading>
    
      <Head>
        <title>Press: Afropocene</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>



      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {pressCardPage.map((cardInfo, index) => (
          <PressCard {...cardInfo} index={index} key={index}/>
        ))}
      </Wrap>




    </Container>
  );
};



//I wanr the query to return all the info
const query = groq`*[_type == "pressCardPage"] | order(_createdAt asc) {
  articleName,
  articleTag,
  "articlePFP": articlePFP.asset->url,
  pressArticleUrl,
} `


export async function getStaticProps(context) {
  const pressCardPage = await client.fetch(
      query    
  )

  console.log("RETURNR5")
  console.log(pressCardPage)


  return {
      props: {
        pressCardPage
      },
      revalidate: 10, //In seconds

  }
}




export default ArticleList;