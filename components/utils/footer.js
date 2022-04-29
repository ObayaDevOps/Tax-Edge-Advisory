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
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 0.2fr' }}
            spacing={8}>
            <Stack spacing={6} >
              <Box>
                <Image src={useColorModeValue( africaIcon,africaIconWhite)} width={40} height={40}/>
              </Box>
              <Text fontSize={'sm'} fontFamily={'Space Mono'}>
                © 2022 Afropocene StudioLab.
                Designed and Built in Kampala
              </Text>
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
            <Stack align={'flex-start'}>
              {/* <ListHeader fontFamily={'Space Mono'}>Company</ListHeader>
              <NextLink href={'/studios/contact-enquiry'} passHref>
                <Link fontFamily={'Space Mono'}>Contact us</Link>
              </NextLink> */}

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('blue.400', 'blue.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }