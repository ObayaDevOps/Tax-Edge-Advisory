import { Heading, Box, Container, SimpleGrid, Center} from '@chakra-ui/react'
import dynamic from 'next/dynamic'


const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )


export default function LandingPage() {
  return (
    <Box>

    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    >
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" backgroundImage={{base: '../../../images/backgrounds/MandelbrotMediumDark.jpg', lg:'../../../images/backgrounds/MandelbrotLargeDark.jpg' }}> 
            <Center p={{sm:1 , md:10}} >
                <Heading
                 as='h1'
                 size='3xl'
                textAlign="center"
                color="white"
                pt={{base: 10, md: 20}}
                pb={{base: 5}}
                 >
                   Tax Edge Advisory
                </Heading>
            </Center>

            {/* Scrolling Text */}
            <Container maxW='md' centerContent     zIndex={1}>
                <DynamicTypeWriterWithNoSSR/>
            </Container>

        </Box>
      </SimpleGrid>
      </Box>
  )
}
