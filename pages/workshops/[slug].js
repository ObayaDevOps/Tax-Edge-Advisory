//this will be the template page for all workshops

//Link: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
//Link: How to get images : https://www.sanity.io/docs/how-queries-work#584ed2426ff5

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
    Link
  } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'

  
import client from '../../sanityClient'
import groq from 'groq'

import Head from 'next/head'
import NextLink from 'next/link'

import ImageSlider from '../../components/utils/carousel/imageSlider'


const Workshop = ({workshopPage}) => {

    return (
    <Container maxW={'7xl'}>
      <Head>
        <title>{workshopPage.artistName}: {workshopPage.workshopName}</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>


        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24, lg:5 }}>
          <Flex>
            {/* <NextImage src={odurInstallation}  placeholder="blur" /> */}
            {/* <NextImage src={workshopPage.slideShowImageUrls[0]} layout='responsive' /> */}

            <ImageSlider slides={workshopPage.slideShowImageUrls} />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {workshopPage.artistName}: {workshopPage.workshopName}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {workshopPage.subTitle}
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
                <Text fontSize={'lg'}>
                {workshopPage.workshopParagraphText}
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
                      {workshopPage.featuresList.map(feature =>
                      <ListItem key={feature}>
                        <Text as={'span'} fontWeight={'bold'}>
                            {feature}
                        </Text>
                    </ListItem>
                    )}
                  </List>
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
                    {workshopPage.artDetailsList.map(artDetail => 
                        <ListItem key={artDetail}>
                            <Text as={'span'} fontWeight={'bold'}>
                            {artDetail}
                            </Text>
                        </ListItem>  
                    )}
                </List>
              </Box>
            </Stack>
  
          </Stack>
        </SimpleGrid>
      </Container>
    )
}








export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "workshopPage" && defined(slug.current)][].slug.current`
    )

    console.log("paths:")
    console.log(paths) //prints the slug - is this what I need in navbar
    //remember all this routing only works in the 'pages' directory

    //so how to get into navbar ? - navbar cannot be a page

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: false,
    }
}

const query = groq`*[_type == "workshopPage" && slug.current == $slug][0]{
    artDetailsList,
    artistName,
    "artistPFPUrl": artistPFP.asset->url,
    currentlyActiveWorkshop,
    workshopEndDate,
    workshopName,
    workshopParagraphText,
    workshopStartDate,
    featuresList,
    "slideShowImageUrls": slideShowImages[].asset->url,
    subTitle,
    title
}`


export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params


    const workshopPage = await client.fetch(
        query, { slug }    
    )

    // console.log("RETURNR")
    // console.log(workshopPage)


    return {
        props: {
            workshopPage
        }
    }
}

export default Workshop