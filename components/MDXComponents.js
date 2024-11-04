import { Heading, Text, Box, UnorderedList, OrderedList, ListItem, Link, Code } from '@chakra-ui/react'

const MDXComponents = {
  h1: (props) => (
    <Heading
      as="h1"
      size="lg"
      mb={8}
      fontWeight="bold"
      letterSpacing="tight"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      as="h2"
      size="xl"
      mt={12}
      mb={4}
      fontWeight="semibold"
      letterSpacing="tight"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      size="lg"
      mt={8}
      mb={3}
      fontWeight="medium"
      letterSpacing="tight"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      as="h4"
      size="md"
      mt={6}
      mb={2}
      fontWeight="medium"
      letterSpacing="tight"
      {...props}
    />
  ),
  p: (props) => (
    <Text
      as="p"
      fontSize="lg"
      lineHeight="tall"
      mb={4}
      {...props}
    />
  ),
  ul: (props) => (
    <UnorderedList
      spacing={2}
      pl={4}
      mb={4}
      {...props}
    />
  ),
  ol: (props) => (
    <OrderedList
      spacing={2}
      pl={4}
      mb={4}
      {...props}
    />
  ),
  li: (props) => (
    <ListItem
      fontSize="lg"
      {...props}
    />
  ),
  a: (props) => (
    <Link
      color="blue.500"
      textDecoration="underline"
      _hover={{ color: 'blue.600' }}
      {...props}
    />
  ),
  code: (props) => (
    <Code
      px={2}
      py={1}
      rounded="md"
      {...props}
    />
  ),
  // Add a wrapper for pre (code blocks)
  pre: (props) => (
    <Box
      as="pre"
      mt={4}
      mb={8}
      p={4}
      bg="gray.50"
      rounded="md"
      overflow="auto"
      {...props}
    />
  ),
}

export default MDXComponents 