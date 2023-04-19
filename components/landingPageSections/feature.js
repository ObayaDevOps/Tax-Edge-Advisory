import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    Center,
    Button,
    AspectRatio,
    HStack,
  } from '@chakra-ui/react';

  import NextImage from 'next/image'
  import studio2 from '../../public/images/studio/afropocene-OdurAssistant.jpg'
  import studio3 from '../../public/images/studio/PaperEgg.png'
  import NextLink from 'next/link'
  

  
  export default function LandingPageSplitWithImage() {
    return (
      <Center p={8}>


        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>We Write New African Narratives</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            We are afrofuturists interested in exploring the cultural aesthetics, 
            philosophies of science and history that are borne of the developing 
            intersection of African/Africana diaspora culture with technology.

            Our mission is to help ... to create ... to inspire
            </Text>
            <NextLink href='../../../about/about-us' passHref>
              <Button size="md" color={'blue.500'} fontFamily="Space Mono"> More About Us</Button>
            </NextLink>
          </Stack>
          <Flex>
            <NextImage src={studio3} alt="work by kharumwa" placeholder="blur"/>
            </Flex>

          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>We Provide Space for Emerging Artists</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            A Co-Arts space for artists, researchers, thinkers, experimenters, developers & do-ers.
             We provide space and community for any and all explorers of African futures.
            </Text>
            <NextLink href='../../../studios/kabalagala-studio' passHref>
              <Button  size="md" color={'blue.500'} fontFamily="Space Mono">Explore the Studio</Button>
            </NextLink>



          </Stack>
          <Flex>
            <NextImage src={studio2} alt="work by kharumwa"  placeholder="blur"/>
          </Flex>

          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>We Innovate with Creative Technology</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            We also have extensive experience with Technology and Software Development
             and we have plans to merge the worlds of Nature, Art and Technology...
            </Text>
            <NextLink href='../../../tech/this' passHref>
              <Button size="md" color={'blue.500'} fontFamily="Space Mono">Explore Tech+Art</Button>
            </NextLink>
          </Stack>
          <Flex>
            <AspectRatio ratio={4/3}  float="left" clear="both" width={'85vw'} height={{base:'45vh', md:'55vh'}} left >
              <iframe 
              loop={true}
              autoPlay
              muted
              src={'../../../video/Reaction-Diffusion.mp4'} 
              allow="autoplay"
              title="Reaction-Diffusion-Clip" ></iframe>

            </AspectRatio>

          </Flex>
        </SimpleGrid>
       </Center>
    );
  }