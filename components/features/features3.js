import React from "react";
import { chakra, Box, SimpleGrid, Flex,Container, Icon } from "@chakra-ui/react";

export default function App(){
  const Feature = (props) => {
    return (
      <Box>
        <Icon
          boxSize={12}
          _light={{ color: "brand.700" }}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{ color: "gray.900" }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{ color: "gray.400" }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Container
      my={20}
      rounded="3xl"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
      maxW="8xl"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
        rounded="3xl"

      >
        <Feature
          title="Research and Development Credits"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          }
        >
          R&D tax credits are a valuable incentive introduced by the UK government to encourage innovation and investment in research and development activities. They provide businesses with tax relief or cash credits for a portion of their eligible R&D expenditures, fostering growth and competitiveness within the UK economy.
        </Feature>

        <Feature
          title="Embedded Capital Allowances"
          icon={
            <path
              fillRule="evenodd"
              d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
              clipRule="evenodd"
            />
          }
        >
          Embedded Capital Allowances (ECAs) are a form of tax relief available to commercial property owners in the UK, allowing them to claim tax deductions for certain embedded fixtures and features within their property. These embedded items are considered integral to the building and are typically not easily removable. By claiming ECAs, property owners can reduce their taxable income, thereby lowering their corporation tax or income tax liability.
        </Feature>

        <Feature
          title="Land Remediation Relief"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          }
        >
          Land Remediation Relief (LRR) is a tax incentive introduced by the UK government to encourage the redevelopment of contaminated and derelict land. It offers tax relief to companies that incur costs in cleaning up or remediating contaminated land or bringing derelict land back into productive use. By claiming LRR, companies can reduce their corporation tax liability and, in some cases, receive a cash credit.
        </Feature>
      </SimpleGrid>
    </Container>
  );
};
