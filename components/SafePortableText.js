import { PortableText } from '@portabletext/react'
import { Box, Text, Heading, Image } from '@chakra-ui/react'

const components = {
  block: {
    h1: ({ children }) => (
      <div contentEditable={false}>
        <Heading as="h1" size="2xl" mb={4}>
          {children}
        </Heading>
      </div>
    ),
    h2: ({ children }) => (
      <div contentEditable={false}>
        <Heading as="h2" size="xl" mb={3}>
          {children}
        </Heading>
      </div>
    ),
    normal: ({ children }) => (
      <div contentEditable={false}>
        <Text mb={4}>
          {children}
        </Text>
      </div>
    ),
  },
  types: {
    image: ({ value }) => (
      <div contentEditable={false}>
        <Box my={4}>
          <Image
            src={value.url}
            alt={value.alt || ''}
            borderRadius="lg"
            userSelect="none"
          />
        </Box>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <div contentEditable={false}>
        <Box
          as="a"
          href={value.href}
          display="inline-block"
          color="blue.500"
        >
          {children}
        </Box>
      </div>
    ),
  },
}

export default function SafePortableText({ value }) {
  if (!value) {
    return null
  }

  try {
    return (
      <Box userSelect="none">
        <PortableText
          value={value}
          components={components}
        />
      </Box>
    )
  } catch (error) {
    console.error('PortableText render error:', error)
    return <Text color="red.500">Error rendering content</Text>
  }
} 