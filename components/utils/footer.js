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
  import { FaInstagram } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { IoMdPlanet } from 'react-icons/io';
  import { HiOutlineMail } from 'react-icons/hi';  

  import Image from 'next/image'
  import NextLink from 'next/link'
  import africaIcon from '../../public/images/icon/africa.png'
  import africaIconWhite from '../../public/images/icon/africa-white-icon.png'

  
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
      <Box
        bg={useColorModeValue('gray.50', 'gray.800')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            // templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr' }}

            spacing={8}>
            <Stack spacing={6} >
              <Box text="left">
                <NextLink href='/#' passHref>
                <Image src={useColorModeValue( africaIcon,africaIconWhite)} width={40} height={40}/>
                </NextLink>
              </Box>
              <Text fontSize={'sm'} fontFamily={'Space Mono'}>
                © 2022 Afropocene StudioLab.
                Designed and Built in Kampala by&nbsp;               
                <NextLink href="https://obaya.me/">
                      Obaya
                </NextLink>  
              </Text>
              <Stack align={'flex-start'}>
              <Link href={'/studio'}>
                <Text fontSize={'sm'} fontFamily={'Space Mono'}>
                  Editor Studio
                </Text>
                </Link>
              <Link href={'https://www.sanity.io/manage/personal/project/udf0dgps'}>
                <Text fontSize={'sm'} fontFamily={'Space Mono'}>
                  Admin Panel
                </Text>
              </Link>
            </Stack>

              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Instagram'} href={'https://www.instagram.com/afropocene/'}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={'Email'} href={'https://www.instagram.com/afropocene/'}>
                  <HiOutlineMail />
                </SocialButton>
                <SocialButton label={'NFT Gallery'} href={'https://oncyber.io/spaces/Gaq0PmUWPt9sbOio7aUt'}>
                  <IoMdPlanet />
                </SocialButton>
              </Stack>
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>
    );
  }