import { Heading, Box, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import TypeWriterEffect from 'react-typewriter-effect';


export default function SimpleTypeWriter() {
  return (
    <Container centerContent>
      <TypeWriterEffect
                    textStyle={{ fontFamily: 'Space Mono', fontWeight: 50, fontSize:'2.3em' }}
                    startDelay={600}
                    // cursorColor="white"
                    // color="red"
                    multiText={[
                      'Cherish the Gift of Sight'

                    ]}
                    typeSpeed={65}
                    font
                />

    </Container>
                
  )
}
