import { PortableText } from '@portabletext/react'
import { urlFor } from '../sanityClient'
import { Box, Text, Heading, Image, Link } from '@chakra-ui/react'

const components = {
  block: {
    h1: ({children}) => (
      <Heading as="h1" size="2xl" my={4}>
        {children}
      </Heading>
    ),
    h2: ({children}) => (
      <Heading as="h2" size="xl" my={4}>
        {children}
      </Heading>
    ),
    h3: ({children}) => (
      <Heading as="h3" size="lg" my={3}>
        {children}
      </Heading>
    ),
    normal: ({children}) => (
      <Text mb={4}>
        {children}
      </Text>
    ),
    blockquote: ({children}) => (
      <Box 
        as="blockquote" 
        borderLeft="4px" 
        borderColor="green.200" 
        pl={4} 
        py={2} 
        my={4}
      >
        <Text fontStyle="italic">{children}</Text>
      </Box>
    ),
  },
  list: {
    bullet: ({children}) => (
      <Box as="ul" pl={4} my={4}>
        {children}
      </Box>
    ),
    number: ({children}) => (
      <Box as="ol" pl={4} my={4}>
        {children}
      </Box>
    ),
  },
  listItem: {
    bullet: ({children}) => (
      <Box as="li" pb={1}>
        {children}
      </Box>
    ),
  },
  marks: {
    link: ({value, children}) => {
      return (
        <Link href={value?.href} color="green.500" isExternal>
          {children}
        </Link>
      )
    },
    strong: ({children}) => <Text as="strong">{children}</Text>,
    em: ({children}) => <Text as="em">{children}</Text>,
    code: ({children}) => (
      <Text 
        as="code" 
        bg="gray.100" 
        p={1} 
        rounded="sm"
      >
        {children}
      </Text>
    ),
  },
  types: {
    image: ({value}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Box my={4}>
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ' '}
            borderRadius="lg"
          />
        </Box>
      )
    }
  }
}

export default function PortableTextComponent({ value }) {
  return (
    <PortableText 
      value={value} 
      components={components}
    />
  )
} 