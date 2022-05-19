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



const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
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

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Afropocene in the News</Heading>
    
      <Head>
        <title>Press: Afropocene</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>



      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box  overflow="hidden">
              <NextLink textDecoration="none" _hover={{ textDecoration: 'none' }} href="https://www.zammagazine.com/arts/1479-africa-in-venice-a-guide">
                <Image
                  transform="scale(1.0)"
                  src={'../../../images/press/ZamFull.png'}
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
            <BlogTags tags={['Venice Biennale 2022']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <NextLink textDecoration="none" _hover={{ textDecoration: 'none' }} href="https://www.zammagazine.com/arts/1479-africa-in-venice-a-guide">
                ZAM Magazine: Africa in Venice. A Guide
              </NextLink>
            </Heading>
            {/* <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text> */}
            {/* <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            /> */}
          </Box>

          
        </WrapItem>

        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box  overflow="hidden">
              <NextLink textDecoration="none" _hover={{ textDecoration: 'none' }} href="https://www.artforum.com/picks/odur-ronald-87064">
                <Image
                  transform="scale(1.0)"
                  src={'../../../images/press/ArtForumFull.png'}
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
            <BlogTags tags={['KLA ART 2021']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <NextLink textDecoration="none" _hover={{ textDecoration: 'none' }} href="https://www.artforum.com/picks/odur-ronald-87064">
                ART FORUM: Odur Ronald at Afropocene
              </NextLink>
            </Heading>
            {/* <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text> */}
            {/* <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            /> */}
          </Box>

          
        </WrapItem>



      </Wrap>
    </Container>
  );
};

export default ArticleList;