import { Heading, Box, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import TypeWriterEffect from 'react-typewriter-effect';


export default function SimpleTypeWriter() {
  return (
    <Container centerContent>
      <TypeWriterEffect
                    textStyle={{ fontFamily: 'Space Mono', color: '#FFFFFF', fontWeight: 50, fontSize:'2.3em' }}
                    startDelay={600}
                    // cursorColor="white"
                    // color="red"
                    multiText={[
                      // 'AFROPOCENE GENESIS: 22/04/2022 06:35-EAT ETHEREUM BLOCK:27426567   ', 
                      // // 'ETHEREUM BLOCK:27426567   ',
                      // // 'HASH: 0x55bbc...738',
                      // 'HASH: 0x55bbc...738  ---BEGIN MESSAGE---',
                      // '---BEGIN MESSAGE---',
                      'Welcome to a new branch in the Future of African Creativity...',
                      'A group of thinkers, creators and doers formed a team to explore Art in all forms  ...',
                      'From the Physical... To the Digital...',
                      // 'Linked by a shared passion to: Innovate. Create. Educate.         ---END MESSAGE---', 
                      'Linked by a shared passion to: Innovate. Create. Educate. ', 

                    ]}
                    typeSpeed={65}
                    font
                />

    </Container>
                
  )
}
