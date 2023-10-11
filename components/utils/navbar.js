import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  AbsoluteCenter,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  Spacer
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import NextImage from 'next/image'
import taxEdgeLogo from '../../public/images/icon/logo-white-removebg-crop.png'


import NextLink from 'next/link'
import { MdNightlight } from 'react-icons/md';
import Script from 'next/script'
import { FaBeer } from 'react-icons/fa';
import theme from './theme';


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()


  
  return (
    <Box  margin='auto' bg={'blackAlpha.200'} pt={{md:5}} >
      <Flex
        bgGradient="linear(to-r, green.600, green.500)"
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2, md:3 }}
        px={{ base: 4 }}
        shadow="xl"

        margin='auto'
        rounded={{md:'3xl'}}
        maxW={{md:'85vw'}}
        maxH={{md: '8vh'}}
        >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          // ml={{ base: -2 }}
          p={6}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon color='white' w={5} h={5} /> : <HamburgerIcon color='white' w={6} h={6} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }} ml={{base:-40, md: 0}} mt={{base:2}}>
          <Box mt={{lg: -2}}>
        <NextLink href='/#' passHref >
          <Link>
              <NextImage src={colorMode === 'light' ? taxEdgeLogo:  taxEdgeLogo} width={730/6} height={351/6} />
          </Link>
        </NextLink>
        </Box>


          <Flex display={{ base: 'none', md: 'flex' }} marginLeft={{lg:'7vw'}} >
            <DesktopNav />
          </Flex>
        </Flex>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('black', 'gray.50');
  const popoverContentBgColor = useColorModeValue('white', 'black');
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Stack direction={'row'} spacing={4} paddingTop={{md:4}} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <NextLink href={navItem.href ?? '#'} passHref>
              <PopoverTrigger>
                <Link
                p={5}
                fontSize={{md:'sm', lg:'md'}}
                href={navItem.href ?? '#'}
                fontWeight={550}
                fontFamily={'Helvetica'}
                rounded="lg"
                textColor='white'
                

                color={linkColor}
                _hover={{ bg: colorMode === 'light' ? 'green.50': 'gray.700', textColor: 'green.400'}}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </NextLink>


            {navItem.children && (
              <PopoverContent
              w={{ base: "240px", md: "320px" }}
                border={0}
                boxShadow={'lg'}
                bg={popoverContentBgColor}
                p={4}
                // fontFamily={'Helvetica'}
                rounded="lg"
                // minW={'sm'}
                
                >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NextLink href={href} passHref>
    <Link
      role={'group'}
      display={'block'}
      p={2}
      // rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
      >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }}
            fontWeight={300}
            _hover={{ color: 'green.400' }}
            fontSize={'lg'}

            >
            {label}
          </Text>

          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
    </NextLink>

  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('whiteAlpha.600', 'black')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        // fontFamily="Space Mono"

        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <NextLink href={child.href} key={child.label} passHref>
                <Link  py={2}  fontFamily="Space Mono">
                  {child.label}
                </Link>
              </NextLink>

            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [  
  {
    label: 'Tax Calculator',
    href: '/tax/tax-calculator',
  },
  {
    label: 'Research & Development',
    href: '/research-and-dev/research-and-dev-landing-page',
  },
  {
    label: 'Capital Allowances',
    href: '/capital-allowance/capital-allowance-info',
  },
  {
    label: 'Client Testimonials',
    href: '/past-work/client-testimonials',
  },
  {
    label: 'Contact Us',
    href: '/info/contact-enquiry',
  },

];