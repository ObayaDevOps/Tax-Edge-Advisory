import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Show,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    Container,
    useToast,
    SimpleGrid,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
  import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  import Head from 'next/head'
  import { useState } from 'react'
  import NextImage from 'next/image';

  import constructionIllustration  from '../../public/images/illustrations/undraw_under_construction_-46-pa.svg';


  //We add the rest of the code here : https://greedytaker.in/nextjs/email-sending-contact-page-nextjs


  import client from '../../sanityClient'
  import imageUrlBuilder from '@sanity/image-url'
  
  const builder = imageUrlBuilder(client)
  
  function urlFor(source) {
    return builder.image(source)
  }
  
  export async function getStaticProps(context) {
    const contactUsPageContent = await client.fetch(`
    *[_type == "contactUsPage"]`);
  
    return {
      props: {
        contactUsPageContent,
      },
      revalidate: 10, //In seconds
    };
  }
  
  
  

  export default function ContactFormWithSocialButtons({contactUsPageContent}) {
    const pageContent  = contactUsPageContent[0] || [];

    console.log(pageContent)

    const { hasCopied, onCopy } = useClipboard('contact@taxedgeadvisory.co.uk');
    const [submitted, setSubmitted] = useState(false);


    const userData = async event => {
      event.preventDefault()
      setSubmitted(true)

      let userTypedData = {
        Name: event.target.name.value,
        Email: event.target.email.value,
        Message: event.target.message.value
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userTypedData)
      })
    }

    const toast = useToast()
  
    return (
      <Flex
        bg={'blackAlpha.200'}
        align="center"
        justify="center"
        id="contact"
        pt={8} pb={12}
        >

      <Head>
        <title>Tax Edge Advisory Enquiry</title>
        <meta name="description" content="Tax Edge Advisory Webpage" />
        <link rel="icon" href="../public/images/icon/logo-black.svg" />

      </Head>

      <Container
              maxW={{base:'1xl',md:'85vw'}} 
              py={12} 
              minHeight={{md:'110Fvh'}}   
              rounded='3xl' 
              shadow='2xl'    
              background="rgba(240,255,244,0.65)"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 5 }}>
          <Box >
            <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                  lg: '6xl'
                }}
                bgClip="text"
                bgGradient="linear(to-r, green.900, green.300)"
                textAlign={{base:'center'}}
                >
                  {pageContent.headingTop}
              </Heading>
  
              <SimpleGrid columns={{base:1, md:2}}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 8 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: 'row', md: 'column' }}>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'green.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      onClick={onCopy}
                      // isRound
                    />
                  </Tooltip>
                  
                  <Link href="https://www.linkedin.com/company/tax-edge-advisory" >
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'green.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      // isRound
                    />
                  </Link>
                </Stack>
  
                <Box
                  bg={'white'}
                  shadow='4xl'
                  borderRadius="lg"
                  p={8}
                  color={'gray.700'}
                  >
                  <form onSubmit={(e) => userData(e)}>
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel htmlFor="name">Name</FormLabel>
    
                        <InputGroup>
                          <InputLeftElement>
                            <BsPerson />
                          </InputLeftElement>
                          <Input id="name" type="text" name="name" placeholder="Your Name" />
                        </InputGroup>
                      </FormControl>
    
                      <FormControl isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
    
                        <InputGroup>
                          <InputLeftElement>
                            <MdOutlineEmail />
                          </InputLeftElement>
                          <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>
    
                      <FormControl isRequired>
                        <FormLabel htmlFor="message">Message</FormLabel>
    
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                        />
                      </FormControl>
    
                      <Button
                      type="submit"
                        colorScheme="green"
                        bg="green.400"
                        color="white"
                        _hover={{
                          bg: 'green.500',
                        }}
                        isFullWidth
                        onClick={() =>
                          toast({
                            title: 'Message Sent.',
                            description: "We will get back to you soon!",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })}
        
                        >
                        Send Message
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </Stack>

              <Box>

                <NextImage src={urlFor(pageContent.pageImage).url()} width={500} height={500}   />

              </Box>
              </SimpleGrid>

            </VStack>
          </Box>
        </Box>
        </Container>
      </Flex>
    );
  }