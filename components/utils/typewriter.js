import { Heading, Box, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import TypeWriterEffect from 'react-typewriter-effect';


export default function SimpleTypeWriter() {
  return (
    <Container centerContent>
      <TypeWriterEffect
                    textStyle={{ fontFamily: 'Space Mono', colour: '#FFFFFF', fontWeight: 500, fontSize:'2em' }}
                    startDelay={600}
                    cursorColor="black"
                    multiText={[
                      'GENESIS: 22/04/2022 06:35 EAT', 
                      'ETHEREUM BLOCK:27426567   ',
                      'HASH: 0x55bbc...738',
                      '---BEGIN MESSAGE---',
                      'Welcome to a new branch in the Future of African Creativity...',
                      'A group of thinkers, creators and doers formed a team to explore Art in all forms  ...',
                      'From the Physical... To the Digital...',
                      'Linked by a shared passion to: Innovate. Create. Educate.         ---END MESSAGE---', 
                    ]}
                    typeSpeed={65}
                    font
                />

    </Container>
                
  )
}
