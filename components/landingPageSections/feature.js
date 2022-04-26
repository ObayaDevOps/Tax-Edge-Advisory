import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    Center,
    Button
  } from '@chakra-ui/react';

  import NextImage from 'next/image'
  import studio1 from '../../public/images/studio/afropocene-studio2.jpg'
  import studio2 from '../../public/images/studio/afropocene-OdurAssistant.jpg'
  import studio3 from '../../public/images/studio/PaperEgg.png'
import theme from '../utils/theme';
  

  
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
            <Button size="md" color={'blue.500'} fontFamily="Space Mono"> More About Us</Button>
          </Stack>
          <Flex>
            <NextImage src={studio1} alt="work by kharumwa" placeholder="blur" />
          </Flex>

          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>We Provide Space for Emerging Artists</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            A Co-Arts space for artists, researchers, thinkers, experimenters, developers & do-ers.
             We provide space and community for any and all explorers of African futures.
            </Text>
            <Button size="md" color={'blue.500'} fontFamily="Space Mono">Explore the Studio</Button>


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
            <Button size="md" color={'blue.500'} fontFamily="Space Mono">Explore Tech+Art</Button>
          </Stack>
          <Flex>
            <NextImage src={studio3} alt="work by kharumwa" placeholder="blur"/>
          </Flex>
        </SimpleGrid>
       </Center>
    );
  }