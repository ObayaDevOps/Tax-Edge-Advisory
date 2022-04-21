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
                      'Welcome to the Future of African Creativity...',
                      'A group of thinkers, creators and doers formed a team to explore Art in all forms  ...',
                      'From the Physical... To the Digital...',
                      'Linked by a shared passion to: Innovate. Create. Educate.',
                    ]}
                    typeSpeed={65}
                    font
                />

    </Container>
                
  )
}
