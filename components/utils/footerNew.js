'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Button,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

import NextLink from 'next/link'
import taxEdgeLogoBlack from '../../public/images/icon/logo-black-cropped.webp'
import Image from 'next/image'



const Logo = (props) => {
  return (
    <NextLink href='/#'>
        <Image src={taxEdgeLogoBlack} width={250/2} height={120/2}/>
  </NextLink>
  )
}

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
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr  2fr' }}
          spacing={8}>
          <Stack spacing={{base: 4,md:2}}>
            <Box>
              <Logo  />
            </Box>

            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/tax-edge-advisory/'}>
                <FaLinkedin />
              </SocialButton>
              <Button as='a' href='https://www.dralegawebops.com/' size='sm' colorScheme='green' fontSize={{base:'xs',md:'xs'}} pt={{md: 1}}>
              Built by DWO
             </Button>

            </Stack>
            <Box>
            <Text fontSize={'sm'}>© 2023 Tax Edge Advisory. All rights reserved</Text>
            </Box>

          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              Contact us
            </Box>
            <Box as="a" href={'#'}>
              Testimonials
            </Box>
          </Stack> */}
          <Stack align={{base:'flex-start', md:'flex-end'}} pt={{md:4}}>
            {/* <ListHeader>Support</ListHeader> */}
            <Box>
                <Text fontSize={'lg'}>contact@taxedgeadvisory.co.uk</Text>
            </Box>
            <Box>
                <Text fontSize={'lg'}>0700000000</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'}>Plot 64, Mayfair, London</Text>
            </Box>



          </Stack>

        </SimpleGrid>
      </Container>
    </Box>
  )
}