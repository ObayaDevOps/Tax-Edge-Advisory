import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaLinkedinIn } from 'react-icons/fa';


  import Image from 'next/image'
  import NextLink from 'next/link'
  import taxEdgeLogoBlack from '../../public/images/icon/logo-white-removebg.png'

  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2} fontFamily={'Space Mono'}>
        {children}
      </Text>
    );
  };
  
  export default function FooterLargeWithNewsletter() {
    return (
      <Box bg="blackAlpha.200" >
      <Box
      bgGradient="linear(to-r, green.700, green.200)"
      color={useColorModeValue('gray.700', 'gray.200')}
      // maxW={'85vw'} 
      shadow='2xl'  
       >
        <Container as={Stack} maxW={'6xl'} py={2}>
          <SimpleGrid
            templateColumns={{ base: '1fr 1fr'}}
            spacing={8}>
            <Stack spacing={6} >
              <Box>
                <NextLink href='/#'>
                <Image src={useColorModeValue( taxEdgeLogoBlack,taxEdgeLogoBlack)} width={350} height={350}/>
                </NextLink>
              </Box>
              <Text fontSize={'sm'} textColor='white'>
                © 2023 Tax Edge Advisory.
              </Text>
              <Text fontSize={'sm'} textColor='white'>
              Designed and Built by 
              <NextLink href='https://www.dralegawebops.com/'> ObayaDevOps</NextLink>
              
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/tax-edge-advisory/'}>
                  <FaLinkedinIn />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      </Box>
    );
  }