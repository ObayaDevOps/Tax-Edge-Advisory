import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  HStack,
  VStack,
  Button,
  chakra,
  Icon,
  useColorModeValue,
  UnorderedList,
  List,
  ListItem
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
// import { ReactComponent as RndSvgIllustration } from '../../public/images/illustrations/undraw_maker_launch_re_rq81.svg';

import   rndSvgIllustration  from '../../public/images/illustrations/undraw_maker_launch_re_rq81.svg';
import NextImage from 'next/image';





import Head from 'next/head';
import NextLink from 'next/link'

const features1 = [
  {
    id: 0,
    title: 'Developing new or improving existing products, processes, or services.',
    text: ''  },
  {
    id: 1,
    title: 'Creating or enhancing software solutions or applications.',
    text: '',
  },
  {
      id: 2,
      title: 'Developing or improving production methods to increase efficiency or reduce waste',
      text: '',
    },

    {
      id: 3,
      title: 'Exploring alternative energy sources or environmental technologies',
      text: '',
    },
    {
      id: 3,
      title: 'Investigating new materials or manufacturing techniques.',
      text: '',
    },
];

const features2 = [
  {
    id: 0,
    title: 'Project Overview',
    text: 'Describe the project, its objectives, and the context in which it was carried out'  },
  {
    id: 1,
    title: 'Technical Narrative',
    text: 'Explain the scientific or technological challenges faced during the project and how they were addressed, demonstrating the innovative nature of the project and its advancement of knowledge in the field',
  },
  {
      id: 2,
      title: 'Eligible Expenditures',
      text: 'Identify and itemize the R&D costs associated with the project, including staff costs, subcontractor expenses, consumable materials, and software',
    },

    {
      id: 3,
      title: 'Cost Calculation',
      text: 'Detail the methodology used to calculate the total eligible R&D costs and the corresponding tax relief or cash credit being claimed',
    },
    {
      id: 3,
      title: 'Supporting Documentation',
      text: 'Provide any relevant supporting documents, such as project plans, technical reports, or patent applications, to substantiate the R&D claim',
    },
];



export default function CapitalAllowancePage() {
  return (
    <Box bg="blackAlpha.200" pt={8} pb={12}>
        <Head>
          <title>Research and Development Tax Credits | Tax Edge Advisory</title>
          <meta name="description" content="Tax Edge Advisory Webpage" />
        </Head>

      <Container 
        maxW={{base:'1xl',md:'85vw'}} 
        py={12} 
        minHeight={{md:'110vh'}}   
        rounded='3xl' 
        shadow='2xl'    
        background="rgba(240,255,244,0.65)"
      >
      <Container maxW={{base:'1xl',md:'75vw'}} >
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 0 }}
        >                    
          <Flex
            textAlign={'center'}
            pt={8}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}>

          <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'} pb={{base:12, md:32}}>
            <chakra.h3
              fontWeight={'bold'}
              fontSize={20}
              textTransform={'uppercase'}
              color={'green.400'}>
              Research & Development Series
            </chakra.h3>
            <Heading
              as={'h1'}
                mb={{base: 2, md: 6}}
                fontSize={{ base: "5xl",md: "6xl", lg:"7xl",}}
                minHeight={'1vh'}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{base: "normal",md: "tight" }}
                color="green.900"
                textAlign='center'
              >
                <Text
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, green.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  pt={8}
                  pb={6}
                >
                  Research and Development Tax Credits
                </Text>
              </Heading>
            <chakra.h2
              margin={'auto'}
              width={'70%'}
              fontWeight={'medium'}
              fontSize={'lg'}
              color={useColorModeValue('gray.500', 'gray.400')}
              >
             Incentives for Innovation and Investment in R&D
            </chakra.h2>
          </Box>
          </Flex>

        <SimpleGrid columns={{ base: 1, md: 1, lg:1 }} spacing={10} pb={{base: 2, md: 24}}>
          <Illustration2 height={{ sm: '24rem', lg: '30vh' }} mt={{ base: 0, md:-8 }} mb={{base:12,md: 5}} />
        </SimpleGrid>

        </Stack>
      <Box pb={8}>
        <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "4xl",md: "4xl",}}
          pb={4}
        >
          Summary
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={2}>
          R&D tax credits are a valuable incentive introduced by the UK government to encourage
          innovation and investment in research and development activities.
         </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={16}>
          They provide businesses
          with tax relief or cash credits for a portion of their eligible R&D expenditures, fostering growth
          and competitiveness within the UK economy.
        </Text>
      </Box>

      <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "4xl",md: "4xl",}}
      >
        Eligible R&D Activities
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={4}>
        To qualify for R&D tax credits, a project must involve the creation or improvement of a product, process, or service through the resolution of scientific or technological uncertainties.
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={16}>
          Examples of potentially qualifying activities include:
      </Text>


{/* make this a sexy card - get your money bitch */}
      <Container maxW={{md: '85vw'}} mt={2} >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features1.map((feature) => (
              <Box
              maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
              // padding={7}
              py={8}
              paddingRight={13}
              paddingLeft={2}
              bgColor="gray.100"
              // opacity={0.15}
              // background="rgba(192,192,192,0.15)"
              background="white"
              border='30px'
              shadow={'xl'}
              key={feature.id}

              >

              <HStack  align={'top'} >
                <Box color={'green.400'} px={2} >
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text color={'black'} fontWeight={800} fontSize={'xl'}>{feature.title}</Text>
                  <Text color={'black'}
                  fontSize={'lg'}>{feature.text}</Text>
                </VStack>
              </HStack>
              </Box>
            ))}
        </SimpleGrid>
      </Container>


      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} py={16}>
        Please note that this is not an exhaustive list, and eligibility will depend on the specifics of each project.
      </Text>

      <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "4xl",md: "4xl",}}
          pt={12}
          pb={8}
      >
        R&D Tax Credit Report
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={4}>
        An essential component of the R&D tax credit claim process is the preparation of a comprehensive report that details the project, its objectives, the scientific or technological uncertainties it aims to address, and the eligible R&D costs incurred. The report should include the following sections:
      </Text>
      
      <Container maxW={{md: '85vw'}} mt={2} >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features2.map((feature) => (
              <Box
              maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
              // padding={7}
              py={8}
              paddingRight={13}
              paddingLeft={2}
              bgColor="gray.100"
              // opacity={0.15}
              // background="rgba(192,192,192,0.15)"
              background="white"
              border='30px'
              shadow={'xl'}
              key={feature.id}
              >

              <HStack  align={'top'} >
                <Box color={'green.400'} px={2} >
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text color={'black'} fontWeight={800} fontSize={'xl'}>{feature.title}</Text>
                  <Text color={'black'}
                  fontSize={'lg'}>{feature.text}</Text>
                </VStack>
              </HStack>
              </Box>
            ))}
        </SimpleGrid>
      </Container>

      <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "4xl",md: "4xl",}}
          pt={24}
          pb={8}
      >
        UK R&D Tax Credit Scheme
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={4}>
        In the UK, there are two primary R&D tax credit schemes: the Small and Medium-sized Enterprises (SME) scheme and the Research and Development Expenditure Credit (RDEC) scheme, designed for larger companies. The SME scheme offers more generous benefits but has specific eligibility criteria based on the company’s size, turnover, and balance sheet.
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={16}>
        Under the new rules, effective from April, the SME scheme provides tax relief of up to 186% on qualifying R&D expenditures, meaning that for every £100 spent on eligible R&D activities, a company can deduct £186 from its taxable profits. This can significantly reduce the company’s corporation tax liability.
      </Text>
          



      <Text
          bgClip="text"
          bgGradient='linear(to-r, blackAlpha.800, green.500)'
          fontWeight="extrabold"
          fontSize={{ base: "4xl",md: "4xl",}}
          pt={12}
          pb={8}
      >
        Loss-Making Companies and R&D Tax Credits
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={4}>
      Loss-making companies, particularly SMEs, can also benefit from the R&D tax credit scheme. Instead of carrying the loss forward or backward to offset against future or past profits, a loss-making SME can choose to surrender the loss attributable to R&D expenditures for a cash credit from HM Revenue and Customs (HMRC).
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={4}>
      This is particularly beneficial for startups and early-stage businesses that may not yet be generating profits. The cash credit is calculated as 10% of the surrendered loss. For example, if a loss-making SME has £100,000 of qualifying R&D expenditures, it can surrender the loss related to the £186,000 tax deduction (186% of the expenditure) for a cash credit of £18,600 (£186,000 x 10%).
      </Text>
      <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={16}>
      To claim the R&D tax credit, the company must submit the R&D tax credit report, along with its corporation tax return (CT600) and any relevant supporting documents, to HMRC. It is essential to ensure that the report is accurate, complete, and compliant with HMRC’s guidelines, as errors or omissions can lead to delays, adjustments, or even rejections of the claim.
      </Text>
                 
                    

      <Box py={12}>
        <Text             
        bgClip="text"
            bgGradient='linear(to-r, blackAlpha.800, green.500)'
            fontWeight="extrabold"
            fontSize={{ base: "4xl",md: "4xl",}}
            pb={2}>
        Contact Us
        </Text>
        <Text color={'gray.700'} fontSize={{base:'xl', md: '2xl'}} pb={6}>
        At Tax Edge Advisory, we are your trusted partners in navigating the complex landscape of capital investment reliefs.     
          Our goal is to ensure your business maximises its financial potential by unlocking valuable tax savings through property capital allowances.
        </Text>
        <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
            pb={12}
          >
            <NextLink href="/pricing/our-prices">
                <Button
                as="a"
                variant="solid"
                colorScheme="whiteAlpha"
                textColor={useColorModeValue('green.600', 'white')}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                shadow={'lg'}

                w={{
                    base: "full",
                    sm: "auto",
                }}
                mb={{
                    base: 2,
                    sm: 0,
                }}
                size="lg"
                cursor="pointer"
                >
                Tax Savings Calculator
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </Icon>
                </Button>
              </NextLink>
            

              <NextLink href="/info/contact-enquiry">
                  <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow={'lg'}
                  textColor={useColorModeValue('green.600', 'white')}


                  w={{
                      base: "full",
                      sm: "auto",
                  }}
                  mb={{
                      base: 2,
                      sm: 0,
                  }}
                  size="lg"
                  cursor="pointer"
                  fontFamily="Helvetica"

                  >
                  Get in Contact
                  <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                      <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                      />
                  </Icon>
                  </Button>
                </NextLink>
                
        </Stack>
      </Box>
      </Container>
      </Container>
    </Box>
  );
}


const Illustration = (props) => {
  return (
    <Icon
      width="100%"
      viewBox="0 0 702 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.183 354.203H226.486V365.029H109.127L138.582 448H127.513L51.2686 237.805L61.4342 234.097L105.183 354.203Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3331 435.735C16.3331 435.735 17.8284 365.475 18.9733 311.685C19.706 277.237 46.8288 249.162 81.2157 247.26C157.2 243.017 232.213 241.938 305.679 245.888C341.363 247.813 370.83 274.471 376.321 309.801C376.341 309.797 376.341 309.797 376.341 309.797C379.347 329.121 374.099 348.817 361.876 364.079C346.366 383.372 320.179 410.252 279.632 435.892C279.632 435.892 294.627 440.228 296.159 446.93C296.159 446.93 182.072 446.797 152.997 446.766C151.925 446.762 150.965 446.103 150.578 445.103C150.191 444.106 150.457 442.969 151.247 442.249C171.672 423.57 248.589 353.232 248.589 353.232L118.848 354.55C118.848 354.55 116.764 427.117 116.274 444.164C116.217 446.138 114.593 447.708 112.618 447.694C93.119 447.558 0.00317418 446.919 0.00317418 446.919C0.00317418 446.919 -0.638707 440.108 16.3331 435.735Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M310.097 414.53L210.78 387.852L213.768 385.118L313.438 411.891C312.339 412.769 311.226 413.649 310.097 414.53ZM118.033 383.711L17.412 386.142L17.4847 382.724L118.132 380.293L118.033 383.711Z"
        fill="#82B5B2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M248.401 353.391L283.703 353.309C284.041 353.309 284.328 353.554 284.379 353.889C284.43 354.224 284.232 354.544 283.908 354.647L227.846 372.189L248.401 353.391ZM118.824 354.661L118.367 370.577L88.59 357.167C88.0133 356.907 87.6967 356.279 87.8297 355.661C87.9632 355.04 88.5105 354.599 89.1428 354.603L118.824 354.661Z"
        fill="#346864"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M291.304 99.2121C291.304 99.2121 257.019 52.8975 179.894 73.1249C169.508 75.8491 87.2436 101.971 54.7916 175.363C51.6184 182.539 34.509 215.168 59.3127 232.611C76.6186 244.786 95.1755 242.529 160.199 220.757C165.701 218.913 199.594 211.75 193.467 203.919C193.467 203.919 196.201 204.473 197.514 202.652C197.514 202.652 197.665 203.59 197.776 204.284C197.852 204.758 198.075 205.195 198.415 205.534C199.97 207.084 204.638 211.74 207.575 214.669C208.08 215.171 208.818 215.363 209.503 215.165C210.188 214.97 210.713 214.417 210.874 213.72C211.741 209.985 213.004 204.544 213.004 204.544C213.004 204.544 243.851 211.242 262.442 181.168C262.442 181.168 263.216 210.873 286.199 222.863C292.911 226.366 330.182 233.806 339.962 195.349C346.801 168.449 351.797 120.385 356.168 85.8508C356.168 85.8508 379.007 71.5063 380.734 64.6357C381.355 62.1679 378.85 58.1147 373.268 62.2137C373.268 62.2137 381.604 55.1215 378.823 51.7794C377.274 49.9204 374.104 49.8231 367.825 55.202C367.825 55.202 375.646 47.1877 372.073 43.9805C368.231 40.5359 363.771 47.6206 359.683 51.4342C359.683 51.4342 368.78 37.4581 363.634 35.0446C361.454 34.0221 359.099 33.8934 351.158 43.8982C343.805 53.1631 333.376 54.1191 325.818 53.2102C325.818 53.2102 328.793 35.7541 325.384 34.0627C321.535 32.1515 318.065 35.5683 309.701 52.734C301.442 69.6743 297.324 86.4589 291.304 99.2121Z"
        fill="url(#paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200.552 69.0487C260.192 61.5496 288.546 95.6606 291.112 98.9255C287.222 112.809 280.551 142.47 280.551 142.47L273.531 142.371C273.644 159.703 262.475 180.416 262.475 180.416L262.431 181.145C244.754 209.722 215.614 204.983 212.862 204.574L213.762 200.054L211.425 193.498L210.699 191.64C210.699 191.64 213.922 187.318 216.777 183.489C219.187 180.258 218.624 175.701 215.501 173.153C209.255 168.059 200.006 160.516 200.006 160.516C199.952 160.474 199.899 160.433 199.845 160.392C192.415 154.705 183.026 152.213 173.755 153.47C154.109 156.132 114.607 161.485 114.607 161.485L90.7585 124.594C118.582 97.7388 151.218 83.1047 168.597 76.7555L200.552 69.0487Z"
        fill="#82B5B2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M197.521 202.755C198.186 201.946 200.386 198.89 198.413 195.941L195.637 192.583C195.637 192.583 199.531 193.145 201.114 192.994C201.114 192.994 200.896 196.894 204.116 197.572C204.997 197.755 205.905 197.425 206.464 196.72C208.018 194.767 211.497 190.378 211.497 190.378C211.497 190.378 213.437 198.755 213.788 200.27C213.823 200.423 213.824 200.583 213.79 200.737C213.47 202.184 211.776 209.85 211.776 209.85L210.87 213.755C210.709 214.452 210.184 215.005 209.499 215.2C208.813 215.398 208.076 215.206 207.571 214.705C204.634 211.775 199.965 207.119 198.411 205.569C198.071 205.23 197.847 204.793 197.771 204.319L197.521 202.755ZM183.771 153.542C183.771 153.542 196.129 155.352 204.058 164.149L198.595 137.771L180.493 137.876L183.771 153.542Z"
        fill="#FFBF2F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M211.896 209.386L211.801 209.813L210.894 213.719C210.733 214.415 210.209 214.969 209.523 215.163C208.838 215.361 208.1 215.17 207.595 214.668L203.44 210.523L211.896 209.386ZM199.628 192.958C200.211 192.988 200.746 192.995 201.138 192.958C201.138 192.958 200.921 196.858 204.141 197.536C204.49 197.608 204.844 197.6 205.179 197.52L205.68 199.85L213.216 197.657L213.812 200.233C213.831 200.313 213.84 200.394 213.84 200.474L198.107 205.118C197.95 204.864 197.844 204.58 197.796 204.282L197.546 202.719C197.665 202.574 197.834 202.357 198.019 202.081L201.386 201.1L199.628 192.958ZM191.596 155.756L187.719 137.798L192.337 137.771L196.738 158.246C194.972 157.22 193.218 156.402 191.596 155.756Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M194.128 206.477L183.748 205.647C182.997 205.587 182.436 204.928 182.496 204.177C182.556 203.426 183.214 202.865 183.965 202.925L195.658 203.859C194.536 204.142 193.467 203.926 193.467 203.926C194.141 204.786 194.331 205.639 194.128 206.477ZM198.83 193.599C198.926 193.527 199.033 193.467 199.15 193.421C199.15 193.421 200.457 192.908 201.851 192.361C203.492 191.717 204.71 190.306 205.108 188.588C205.108 188.588 205.108 188.588 205.108 188.587C205.92 185.083 204.458 181.445 201.448 179.478C198.029 177.244 194.37 174.852 194.37 174.852C193.739 174.44 193.562 173.593 193.974 172.962C194.386 172.331 195.232 172.153 195.863 172.565L202.671 177.014L202.853 175.466C202.941 174.717 203.62 174.181 204.368 174.269C205.117 174.358 205.652 175.037 205.564 175.785L205.173 179.107C207.591 181.803 208.612 185.559 207.768 189.204C207.768 189.204 207.768 189.204 207.767 189.205C207.166 191.799 205.326 193.931 202.847 194.904C201.454 195.451 200.146 195.964 200.146 195.964C199.66 196.155 199.13 196.047 198.759 195.729C198.414 195.987 197.953 196.078 197.513 195.932L185.867 192.088C185.151 191.852 184.762 191.079 184.998 190.363C185.234 189.648 186.007 189.258 186.722 189.494L198.369 193.339C198.544 193.396 198.699 193.486 198.83 193.599ZM281.033 127.555C281.033 127.555 271.089 169.271 268.909 187.903C268.82 188.651 269.356 189.33 270.107 189.418C270.854 189.506 271.533 188.969 271.618 188.221C273.792 169.687 283.692 128.189 283.692 128.189C283.866 127.456 283.412 126.718 282.678 126.544C281.948 126.369 281.211 126.822 281.033 127.555ZM121.951 156.064C98.278 161.373 83.8137 165.882 76.7834 169.798C75.9607 170.256 75.6645 171.296 76.1228 172.12C76.5807 172.943 77.6205 173.239 78.4432 172.781C85.3282 168.946 99.5134 164.594 122.698 159.395C123.616 159.189 124.196 158.275 123.989 157.356C123.783 156.437 122.87 155.858 121.951 156.064ZM356.592 85.5869C356.315 85.7637 356.168 85.8576 356.168 85.8576C355.851 88.3578 355.53 90.929 355.21 93.5572L348.207 91.7146C347.941 91.6442 347.743 91.4192 347.709 91.1451C347.671 90.8713 347.805 90.6026 348.043 90.4657L356.592 85.5869ZM379.267 52.5858C380.417 56.1393 373.268 62.2205 373.268 62.2205C373.473 62.0699 373.674 61.9307 373.869 61.8019C368.883 66.3748 362.15 71.8006 355.65 74.6633C354.96 74.9672 354.155 74.6538 353.851 73.9638C353.548 73.2741 353.862 72.4674 354.551 72.1638C365.495 67.3438 377.1 54.9638 379.267 52.5858ZM373.005 46.2618C372.944 49.9634 367.825 55.2089 367.825 55.2089C368.201 54.8845 368.569 54.58 368.928 54.2949C363.904 59.1273 356.629 65.5138 350.238 68.761C349.565 69.1024 348.743 68.8337 348.402 68.1618C348.06 67.4896 348.33 66.6671 349.002 66.3257C359.311 61.0877 371.968 47.3973 373.005 46.2618ZM364.669 41.2174C363.28 45.9183 359.683 51.441 359.683 51.441C359.796 51.3373 359.908 51.2311 360.018 51.1232C355.854 55.4824 350.234 60.2546 343.911 62.6544C343.205 62.9214 342.416 62.5664 342.15 61.8617C341.884 61.157 342.239 60.3677 342.942 60.1003C353.858 55.9586 362.519 44.3041 364.669 41.2174Z"
        fill="#82B5B2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M156.48 155.881L167.034 144.671C167.509 144.167 168.245 144.007 168.886 144.27C169.527 144.533 169.94 145.163 169.925 145.856L169.744 154.084L156.48 155.881ZM273.524 144.128C273.494 142.639 273.282 133.83 272.374 127.785C272.306 127.499 272.463 127.207 272.739 127.105C273.012 127.002 273.323 127.122 273.456 127.383C275.428 131.141 278.424 137.236 280.141 142.532L273.548 142.439C273.552 142.999 273.541 143.562 273.524 144.128Z"
        fill="#346864"
      />
      <path
        d="M198.023 59.0528C212.733 59.0528 224.658 47.0823 224.658 32.3159C224.658 17.5495 212.733 5.57898 198.023 5.57898C183.313 5.57898 171.388 17.5495 171.388 32.3159C171.388 47.0823 183.313 59.0528 198.023 59.0528Z"
        fill="#99C3C0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.316 52.2817C174.839 47.382 171.388 40.2502 171.388 32.3158C171.388 17.5592 183.323 5.57898 198.023 5.57898C207.027 5.57898 214.993 10.0733 219.815 16.9484L198.003 36.4605C197.741 35.6917 197.342 34.9419 196.803 34.2523C194.524 31.3376 190.603 30.592 188.052 32.5882C185.501 34.5845 185.28 38.5715 187.559 41.4862C188.267 42.3919 189.134 43.0881 190.069 43.5579L180.316 52.2817Z"
        fill="black"
      />
      <path
        d="M494.509 78.6715H474.156L482.742 108.248H503.094L494.509 78.6715Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M483.241 107.57H489.666C490.036 107.57 490.341 107.873 490.34 108.245C490.34 108.618 490.037 108.92 489.664 108.92H482.735C482.436 108.92 482.173 108.722 482.089 108.433L473.503 78.8569C473.444 78.653 473.483 78.4332 473.611 78.2638C473.739 78.094 473.937 77.9941 474.151 77.9941H488.428C488.8 77.9941 489.102 78.2964 489.102 78.6688C489.101 79.0412 488.801 79.3434 488.428 79.3434H475.047L483.241 107.57Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M494.011 79.3434H488.442C488.07 79.3434 487.768 79.0412 487.768 78.6688C487.768 78.2964 488.069 77.9941 488.442 77.9941H494.518C494.816 77.9941 495.08 78.1924 495.163 78.4807L503.745 108.057C503.804 108.261 503.765 108.481 503.637 108.65C503.509 108.82 503.311 108.92 503.1 108.92H489.674C489.302 108.92 489 108.618 489 108.245C489.001 107.873 489.304 107.571 489.676 107.571H502.201L494.011 79.3434Z"
        fill="black"
      />
      <path
        d="M493.631 81.296H476.781L477.911 84.5673H494.761L493.631 81.296Z"
        fill="black"
      />
      <path
        d="M495.281 86.6476H478.431L479.561 89.9189H496.411L495.281 86.6476Z"
        fill="black"
      />
      <path
        d="M496.931 92.1128H480.081L481.211 95.3842H498.061L496.931 92.1128Z"
        fill="black"
      />
      <path
        d="M498.582 97.4642H481.731L482.861 100.736H499.712L498.582 97.4642Z"
        fill="black"
      />
      <path
        d="M500.232 102.816H483.382L484.511 106.087H501.362L500.232 102.816Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M499.225 95.6635C498.559 93.7864 494.587 82.0397 497.655 77.052C497.863 76.7273 498.194 76.5019 498.569 76.4299C499.661 76.253 501.989 76.7136 505.282 82.0253C505.282 82.0253 535.182 126.954 545.975 133.666C545.975 133.666 546.262 99.3596 586.634 93.7505C592.238 92.9718 631.624 85.3125 653.699 139.988C661.002 158.077 660.92 172.541 660.79 188.001C660.705 200.256 654.348 211.612 643.943 218.082C630.31 226.562 613.405 227.887 598.619 221.629C588.699 217.447 575.895 213.196 561.362 211.055L529.455 207.969C529.455 207.969 531.049 216.692 517.839 215.012C517.839 215.012 507.438 213.64 509.517 206.66C509.517 206.66 502.507 205.526 503.954 198.748C503.954 198.748 497.31 193.561 503.21 187.229C503.21 187.229 484.029 186.998 480.129 177.859C479.801 177.068 479.78 176.182 480.077 175.377C480.436 174.384 481.364 173.325 483.626 173.248C483.626 173.248 510.161 172.84 517.143 170.839L501.975 145.021C501.975 145.021 490.161 138.525 487.438 128.139C484.633 128.152 482.251 125.988 482.036 123.145C481.852 120.713 483.312 118.533 485.476 117.698L484.234 117.792C481.299 118.013 478.74 115.811 478.518 112.876C478.34 110.508 479.74 108.382 481.828 107.534C478.996 107.665 476.556 105.516 476.341 102.67C476.122 99.7724 478.296 97.2425 481.19 97.024L499.225 95.6635Z"
        fill="url(#paint2_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M529 211.356C522.755 210.998 517.742 212.496 517.742 212.496C516.838 212.769 515.886 212.254 515.616 211.353C515.346 210.451 515.858 209.499 516.763 209.226C516.763 209.226 524.055 207.038 532.33 208.273L529.436 207.993C529.436 207.993 529.737 209.635 529 211.356ZM506.286 205.348C507.481 201.725 511.545 193.733 524.458 191.761C525.386 191.619 526.259 192.26 526.399 193.191C526.543 194.123 525.901 194.994 524.969 195.136C513.582 196.875 510.293 204.034 509.453 206.677C509.187 206.627 507.682 206.315 506.286 205.348ZM501.471 195.645C503.14 192.084 507.689 186.298 519.912 184.02C520.837 183.848 521.731 184.459 521.902 185.386C522.076 186.312 521.462 187.204 520.537 187.376C505.287 190.218 503.887 198.987 503.935 198.772C503.935 198.772 502.41 197.581 501.471 195.645ZM498.956 186.958C500.953 184.369 507.273 177.164 516.599 175.827C517.53 175.694 518.397 176.342 518.53 177.275C518.663 178.208 518.015 179.073 517.083 179.207C510.518 180.148 505.706 184.453 503.167 187.267C502.85 187.261 501.205 187.203 498.956 186.958ZM598.2 169.679L619.033 177.006C619.921 177.318 620.897 176.851 621.211 175.962C621.521 175.073 621.054 174.097 620.166 173.785L599.333 166.458C598.443 166.145 597.47 166.613 597.156 167.502C596.846 168.391 597.313 169.366 598.2 169.679ZM515.346 167.834C517.534 167.401 541.609 162.724 559.169 162.913C560.111 162.923 560.868 163.696 560.858 164.638C560.848 165.58 560.073 166.337 559.131 166.327C541.018 166.132 516.657 170.998 517.124 170.864L515.346 167.834ZM501.956 145.045L507.235 147.421C507.921 147.739 508.214 148.552 507.9 149.236C507.58 149.919 506.768 150.216 506.085 149.898L504.328 149.08L501.956 145.045ZM498.312 92.9098C501.4 93.413 503.597 95.0631 504.396 96.368C506.181 99.2806 505.474 102.139 503.768 104.175C503.877 104.718 504.065 105.546 504.348 106.554C504.761 106.845 505.109 107.147 505.399 107.449C506.979 109.091 507.082 110.834 507.112 111.372C507.146 112.02 507.088 112.622 506.952 113.182C508.44 115.983 510.535 118.746 513.493 120.336C514.155 120.693 514.405 121.521 514.05 122.185C513.695 122.849 512.866 123.099 512.2 122.743C510.948 122.069 509.822 121.219 508.808 120.253C508.812 120.266 508.815 120.279 508.818 120.292C509.927 123.759 508.15 127.503 504.751 128.828C499.578 130.859 492.33 130.994 488.368 130.885C487.985 130.011 487.665 129.103 487.419 128.163C487.071 128.165 497.786 128.628 503.754 126.284C505.836 125.473 506.911 123.168 506.198 121.051C506.187 121.027 506.181 121.003 506.174 120.979C505.662 119.571 504.263 118.681 502.768 118.822L499.956 119.088C499.417 119.249 499.076 119.319 499.076 119.319C498.803 119.375 498.53 119.344 498.291 119.246L482.389 120.749C482.945 119.373 484.051 118.265 485.457 117.722L499.455 116.393C500.284 116.13 501.536 115.641 502.604 114.84C503.608 114.086 504.471 113.03 504.386 111.522C504.369 111.224 504.311 110.257 503.434 109.344C502.348 108.22 500.219 107.273 496.148 107.179C496.039 107.176 495.933 107.161 495.834 107.134C491.067 107.292 486.18 107.366 481.321 107.557C479.536 107.475 477.956 106.492 477.066 105.026C484.126 104.625 491.333 104.596 498.219 104.313C499.192 104.273 500.253 103.772 501.103 103.011C501.219 102.805 501.39 102.63 501.598 102.508C502.656 101.286 503.106 99.5862 502.069 97.7944C501.106 96.1345 499.206 95.6875 499.206 95.6875C499.049 95.2423 498.704 94.2423 498.312 92.9098ZM506.942 119.362C506.481 119.556 506.409 119.759 506.375 119.825C506.447 119.722 506.536 119.628 506.634 119.547C506.727 119.474 506.829 119.411 506.942 119.362L506.965 119.352L506.942 119.362ZM505.409 115.979C505.28 116.121 505.14 116.259 505 116.391C505.324 116.501 505.638 116.637 505.938 116.799C505.754 116.528 505.58 116.254 505.409 115.979Z"
        fill="#FD9500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M545.86 133.549L545.972 133.619C545.972 133.619 546.259 99.3124 586.632 93.7033C592.235 92.9245 631.622 85.2652 653.697 139.941C653.775 140.131 653.85 140.321 653.925 140.51C640.842 154.287 626.459 143.902 626.459 143.902C619.425 165.413 596.937 156.171 596.937 156.171L604.213 171.712C587.222 165.469 554.172 166.375 554.172 166.375C547.32 157.736 546.02 142.178 545.86 133.549Z"
        fill="#FD9500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M596.239 169.478C596.239 169.478 591.85 155.306 588.691 145.114C588.551 144.657 588.783 144.168 589.223 143.987C589.667 143.807 590.175 143.996 590.393 144.421C595.986 155.363 604.418 171.851 604.418 171.851L596.239 169.478Z"
        fill="#E86135"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M471.505 261.208C503.183 222.764 568.78 237.025 583.222 238.93C676.685 251.259 655.955 323.089 652.576 332.263C645.158 352.396 627.297 360.184 600.642 362.891V441.031C600.642 441.031 592.507 433.762 590.637 425.506C590.637 425.506 587.429 425.308 581.881 424.752C581.881 424.752 586.102 436.213 588.323 442.249C588.63 443.076 588.511 443.997 588.006 444.718C587.504 445.442 586.682 445.872 585.801 445.872H479.667C485.448 435.315 496.829 435.404 496.829 435.404C492.382 424.26 487.796 413.424 483.281 402.362C454.214 390.744 428.583 373.495 420.765 348.029C417.731 338.149 415.94 294.676 471.505 261.208Z"
        fill="url(#paint3_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M486.454 410.081C497.022 415.417 515.316 420.367 527.441 400.009C527.697 399.575 528.13 399.282 528.625 399.196C529.12 399.114 529.625 399.254 530.01 399.579C530.01 399.579 537.593 405.994 546.919 409.162C552.297 410.989 558.276 411.76 563.647 409.336C567.202 407.728 570.465 404.714 573.13 399.753C573.574 398.923 574.608 398.609 575.44 399.056C576.269 399.504 576.58 400.538 576.133 401.368C573.038 407.134 569.185 410.579 565.049 412.447C558.876 415.236 552 414.495 545.82 412.395C538.48 409.9 532.153 405.519 529.348 403.399C517.156 422.16 499.889 419.507 488.334 414.632L487.529 412.689C487.246 412.003 486.962 411.317 486.679 410.63L486.454 410.081Z"
        fill="#FD9500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M563.058 363.626C563.058 363.626 534.086 363.507 518.143 363.442C517.491 363.439 516.935 363.923 516.85 364.572C516.768 365.221 517.177 365.832 517.809 365.996C534.516 370.38 566.518 378.778 566.518 378.778L563.058 363.626Z"
        fill="#FD9500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M602.729 362.66C602.037 362.738 601.344 362.813 600.641 362.885V366.217C587.919 367.016 576.133 367.214 564.64 367.057L585.524 425.091C584.459 424.995 583.238 424.882 581.879 424.746L584.923 433.015C584.749 432.841 584.606 432.626 584.517 432.376L560.992 366.999C558.842 366.955 556.702 366.9 554.563 366.835C553.624 366.808 552.884 366.019 552.911 365.08C552.939 364.138 553.727 363.397 554.665 363.424C569.973 363.885 585.463 363.831 602.729 362.66ZM480.076 252.656C460.629 270.007 452.957 288.941 458.322 321.929C461.973 344.394 471.603 373.264 487.594 412.352C487.7 412.608 487.737 412.878 487.717 413.138C486.236 409.556 484.755 405.968 483.28 402.356C481.919 401.813 480.568 401.256 479.223 400.686C466.205 367.747 458.219 342.567 454.954 322.479C450.958 297.917 453.937 280.829 463.324 266.476C465.901 264.694 468.624 262.936 471.504 261.202C474.142 257.999 477.015 255.162 480.076 252.656Z"
        fill="#FD9500"
      />
      <path
        d="M555.758 91.7947C569.584 91.7947 580.792 80.4981 580.792 66.563C580.792 52.6279 569.584 41.3313 555.758 41.3313C541.932 41.3313 530.724 52.6279 530.724 66.563C530.724 80.4981 541.932 91.7947 555.758 91.7947Z"
        fill="#FFBF2F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M536.311 50.6798C540.904 44.9857 547.906 41.3445 555.748 41.3445C569.565 41.3445 580.782 52.6501 580.782 66.5761C580.782 69.4225 580.315 72.1592 579.451 74.711C575.035 74.3241 572.527 71.0343 571.664 69.6587C573.278 68.827 574.401 66.9936 574.401 64.868C574.401 61.9612 572.302 59.601 569.715 59.601C567.129 59.601 565.03 61.9612 565.03 64.868C565.03 65.5549 565.146 66.2118 565.361 66.814C549.5 68.5235 539.413 55.4224 536.311 50.6798ZM547.681 37.3285C548.33 37.547 549.043 37.2971 549.415 36.7218C549.783 36.1468 549.718 35.3933 549.251 34.8925C549.118 34.7283 548.968 34.5685 548.811 34.4039C544.866 30.2882 540.423 26.5531 535.69 23.3937C521.132 13.6732 503.787 6.40248 486.735 2.5445C469.12 -1.44049 447.133 -1.66479 431.569 8.64831C421.328 15.4326 413.671 29.7877 422.499 40.9977C425.665 45.0185 430.214 47.813 434.917 49.6949C453.951 57.3125 473.798 52.5067 491.881 44.8789C502.176 40.5357 512.414 34.7785 523.627 32.9918C530.667 31.8703 541.529 35.1486 547.681 37.3285Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M644.2 363.676L691.834 235.008L702 238.715L626.359 446.37H613.587L640.193 374.499H564.41V363.676H644.2Z"
        fill="black"
      />
      <path
        d="M461.393 100.994H318.195L335.146 201.613H478.343L461.393 100.994Z"
        fill="black"
      />
      <path
        d="M424.708 196.637H392.737L397.388 224.258H429.359L424.708 196.637Z"
        fill="black"
      />
      <path
        d="M453.579 108.623H328.324L342.33 191.804H467.586L453.579 108.623Z"
        fill="#EAEAEB"
      />
      <path
        d="M449.58 116.024H407.02L413.244 152.972H455.805L449.58 116.024Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M408.246 117.047L410.399 129.828C410.493 130.386 410.117 130.914 409.559 131.008C409.002 131.102 408.474 130.726 408.38 130.169L406.025 116.193C405.975 115.896 406.058 115.592 406.253 115.362C406.448 115.132 406.733 114.999 407.034 114.999H449.595C450.094 114.999 450.521 115.36 450.604 115.853L452.959 129.828C453.053 130.386 452.676 130.914 452.119 131.008C451.562 131.102 451.034 130.726 450.94 130.169L448.73 117.047H408.246Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M454.586 151.977L450.919 130.198C450.825 129.641 451.2 129.112 451.758 129.018C452.315 128.924 452.843 129.3 452.937 129.858L456.806 152.831C456.856 153.128 456.773 153.433 456.578 153.663C456.383 153.893 456.097 154.025 455.796 154.025H413.236C412.736 154.025 412.31 153.664 412.226 153.171L408.358 130.198C408.264 129.641 408.641 129.112 409.198 129.018C409.755 128.924 410.284 129.3 410.377 129.858L414.102 151.977H454.586Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M428.671 152.972H426.596L420.334 116.024H422.412L428.671 152.972ZM443.812 152.972H441.734L435.475 116.024H437.55L443.812 152.972Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M454.36 144.488H411.8L411.455 142.44H454.015L454.36 144.488ZM452.828 135.381H410.268L409.923 133.332H452.483L452.828 135.381ZM451.179 125.587H408.619L408.271 123.539H450.835L451.179 125.587Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M396.2 184.486H430.167L420.729 128.435H396.2"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M419.879 129.458H396.215C395.651 129.458 395.193 128.999 395.192 128.434C395.192 127.869 395.651 127.41 396.216 127.41H420.745C421.245 127.41 421.671 127.771 421.754 128.264L431.193 184.316C431.243 184.613 431.159 184.917 430.965 185.147C430.77 185.377 430.484 185.51 430.183 185.51H396.215C395.651 185.51 395.192 185.051 395.192 184.486C395.192 183.92 395.651 183.461 396.215 183.461H428.973L419.879 129.458Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M396.205 128.435H346.988L356.431 184.487H396.209"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M357.312 183.462H396.224C396.789 183.462 397.249 183.92 397.249 184.486C397.248 185.051 396.79 185.51 396.224 185.51H356.446C355.947 185.51 355.52 185.149 355.437 184.656L345.994 128.604C345.944 128.307 346.028 128.003 346.221 127.773C346.417 127.543 346.703 127.41 347.003 127.41H396.22C396.784 127.41 397.244 127.869 397.244 128.434C397.243 128.999 396.786 129.458 396.22 129.458H348.214L357.312 183.462Z"
        fill="black"
      />
      <path
        d="M420.734 128.435H346.988L348.122 135.166H421.868L420.734 128.435Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M427.533 168.688H353.787L353.442 166.64H427.189L427.533 168.688ZM424.493 150.636H350.75L350.402 148.588H424.148L424.493 150.636Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M375.345 184.486H373.27L363.774 128.435H365.848L375.345 184.486ZM395.441 184.486H393.363L383.866 128.435H385.944L395.441 184.486ZM415.285 184.486H413.21L403.713 128.435H405.788L415.285 184.486Z"
        fill="black"
      />
      <path
        d="M422.082 160.925C422.125 161.484 422.018 162.002 421.76 162.481C421.488 162.947 421.088 163.331 420.534 163.636C419.979 163.928 419.308 164.111 418.52 164.173C417.572 164.247 416.784 164.139 416.142 163.836C415.696 163.622 415.309 163.312 415.009 162.917C414.696 162.523 414.531 162.131 414.501 161.74C414.482 161.506 414.547 161.305 414.708 161.135C414.856 160.954 415.05 160.86 415.303 160.84C415.504 160.825 415.682 160.876 415.838 160.982C415.996 161.1 416.131 161.286 416.244 161.526C416.387 161.815 416.54 162.052 416.702 162.235C416.851 162.42 417.065 162.573 417.329 162.683C417.606 162.793 417.945 162.831 418.359 162.799C418.933 162.754 419.39 162.587 419.731 162.299C420.071 162.011 420.219 161.672 420.188 161.282C420.164 160.97 420.051 160.73 419.836 160.551C419.633 160.371 419.368 160.248 419.053 160.168C418.738 160.088 418.316 160.016 417.799 159.939C417.106 159.836 416.517 159.699 416.034 159.527C415.55 159.356 415.167 159.098 414.858 158.756C414.563 158.413 414.394 157.981 414.352 157.435C414.312 156.928 414.423 156.461 414.672 156.036C414.936 155.623 415.325 155.279 415.843 155.029C416.373 154.765 417.006 154.611 417.741 154.554C418.328 154.508 418.841 154.533 419.279 154.643C419.718 154.752 420.094 154.919 420.392 155.131C420.691 155.343 420.911 155.574 421.065 155.824C421.218 156.074 421.305 156.315 421.324 156.563C421.341 156.784 421.277 156.998 421.13 157.179C420.971 157.375 420.778 157.482 420.537 157.501C420.31 157.518 420.146 157.479 420.018 157.384C419.888 157.277 419.755 157.117 419.602 156.88C419.401 156.543 419.166 156.287 418.91 156.11C418.655 155.934 418.259 155.86 417.712 155.903C417.218 155.942 416.825 156.077 416.535 156.322C416.244 156.554 416.105 156.827 416.128 157.126C416.142 157.308 416.209 157.473 416.326 157.595C416.444 157.729 416.586 157.823 416.781 157.912C416.975 157.989 417.168 158.052 417.36 158.102C417.551 158.14 417.864 158.194 418.3 158.264C418.844 158.353 419.348 158.444 419.8 158.552C420.24 158.675 420.628 158.828 420.951 159.012C421.275 159.196 421.536 159.45 421.735 159.761C421.934 160.073 422.045 160.457 422.082 160.925Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M416.435 154.171L417.892 164.792C417.97 165.352 418.485 165.744 419.044 165.667C419.606 165.591 419.996 165.073 419.921 164.513L418.464 153.892C418.389 153.332 417.871 152.94 417.312 153.017C416.751 153.094 416.36 153.611 416.435 154.171Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M356.505 138.4L357.676 145.208C357.771 145.765 358.303 146.139 358.86 146.044C359.416 145.948 359.791 145.418 359.692 144.86L358.522 138.053C358.426 137.495 357.897 137.121 357.341 137.217C356.785 137.313 356.41 137.843 356.505 138.4Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M362.992 173.241L364.162 180.049C364.258 180.606 364.79 180.98 365.346 180.885C365.903 180.789 366.278 180.259 366.179 179.702L365.009 172.894C364.913 172.337 364.384 171.962 363.828 172.058C363.272 172.154 362.896 172.684 362.992 173.241Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M380.045 155.936C380.357 155.89 380.62 156.148 380.872 156.465C381.291 156.986 381.599 157.748 381.725 158.617C381.851 159.485 381.772 160.303 381.519 160.922C381.367 161.298 381.188 161.619 380.876 161.665C380.316 161.746 379.93 162.266 380.011 162.825C380.092 163.385 380.61 163.773 381.17 163.692C381.959 163.577 382.658 163.078 383.143 162.253C383.698 161.304 383.977 159.87 383.752 158.322C383.528 156.774 382.854 155.479 382.051 154.727C381.352 154.074 380.54 153.794 379.751 153.909C379.191 153.99 378.805 154.51 378.886 155.069C378.967 155.629 379.485 156.017 380.045 155.936Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M380.877 161.674C380.568 161.718 380.302 161.461 380.05 161.144C379.634 160.623 379.326 159.861 379.2 158.992C379.074 158.124 379.152 157.306 379.403 156.688C379.555 156.312 379.736 155.99 380.046 155.945C380.605 155.864 380.995 155.343 380.914 154.784C380.832 154.224 380.311 153.836 379.752 153.918C378.963 154.032 378.267 154.531 377.781 155.356C377.223 156.306 376.948 157.738 377.173 159.286C377.397 160.834 378.069 162.13 378.874 162.882C379.573 163.535 380.383 163.815 381.171 163.701C381.731 163.62 382.12 163.099 382.039 162.54C381.958 161.981 381.437 161.592 380.877 161.674Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M382.833 173.925C383.146 173.88 383.408 174.138 383.66 174.455C384.079 174.976 384.387 175.738 384.513 176.606C384.639 177.475 384.561 178.293 384.307 178.912C384.155 179.287 383.976 179.609 383.664 179.654C383.104 179.735 382.718 180.255 382.799 180.815C382.88 181.374 383.399 181.763 383.958 181.682C384.747 181.567 385.446 181.067 385.931 180.243C386.486 179.293 386.765 177.86 386.54 176.312C386.316 174.764 385.642 173.469 384.84 172.717C384.14 172.064 383.328 171.784 382.539 171.898C381.98 171.98 381.593 172.499 381.674 173.059C381.755 173.618 382.274 174.007 382.833 173.925Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M383.665 179.663C383.356 179.708 383.091 179.451 382.838 179.134C382.422 178.612 382.114 177.85 381.988 176.982C381.862 176.114 381.94 175.295 382.191 174.677C382.343 174.301 382.524 173.979 382.834 173.934C383.393 173.853 383.783 173.333 383.702 172.774C383.621 172.214 383.099 171.826 382.54 171.907C381.751 172.022 381.055 172.521 380.57 173.346C380.012 174.295 379.736 175.728 379.961 177.276C380.186 178.824 380.857 180.12 381.662 180.872C382.361 181.524 383.171 181.805 383.959 181.69C384.519 181.609 384.908 181.089 384.827 180.529C384.746 179.97 384.225 179.582 383.665 179.663Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M402.806 173.923C403.118 173.878 403.38 174.135 403.633 174.453C404.052 174.973 404.36 175.736 404.486 176.604C404.612 177.473 404.533 178.291 404.279 178.909C404.127 179.285 403.949 179.607 403.637 179.652C403.077 179.733 402.691 180.253 402.772 180.813C402.853 181.372 403.371 181.761 403.931 181.679C404.719 181.565 405.419 181.065 405.904 180.241C406.459 179.291 406.737 177.858 406.513 176.31C406.288 174.762 405.614 173.467 404.812 172.714C404.113 172.062 403.3 171.782 402.512 171.896C401.952 171.977 401.566 172.497 401.647 173.057C401.728 173.616 402.246 174.004 402.806 173.923Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M403.638 179.661C403.328 179.706 403.063 179.448 402.81 179.131C402.394 178.61 402.086 177.848 401.96 176.98C401.834 176.111 401.913 175.293 402.164 174.675C402.316 174.299 402.497 173.977 402.806 173.932C403.366 173.851 403.755 173.331 403.674 172.771C403.593 172.212 403.072 171.824 402.512 171.905C401.723 172.02 401.027 172.519 400.542 173.343C399.984 174.293 399.709 175.726 399.933 177.274C400.158 178.822 400.829 180.117 401.634 180.869C402.334 181.522 403.143 181.802 403.932 181.688C404.491 181.607 404.881 181.086 404.8 180.527C404.718 179.968 404.197 179.58 403.638 179.661Z"
        fill="black"
      />
      <path
        d="M380.449 39.3447L340.672 22.8859L317.831 72.9589L357.608 89.4178L380.449 39.3447Z"
        fill="#DD6140"
      />
      <path
        d="M374.717 43.0833L341.865 29.4899L338.896 35.9989L371.748 49.5923L374.717 43.0833Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M340.663 41.8156C342.047 42.4152 342.713 43.9797 342.135 45.3144C341.558 46.6492 339.962 47.2345 338.578 46.6349L338.171 47.5747C340.082 48.4024 342.276 47.5647 343.074 45.7209C343.872 43.8771 342.981 41.7034 341.07 40.8757L340.663 41.8156Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M338.564 46.6517C337.179 46.0521 336.514 44.4877 337.091 43.1529C337.669 41.8181 339.264 41.2329 340.649 41.8325L341.055 40.8926C339.141 40.0636 336.948 40.9013 336.15 42.7451C335.352 44.5889 336.243 46.7626 338.157 47.5916L338.564 46.6517Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M337.192 49.8998C338.576 50.4994 339.242 52.0639 338.664 53.3987C338.087 54.7335 336.491 55.3187 335.107 54.7191L334.7 55.659C336.611 56.4866 338.805 55.649 339.603 53.8051C340.4 51.9613 339.509 49.7876 337.598 48.96L337.192 49.8998Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M335.092 54.7358C333.708 54.1362 333.043 52.5718 333.62 51.237C334.198 49.9022 335.793 49.317 337.177 49.9166L337.584 48.9767C335.67 48.1477 333.476 48.9854 332.678 50.8292C331.881 52.673 332.772 54.8467 334.686 55.6757L335.092 54.7358Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M333.664 57.9839C335.048 58.5835 335.714 60.148 335.136 61.4827C334.559 62.8175 332.963 63.4028 331.579 62.8032L331.172 63.743C333.083 64.5706 335.277 63.733 336.075 61.8892C336.873 60.0453 335.982 57.8717 334.071 57.0441L333.664 57.9839Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M331.565 62.8199C330.18 62.2204 329.515 60.6559 330.092 59.3211C330.67 57.9863 332.265 57.4011 333.65 58.0007L334.056 57.0608C332.142 56.2319 329.949 57.0695 329.151 58.9133C328.353 60.7572 329.244 62.9308 331.158 63.7598L331.565 62.8199Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M330.193 66.0678C331.577 66.6674 332.243 68.2319 331.665 69.5667C331.088 70.9015 329.492 71.4867 328.108 70.8871L327.701 71.827C329.612 72.6546 331.806 71.817 332.604 69.9731C333.402 68.1293 332.511 65.9556 330.6 65.1279L330.193 66.0678Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M328.094 70.9039C326.709 70.3043 326.044 68.7398 326.621 67.4051C327.199 66.0703 328.794 65.4851 330.179 66.0847L330.585 65.1449C328.671 64.3159 326.478 65.1535 325.68 66.9973C324.882 68.8411 325.773 71.0148 327.687 71.8438L328.094 70.9039Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M348.8 45.3453C350.184 45.9449 350.85 47.5094 350.272 48.8441C349.695 50.1789 348.099 50.7642 346.715 50.1646L346.308 51.1044C348.219 51.932 350.413 51.0944 351.211 49.2506C352.009 47.4067 351.118 45.2331 349.207 44.4055L348.8 45.3453Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M346.701 50.1813C345.316 49.5817 344.651 48.0173 345.228 46.6825C345.806 45.3478 347.401 44.7625 348.786 45.3621L349.192 44.4222C347.278 43.5933 345.085 44.4309 344.287 46.2748C343.489 48.1186 344.38 50.2922 346.294 51.1212L346.701 50.1813Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M345.329 53.4295C346.713 54.0291 347.379 55.5935 346.801 56.9283C346.224 58.2631 344.628 58.8483 343.244 58.2487L342.837 59.1886C344.748 60.0162 346.942 59.1786 347.74 57.3347C348.538 55.4909 347.647 53.3173 345.736 52.4896L345.329 53.4295Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M343.23 58.2655C341.845 57.6659 341.18 56.1014 341.757 54.7667C342.335 53.4319 343.93 52.8466 345.315 53.4462L345.721 52.5064C343.807 51.6774 341.613 52.515 340.816 54.3589C340.018 56.2027 340.909 58.3764 342.823 59.2053L343.23 58.2655Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M341.858 61.5135C343.242 62.113 343.908 63.6775 343.33 65.0123C342.753 66.3471 341.157 66.9324 339.773 66.3328L339.366 67.2726C341.277 68.1002 343.471 67.2626 344.269 65.4187C345.066 63.5749 344.175 61.4012 342.264 60.5736L341.858 61.5135Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M339.759 66.3495C338.374 65.7499 337.709 64.1855 338.286 62.8507C338.864 61.516 340.459 60.9307 341.844 61.5303L342.25 60.5905C340.336 59.7615 338.142 60.5991 337.345 62.4429C336.547 64.2867 337.438 66.4604 339.352 67.2894L339.759 66.3495Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M338.33 69.5976C339.714 70.1972 340.38 71.7616 339.802 73.0964C339.225 74.4312 337.629 75.0165 336.245 74.4169L335.838 75.3567C337.749 76.1844 339.943 75.3467 340.741 73.5028C341.539 71.659 340.648 69.4853 338.737 68.6577L338.33 69.5976Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M336.231 74.4337C334.846 73.8341 334.181 72.2697 334.758 70.9349C335.336 69.6001 336.931 69.0148 338.316 69.6144L338.722 68.6746C336.808 67.8456 334.615 68.6833 333.817 70.5271C333.019 72.3709 333.91 74.5446 335.824 75.3736L336.231 74.4337Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M356.994 48.875C358.378 49.4746 359.044 51.0391 358.466 52.3738C357.889 53.7086 356.293 54.2939 354.909 53.6943L354.502 54.6342C356.413 55.4618 358.607 54.6241 359.405 52.7803C360.202 50.9364 359.311 48.7628 357.4 47.9352L356.994 48.875Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M354.894 53.7111C353.51 53.1115 352.845 51.547 353.422 50.2122C354 48.8774 355.595 48.2922 356.98 48.8918L357.386 47.9519C355.472 47.123 353.278 47.9606 352.481 49.8044C351.683 51.6483 352.574 53.8219 354.488 54.6509L354.894 53.7111Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M353.466 56.959C354.85 57.5586 355.516 59.1231 354.938 60.4578C354.361 61.7926 352.765 62.3779 351.381 61.7783L350.974 62.7181C352.885 63.5458 355.079 62.7081 355.877 60.8643C356.675 59.0204 355.784 56.8468 353.873 56.0192L353.466 56.959Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M351.367 61.7951C349.982 61.1955 349.317 59.631 349.894 58.2962C350.472 56.9615 352.067 56.3762 353.452 56.9758L353.859 56.0359C351.944 55.207 349.751 56.0446 348.953 57.8885C348.155 59.7323 349.046 61.906 350.96 62.735L351.367 61.7951Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M349.995 65.0432C351.379 65.6428 352.045 67.2073 351.467 68.542C350.89 69.8768 349.294 70.4621 347.91 69.8625L347.503 70.8024C349.414 71.63 351.608 70.7923 352.406 68.9485C353.203 67.1046 352.312 64.931 350.402 64.1034L349.995 65.0432Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M347.896 69.8791C346.511 69.2795 345.846 67.7151 346.423 66.3803C347.001 65.0455 348.596 64.4603 349.981 65.0599L350.388 64.12C348.473 63.2911 346.28 64.1287 345.482 65.9725C344.684 67.8164 345.575 69.99 347.489 70.819L347.896 69.8791Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M346.524 73.1272C347.908 73.7268 348.574 75.2912 347.996 76.626C347.419 77.9608 345.823 78.5461 344.439 77.9465L344.032 78.8863C345.943 79.7139 348.137 78.8763 348.934 77.0324C349.732 75.1886 348.841 73.015 346.93 72.1874L346.524 73.1272Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M344.425 77.9634C343.04 77.3638 342.375 75.7993 342.952 74.4646C343.53 73.1298 345.125 72.5445 346.51 73.1441L346.916 72.2043C345.002 71.3753 342.808 72.2129 342.011 74.0568C341.213 75.9006 342.104 78.0743 344.018 78.9033L344.425 77.9634Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M365.131 52.4046C366.515 53.0041 367.181 54.5686 366.603 55.9033C366.026 57.2381 364.43 57.8234 363.046 57.2238L362.639 58.1636C364.55 58.9912 366.744 58.1536 367.541 56.3098C368.339 54.466 367.448 52.2923 365.537 51.4647L365.131 52.4046Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M363.031 57.2408C361.647 56.6412 360.982 55.0767 361.559 53.7419C362.137 52.4071 363.732 51.8219 365.117 52.4215L365.523 51.4817C363.609 50.6527 361.415 51.4903 360.617 53.3341C359.82 55.1779 360.711 57.3516 362.625 58.1806L363.031 57.2408Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M361.66 60.4888C363.044 61.0884 363.71 62.6528 363.132 63.9876C362.555 65.3224 360.959 65.9077 359.575 65.3081L359.168 66.2479C361.079 67.0755 363.273 66.2379 364.071 64.394C364.868 62.5502 363.977 60.3766 362.066 59.549L361.66 60.4888Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M359.56 65.3249C358.176 64.7253 357.51 63.1609 358.088 61.8261C358.665 60.4913 360.261 59.9061 361.645 60.5057L362.052 59.5658C360.138 58.7369 357.944 59.5745 357.146 61.4183C356.349 63.2621 357.24 65.4358 359.154 66.2648L359.56 65.3249Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M358.132 68.5728C359.516 69.1724 360.182 70.7368 359.604 72.0716C359.027 73.4064 357.431 73.9916 356.047 73.3921L355.64 74.3319C357.551 75.1595 359.745 74.3219 360.543 72.478C361.341 70.6342 360.45 68.4606 358.539 67.6329L358.132 68.5728Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M356.033 73.4089C354.648 72.8093 353.983 71.2449 354.56 69.9101C355.138 68.5753 356.733 67.9901 358.118 68.5897L358.524 67.6498C356.61 66.8208 354.416 67.6585 353.619 69.5023C352.821 71.3461 353.712 73.5198 355.626 74.3488L356.033 73.4089Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M354.661 76.6568C356.045 77.2563 356.711 78.8208 356.133 80.1556C355.556 81.4904 353.96 82.0756 352.576 81.476L352.169 82.4159C354.08 83.2435 356.274 82.4058 357.072 80.562C357.869 78.7182 356.978 76.5445 355.068 75.7169L354.661 76.6568Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M352.561 81.4929C351.177 80.8933 350.512 79.3289 351.089 77.9941C351.667 76.6593 353.262 76.074 354.646 76.6736L355.053 75.7338C353.139 74.9048 350.945 75.7425 350.148 77.5863C349.35 79.4301 350.241 81.6038 352.155 82.4328L352.561 81.4929Z"
        fill="white"
      />
      <path d="M594.263 223.166H136.849V236.122H594.263V223.166Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.451 216.274H470.283V213.83H479.387V216.274H485.594V213.83H494.699V216.274H500.909V213.83H510.014V216.274H511.952C512.843 216.274 513.696 216.629 514.327 217.261C514.955 217.889 515.31 218.743 515.31 219.634V223.041H449.354C449.354 223.041 449.354 221.334 449.354 219.634C449.354 218.743 449.709 217.889 450.337 217.261C450.968 216.629 451.821 216.274 452.712 216.274H455.346V213.83H464.451V216.274Z"
        fill="#D2D3D5"
      />
      <path d="M238.772 214.968H158.7V224.11H238.772V214.968Z" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.017 213.374V216.106H160.519V221.981H202.017V224.713H159.154C158.4 224.713 157.789 224.102 157.789 223.347V214.74C157.789 213.985 158.4 213.374 159.154 213.374H202.017Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.043 213.374H239.96C240.714 213.374 241.325 213.985 241.325 214.74V223.347C241.325 224.102 240.714 224.713 239.96 224.713H202.043C200.773 223.374 201.258 222.627 202.043 221.981H238.595V216.106H202.043C201.526 215.098 201.399 214.163 202.043 213.374Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M206.953 215.205L207.176 223.781C207.196 224.535 207.823 225.13 208.576 225.112C209.329 225.092 209.924 224.464 209.905 223.709L209.682 215.133C209.662 214.382 209.035 213.784 208.281 213.805C207.528 213.825 206.933 214.454 206.953 215.205ZM224.092 211.21V223.255C224.092 224.01 224.703 224.621 225.457 224.621C226.21 224.621 226.822 224.01 226.822 223.255V211.21C226.822 210.456 226.21 209.844 225.457 209.844C224.703 209.844 224.092 210.456 224.092 211.21ZM215.68 211.408V222.48C215.68 223.235 216.292 223.846 217.045 223.846C217.799 223.846 218.41 223.235 218.41 222.48V211.408C218.41 210.654 217.799 210.043 217.045 210.043C216.292 210.043 215.68 210.654 215.68 211.408ZM232.114 211.33V222.19C232.114 222.941 232.725 223.556 233.479 223.556C234.233 223.556 234.844 222.941 234.844 222.19V211.33C234.844 210.579 234.233 209.964 233.479 209.964C232.725 209.964 232.114 210.579 232.114 211.33Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M258.56 150.047H256.144C254.8 150.047 253.708 148.955 253.708 147.61C253.708 146.264 254.8 145.172 256.144 145.172H316.743C318.09 145.172 319.179 146.264 319.179 147.61C319.179 148.955 318.09 150.047 316.743 150.047H315.616C316.841 150.478 317.971 151.181 318.906 152.119C320.551 153.762 321.472 155.991 321.472 158.315V223.067H252.701C252.701 223.067 252.701 177.81 252.701 158.315C252.701 155.991 253.626 153.762 255.267 152.119C256.206 151.181 257.332 150.478 258.56 150.047Z"
        fill="#FFF4E5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M315.591 150.068C316.464 150.374 317.287 150.82 318.027 151.389L254.238 153.342C254.535 152.914 254.87 152.512 255.242 152.14C256.18 151.202 257.306 150.499 258.535 150.068H315.591Z"
        fill="#F4978B"
      />
      <path
        d="M276.92 161.338L254.75 168.058L266.403 206.506L288.573 199.786L276.92 161.338Z"
        fill="#F4978B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M272.047 179.896C274.648 179.896 276.76 182.009 276.76 184.612C276.76 187.215 274.648 189.328 272.047 189.328C271.481 189.328 271.024 189.787 271.024 190.352C271.024 190.917 271.481 191.376 272.047 191.376C275.777 191.376 278.807 188.345 278.807 184.612C278.807 180.878 275.777 177.847 272.047 177.847C271.481 177.847 271.024 178.306 271.024 178.871C271.024 179.437 271.481 179.896 272.047 179.896Z"
        fill="#DE6647"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M272.037 189.328C269.433 189.328 267.324 187.215 267.324 184.612C267.324 182.009 269.433 179.896 272.037 179.896C272.6 179.896 273.06 179.437 273.06 178.871C273.06 178.306 272.6 177.847 272.037 177.847C268.303 177.847 265.276 180.878 265.276 184.612C265.276 188.345 268.303 191.376 272.037 191.376C272.6 191.376 273.06 190.917 273.06 190.352C273.06 189.787 272.6 189.328 272.037 189.328Z"
        fill="#DE6647"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M274.207 204.194L272.439 198.781C272.207 198.065 272.599 197.293 273.313 197.059C274.029 196.825 274.8 197.217 275.036 197.934L276.821 203.402L274.207 204.194ZM277.882 203.079L276.691 199.227C276.469 198.507 276.872 197.742 277.592 197.519C278.312 197.296 279.076 197.7 279.298 198.42L280.496 202.287L277.882 203.079ZM269.207 163.728L271.135 169.964C271.357 170.684 270.955 171.449 270.234 171.672C269.514 171.895 268.75 171.491 268.528 170.771L266.593 164.521L269.207 163.728ZM264.931 165.025L266.552 169.752C266.798 170.465 266.416 171.243 265.703 171.487C264.99 171.731 264.215 171.351 263.969 170.638L262.318 165.817L264.931 165.025Z"
        fill="#DE6647"
      />
      <path
        d="M320.428 183.729L298.05 177.739L287.677 216.553L310.055 222.542L320.428 183.729Z"
        fill="#F4978B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M306.491 196.981C308.7 198.353 309.38 201.264 308.008 203.475C306.636 205.686 303.727 206.367 301.518 204.994C301.037 204.695 300.406 204.844 300.108 205.324C299.81 205.805 299.957 206.436 300.438 206.735C303.607 208.703 307.779 207.727 309.747 204.556C311.716 201.384 310.739 197.209 307.571 195.241C307.09 194.942 306.459 195.091 306.161 195.571C305.863 196.051 306.01 196.682 306.491 196.981Z"
        fill="#DE6647"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M301.498 204.948C299.286 203.574 298.608 200.666 299.981 198.454C301.353 196.243 304.259 195.56 306.471 196.935C306.949 197.232 307.582 197.085 307.88 196.605C308.178 196.125 308.029 195.491 307.551 195.194C304.379 193.224 300.209 194.202 298.241 197.374C296.273 200.545 297.246 204.718 300.418 206.688C300.896 206.985 301.529 206.839 301.828 206.358C302.126 205.878 301.976 205.245 301.498 204.948Z"
        fill="#DE6647"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M295.524 218.73L296.876 213.198C297.057 212.467 297.797 212.019 298.526 212.196C299.258 212.376 299.707 213.116 299.529 213.849L298.162 219.436L295.524 218.73ZM299.234 219.722L300.253 215.821C300.444 215.092 301.19 214.655 301.919 214.845C302.648 215.036 303.085 215.782 302.894 216.511L301.872 220.429L299.234 219.722ZM312.611 181.713L310.962 188.028C310.77 188.757 310.025 189.195 309.296 189.004C308.566 188.813 308.13 188.067 308.321 187.338L309.973 181.007L312.611 181.713ZM308.295 180.558L307.18 185.43C307.013 186.165 306.278 186.624 305.543 186.455C304.808 186.286 304.351 185.554 304.518 184.819L305.657 179.852L308.295 180.558Z"
        fill="#DE6647"
      />
      <path
        d="M298.807 173.781C303.372 173.781 307.072 170.078 307.072 165.511C307.072 160.944 303.372 157.241 298.807 157.241C294.241 157.241 290.541 160.944 290.541 165.511C290.541 170.078 294.241 173.781 298.807 173.781Z"
        fill="#FFCF84"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M298.917 160.218C301.904 160.218 304.33 162.646 304.33 165.637C304.33 168.628 301.904 171.056 298.917 171.056C298.63 171.056 298.393 171.289 298.393 171.576C298.393 171.864 298.63 172.097 298.917 172.097C302.479 172.097 305.371 169.202 305.371 165.637C305.371 162.071 302.479 159.177 298.917 159.177C298.63 159.177 298.393 159.41 298.393 159.697C298.393 159.984 298.63 160.218 298.917 160.218Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M298.934 171.056C295.943 171.056 293.517 168.628 293.517 165.637C293.517 162.646 295.943 160.218 298.934 160.218C299.217 160.218 299.45 159.984 299.45 159.697C299.45 159.41 299.217 159.177 298.934 159.177C295.368 159.177 292.476 162.071 292.476 165.637C292.476 169.202 295.368 172.097 298.934 172.097C299.217 172.097 299.45 171.864 299.45 171.576C299.45 171.289 299.217 171.056 298.934 171.056Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M297.343 173.659L297.418 171.681C297.428 171.394 297.671 171.17 297.957 171.181C298.247 171.192 298.469 171.434 298.459 171.721L298.38 173.748C298.029 173.74 297.681 173.71 297.343 173.659ZM300.37 173.554L299.861 171.533C299.793 171.255 299.96 170.972 300.24 170.902C300.517 170.832 300.8 171.001 300.872 171.279L301.37 173.264C301.046 173.381 300.711 173.478 300.37 173.554ZM291.699 170.071L293.255 168.842C293.48 168.663 293.808 168.702 293.985 168.927C294.163 169.153 294.125 169.48 293.9 169.658L292.33 170.898C292.105 170.637 291.893 170.36 291.699 170.071ZM290.648 167.836L292.593 166.781C292.845 166.644 293.163 166.738 293.299 166.991C293.436 167.243 293.34 167.559 293.088 167.696L291.013 168.823C290.87 168.504 290.75 168.174 290.648 167.836ZM306.748 166.701L304.871 166.614C304.584 166.601 304.362 166.357 304.376 166.07C304.39 165.783 304.632 165.561 304.919 165.574L306.836 165.663C306.83 166.015 306.799 166.361 306.748 166.701ZM304.356 159.574C304.605 159.817 304.837 160.076 305.055 160.349L303.53 161.916C303.328 162.122 303.001 162.127 302.796 161.926C302.588 161.726 302.585 161.396 302.786 161.19L304.356 159.574ZM294.456 158.31L295.807 160.329C295.968 160.567 295.903 160.891 295.664 161.051C295.425 161.211 295.101 161.147 294.944 160.908L293.589 158.885C293.862 158.676 294.152 158.483 294.456 158.31ZM299.292 157.241C299.64 157.271 299.984 157.323 300.322 157.396L300.117 159.462C300.087 159.748 299.831 159.957 299.547 159.928C299.261 159.9 299.053 159.645 299.08 159.359L299.292 157.241Z"
        fill="#FDA92F"
      />
      <path
        d="M276.423 182.824C275.905 187.361 279.162 191.46 283.697 191.979C288.233 192.497 292.33 189.238 292.848 184.7C293.366 180.162 290.109 176.064 285.573 175.545C281.038 175.027 276.941 178.286 276.423 182.824Z"
        fill="#FFCF84"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M289.846 184.515C289.507 187.484 286.821 189.62 283.851 189.281C280.881 188.942 278.745 186.254 279.084 183.285C279.116 183 278.911 182.738 278.626 182.705C278.341 182.673 278.083 182.881 278.05 183.167C277.646 186.707 280.192 189.911 283.733 190.315C287.273 190.72 290.476 188.173 290.88 184.633C290.913 184.347 290.708 184.086 290.423 184.053C290.137 184.021 289.879 184.229 289.846 184.515Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M279.093 183.262C279.433 180.29 282.119 178.153 285.089 178.493C288.059 178.832 290.195 181.52 289.856 184.492C289.824 184.774 290.029 185.032 290.314 185.065C290.599 185.097 290.857 184.892 290.89 184.61C291.294 181.066 288.748 177.863 285.207 177.458C281.667 177.054 278.464 179.6 278.06 183.144C278.027 183.426 278.233 183.684 278.518 183.717C278.803 183.749 279.061 183.544 279.093 183.262Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M276.704 181.383L278.659 181.682C278.943 181.724 279.138 181.991 279.094 182.274C279.051 182.561 278.785 182.754 278.501 182.712L276.498 182.404C276.546 182.055 276.615 181.713 276.704 181.383ZM276.465 184.403L278.529 184.127C278.813 184.091 279.075 184.289 279.113 184.575C279.151 184.858 278.951 185.12 278.666 185.16L276.639 185.43C276.56 185.094 276.502 184.751 276.465 184.403ZM280.907 176.179L281.951 177.865C282.103 178.109 282.027 178.431 281.783 178.582C281.539 178.732 281.219 178.658 281.067 178.414L280.014 176.713C280.299 176.519 280.598 176.34 280.907 176.179ZM283.246 175.388L284.073 177.441C284.18 177.708 284.051 178.012 283.784 178.119C283.518 178.227 283.215 178.096 283.108 177.829L282.225 175.639C282.558 175.533 282.898 175.451 283.246 175.388ZM282.546 191.521L282.845 189.665C282.891 189.381 283.158 189.189 283.442 189.235C283.725 189.281 283.918 189.547 283.873 189.83L283.566 191.726C283.218 191.68 282.878 191.61 282.546 191.521ZM289.895 189.951C289.625 190.171 289.342 190.373 289.046 190.559L287.663 188.865C287.481 188.641 287.514 188.315 287.736 188.134C287.959 187.95 288.287 187.984 288.468 188.208L289.895 189.951ZM292.274 180.254L290.115 181.369C289.86 181.501 289.546 181.4 289.415 181.144C289.283 180.889 289.383 180.574 289.638 180.445L291.801 179.328C291.978 179.623 292.136 179.933 292.274 180.254ZM292.786 185.182C292.717 185.525 292.626 185.862 292.516 186.189L290.487 185.751C290.207 185.688 290.028 185.41 290.089 185.132C290.149 184.85 290.426 184.672 290.707 184.732L292.786 185.182Z"
        fill="#FDA92F"
      />
      <path
        d="M260.996 219.964C264.341 223.071 269.571 222.877 272.677 219.53C275.784 216.183 275.59 210.951 272.244 207.843C268.899 204.735 263.669 204.929 260.563 208.276C257.456 211.623 257.65 216.856 260.996 219.964Z"
        fill="#FFCF84"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M270.301 210.167C272.49 212.2 272.617 215.631 270.583 217.823C268.549 220.015 265.119 220.142 262.93 218.109C262.72 217.913 262.388 217.923 262.192 218.134C261.997 218.344 262.012 218.676 262.222 218.872C264.832 221.296 268.921 221.144 271.345 218.531C273.77 215.918 273.619 211.828 271.009 209.404C270.798 209.208 270.466 209.218 270.271 209.429C270.076 209.639 270.09 209.971 270.301 210.167Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M262.897 218.05C260.706 216.015 260.579 212.583 262.613 210.391C264.647 208.2 268.077 208.072 270.268 210.108C270.476 210.301 270.805 210.289 271.001 210.078C271.196 209.868 271.184 209.538 270.976 209.345C268.363 206.918 264.275 207.071 261.851 209.683C259.426 212.296 259.577 216.386 262.189 218.813C262.397 219.006 262.727 218.994 262.922 218.783C263.117 218.573 263.105 218.243 262.897 218.05Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M259.999 218.877L261.399 217.479C261.602 217.276 261.931 217.277 262.134 217.48C262.339 217.686 262.337 218.014 262.134 218.217L260.699 219.649C260.447 219.404 260.212 219.145 259.999 218.877ZM262.289 220.861L263.29 219.034C263.429 218.784 263.744 218.69 263.997 218.829C264.247 218.966 264.34 219.283 264.203 219.536L263.218 221.329C262.901 221.194 262.59 221.038 262.289 220.861ZM258.303 212.406L260.279 212.564C260.565 212.587 260.779 212.838 260.756 213.124C260.733 213.41 260.482 213.625 260.196 213.602L258.203 213.442C258.216 213.097 258.248 212.75 258.303 212.406ZM259.052 210.053L261.195 210.604C261.473 210.675 261.642 210.96 261.57 211.238C261.499 211.516 261.214 211.683 260.935 211.611L258.649 211.024C258.761 210.693 258.897 210.37 259.052 210.053ZM271.623 220.181L270.306 218.84C270.105 218.635 270.109 218.305 270.314 218.104C270.519 217.903 270.847 217.905 271.049 218.11L272.393 219.481C272.149 219.734 271.891 219.967 271.623 220.181ZM274.717 213.329C274.734 213.677 274.728 214.025 274.702 214.374L272.519 214.484C272.231 214.498 271.988 214.278 271.974 213.992C271.958 213.703 272.18 213.459 272.467 213.445L274.717 213.329ZM268.322 205.664L267.939 208.064C267.894 208.348 267.627 208.54 267.343 208.495C267.059 208.45 266.865 208.182 266.912 207.9L267.295 205.495C267.638 205.528 267.981 205.585 268.322 205.664ZM272.592 208.173C272.827 208.432 273.044 208.704 273.242 208.987L271.687 210.362C271.47 210.551 271.14 210.53 270.952 210.316C270.761 210.1 270.782 209.772 270.997 209.581L272.592 208.173Z"
        fill="#FDA92F"
      />
      <path
        d="M312.731 222.613C317.215 221.76 320.16 217.432 319.307 212.945C318.455 208.458 314.128 205.512 309.643 206.365C305.158 207.218 302.214 211.546 303.066 216.033C303.919 220.52 308.246 223.466 312.731 222.613Z"
        fill="#FFCF84"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M310.312 209.289C313.246 208.731 316.083 210.663 316.641 213.601C317.2 216.54 315.269 219.378 312.335 219.937C312.053 219.99 311.864 220.264 311.917 220.546C311.971 220.828 312.247 221.013 312.529 220.959C316.028 220.294 318.329 216.91 317.664 213.407C316.998 209.904 313.617 207.601 310.118 208.267C309.835 208.32 309.647 208.594 309.7 208.876C309.754 209.158 310.03 209.343 310.312 209.289Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M312.361 219.966C309.423 220.525 306.586 218.593 306.028 215.655C305.47 212.717 307.4 209.878 310.338 209.319C310.617 209.266 310.802 208.993 310.748 208.711C310.695 208.429 310.422 208.243 310.144 208.297C306.641 208.963 304.34 212.347 305.006 215.849C305.671 219.352 309.053 221.655 312.555 220.989C312.834 220.936 313.019 220.663 312.965 220.381C312.912 220.099 312.64 219.913 312.361 219.966Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M311.272 222.787L310.976 220.83C310.933 220.546 311.129 220.281 311.413 220.238C311.7 220.195 311.963 220.391 312.006 220.675L312.308 222.68C311.961 222.738 311.613 222.774 311.272 222.787ZM314.226 222.118L313.349 220.228C313.23 219.967 313.342 219.658 313.603 219.537C313.862 219.417 314.172 219.53 314.294 219.79L315.154 221.646C314.857 221.822 314.547 221.98 314.226 222.118ZM305.057 220.317L306.357 218.818C306.545 218.601 306.874 218.578 307.09 218.766C307.306 218.954 307.331 219.283 307.143 219.5L305.832 221.012C305.562 220.796 305.302 220.565 305.057 220.317ZM303.608 218.317L305.322 216.918C305.544 216.736 305.873 216.769 306.055 216.992C306.236 217.214 306.201 217.543 305.978 217.724L304.15 219.218C303.95 218.932 303.771 218.631 303.608 218.317ZM319.212 214.195L317.352 214.46C317.068 214.5 316.805 214.302 316.765 214.018C316.725 213.733 316.921 213.47 317.205 213.429L319.106 213.158C319.165 213.505 319.199 213.851 319.212 214.195ZM315.532 207.639C315.822 207.832 316.098 208.043 316.364 208.27L315.158 210.095C314.999 210.335 314.678 210.401 314.439 210.242C314.197 210.084 314.132 209.761 314.292 209.521L315.532 207.639ZM305.571 208.247L307.275 209.978C307.477 210.183 307.474 210.513 307.269 210.715C307.064 210.916 306.734 210.914 306.535 210.709L304.827 208.974C305.056 208.718 305.305 208.475 305.571 208.247ZM310.122 206.294C310.469 206.258 310.817 206.245 311.163 206.253L311.347 208.322C311.371 208.608 311.158 208.861 310.875 208.886C310.588 208.912 310.336 208.7 310.309 208.414L310.122 206.294Z"
        fill="#FDA92F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M290.763 222.028L250.721 291.789H234.253C234.253 291.789 229.193 302.605 236.86 306.565H312.395C312.473 306.565 312.548 306.572 312.627 306.582C314.131 306.692 322.727 306.446 329.528 288.815C340.578 260.177 351.778 243.656 363.09 222.028H290.763Z"
        fill="#E9E9EB"
      />
      <path
        d="M274.429 286.225C280.987 287.159 288.007 282.716 290.11 276.303C292.213 269.889 288.602 263.933 282.044 263C275.486 262.066 268.465 266.508 266.363 272.922C264.26 279.335 267.871 285.291 274.429 286.225Z"
        fill="white"
      />
      <path
        d="M354.195 225.762L292.02 225.102L289.359 229.96L351.533 230.62L354.195 225.762Z"
        fill="#BABDC2"
      />
      <path
        d="M349.992 234.658L287.525 234.097L284.871 238.959L347.338 239.52L349.992 234.658Z"
        fill="#BABDC2"
      />
      <path
        d="M345.185 244.381L282.518 242.75L279.785 247.565L342.452 249.196L345.185 244.381Z"
        fill="#BABDC2"
      />
      <path
        d="M340.192 254.106L277.852 251.404L275.042 256.17L337.383 258.873L340.192 254.106Z"
        fill="#BABDC2"
      />
      <path
        d="M333.492 264.127L300.214 262.448L297.881 267.097L331.158 268.776L333.492 264.127Z"
        fill="#BABDC2"
      />
      <path
        d="M327.979 273.933L305.506 272.582L303.56 277.252L326.033 278.603L327.979 273.933Z"
        fill="#BABDC2"
      />
      <path
        d="M323.485 283.799L293.67 281.577L292.043 286.27L321.857 288.493L323.485 283.799Z"
        fill="#BABDC2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M252.208 289.205H306.162C306.223 289.205 306.285 289.212 306.346 289.219C306.926 289.297 307.414 289.615 307.64 290.352C307.749 290.707 307.759 291.414 307.619 292.37C307.124 295.794 304.916 304.436 313.755 306.576C313.233 306.634 312.84 306.624 312.615 306.61C312.536 306.6 312.461 306.593 312.383 306.593H307.766C307.466 306.327 307.189 306.047 306.933 305.757C303.821 302.22 304.155 297.099 304.661 293.667C304.746 293.077 304.831 292.438 304.896 291.936L250.71 291.817L252.208 289.205Z"
        fill="black"
      />
      <path
        d="M272.706 276.995C273.638 278.203 274.958 278.962 276.675 279.318C278.737 279.697 279.985 279.219 280.484 277.895C280.854 276.809 280.393 276.02 279.099 275.528C278.486 275.322 277.829 275.107 277.113 274.858C275.834 274.391 274.956 273.718 274.494 272.863C274.016 271.983 273.97 271.013 274.334 269.947C274.768 268.677 275.559 267.738 276.754 267.14C277.903 266.534 279.296 266.389 280.917 266.683C282.87 267.106 284.397 267.949 285.505 269.192L283.556 270.758C282.63 269.813 281.458 269.17 280.051 268.874C279.321 268.732 278.647 268.776 278.041 269.03C277.414 269.279 276.967 269.76 276.707 270.453C276.56 270.883 276.611 271.286 276.846 271.703C277.081 272.12 277.578 272.458 278.303 272.751C278.702 272.895 279.271 273.093 279.994 273.321C281.412 273.793 282.327 274.496 282.762 275.432C283.181 276.344 283.227 277.315 282.871 278.36C281.853 281.133 279.514 282.186 275.897 281.527C273.576 281.075 271.796 280.008 270.571 278.349L272.706 276.995Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M281.381 264.768L273.465 282.706L275.298 283.265L283.281 265.169L281.381 264.768Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M449.871 260.532C448.98 259.555 447.793 259.012 446.827 259.647C443.435 261.877 441.121 264.256 437.794 266.575C427.509 273.744 413.081 275.742 406.703 287.503C400.237 299.419 399.909 314.021 394.156 326.404C386.406 343.092 375.312 357.9 367.095 374.342C356.919 394.694 341.072 439.323 341.072 439.323C335.953 439.248 310.711 442.543 295.366 444.912C294.782 445.001 294.369 445.527 294.414 446.114C294.458 446.705 294.949 447.159 295.54 447.159C331.718 447.159 437.801 447.159 462.48 447.159C463.739 447.159 464.903 446.486 465.534 445.397C466.165 444.308 466.172 442.963 465.544 441.87C462.384 436.343 456.914 433.103 450.823 431.594C446.138 430.433 441.616 431.003 436.897 431.403C436.719 431.416 436.494 431.447 436.358 431.307C436.323 431.273 436.276 431.211 436.255 431.17C435.003 428.569 435.672 413.799 435.713 410.477C435.887 396.636 436.504 382.754 437.692 368.961C438.074 364.533 438.866 351.802 438.866 351.802C438.866 351.802 449.506 350.337 452.56 349.644C460.081 347.944 466.223 343.072 470.523 336.735C476.901 327.336 477.314 314.571 480.201 303.878C482.613 294.926 487.128 287.951 490.987 279.739C492.991 275.479 492.284 269.183 487.654 266.892C483.125 264.649 478.378 269.337 475.529 272.334C466.462 281.887 465.998 295.031 458.252 304.506C452.758 311.221 441.674 312.454 441.674 312.454C441.674 312.454 441.333 304.263 441.674 301.989C443.384 290.61 449.796 283.376 452.406 272.904C453.16 269.873 452.734 263.659 449.871 260.532Z"
        fill="#DD6140"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M424.319 356.55C429.253 354.027 438.856 351.828 438.856 351.828C438.856 351.828 438.604 355.905 438.313 360.244C434.611 358.902 429.97 358.506 424.845 358.592C424.346 358.599 423.906 358.261 423.783 357.779C423.657 357.294 423.879 356.786 424.319 356.55Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M429.196 275.73L431.387 277.345C431.994 277.792 432.85 277.662 433.297 277.054C433.744 276.45 433.615 275.593 433.007 275.146L430.817 273.531C430.209 273.084 429.356 273.213 428.909 273.818C428.462 274.425 428.588 275.282 429.196 275.73Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M436.085 430.641C435.993 430.498 435.928 430.337 435.89 430.16C433.051 415.718 429.25 405.834 424.947 399.276C420.821 392.987 416.265 389.835 411.706 388.716C402.51 386.452 393.463 392.317 388.43 396.418C386.137 398.282 384.403 400.105 384.403 400.105C384.141 400.43 383.731 400.628 383.281 400.607C382.53 400.569 381.946 399.928 381.984 399.177C381.984 399.156 381.953 398.743 382.383 398.268C382.673 397.951 384.243 396.305 386.707 394.298C392.235 389.791 402.25 383.577 412.358 386.063C417.453 387.316 422.616 390.744 427.229 397.777C430.297 402.451 433.136 408.75 435.566 417.111C435.467 422.147 435.457 428.333 436.085 430.641ZM412.382 282.631C412.382 282.631 407.959 293.748 405.233 300.61C403.598 304.714 405.305 309.391 409.191 311.484C410.962 312.444 412.757 313.154 414.573 313.601C417.036 314.216 419.647 313.656 421.647 312.092C423.65 310.525 424.817 308.125 424.817 305.581C424.817 296.974 424.817 283.133 424.817 283.133C424.817 282.382 424.206 281.768 423.452 281.768C422.701 281.768 422.087 282.382 422.087 283.133C422.087 283.133 422.087 296.974 422.087 305.581C422.087 307.285 421.305 308.889 419.964 309.938C418.627 310.989 416.88 311.361 415.228 310.952C413.627 310.556 412.051 309.927 410.488 309.081C407.816 307.643 406.649 304.434 407.768 301.621C410.498 294.758 414.921 283.638 414.921 283.638C415.197 282.939 414.856 282.143 414.156 281.867C413.453 281.587 412.662 281.928 412.382 282.631ZM441.603 309.726C441.644 311.293 441.691 312.454 441.691 312.454C441.691 312.454 441.91 312.43 442.302 312.372C440.616 312.717 439.057 312.864 437.593 312.85C436.839 312.843 436.235 312.225 436.242 311.474C436.249 310.719 436.863 310.112 437.617 310.119C438.859 310.129 440.18 310.006 441.603 309.726ZM490.544 269.439C491.052 270.207 491.428 271.068 491.677 271.972C486.493 275.728 482.617 281.447 482.433 281.785C482.074 282.447 481.245 282.693 480.583 282.334C479.921 281.976 479.675 281.146 480.034 280.484C480.238 280.101 484.671 273.557 490.544 269.439ZM485.49 266.312C486.217 266.353 486.947 266.534 487.671 266.892C487.971 267.039 488.254 267.206 488.524 267.387C486.319 269.067 481.839 272.891 477.242 279.227C476.802 279.835 475.945 279.972 475.338 279.528C474.727 279.087 474.591 278.23 475.034 277.623C479.013 272.136 482.921 268.442 485.49 266.312ZM442.312 263.072C443.729 261.911 445.152 260.76 446.844 259.647C447.81 259.012 448.997 259.555 449.888 260.532C450.564 261.269 451.103 262.177 451.526 263.177C447.65 267.203 443.367 263.98 442.312 263.072Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="190.265"
          y1="345.577"
          x2="527.144"
          y2="147.032"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B8D8D5" />
          <stop offset="0.42" stopColor="#CEE0DA" />
          <stop offset="1" stopColor="#FFF0E6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="79.5502"
          y1="106.847"
          x2="-86.7512"
          y2="315.127"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B8D8D5" />
          <stop offset="0.47" stopColor="#CCDFDA" />
          <stop offset="1" stopColor="#FFF0E6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="568.572"
          y1="150.967"
          x2="671.263"
          y2="250.917"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFBF2F" />
          <stop offset="1" stopColor="#FD9500" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="638.8"
          y1="337.91"
          x2="471.34"
          y2="225.092"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFBF2F" />
          <stop offset="0.48" stopColor="#FEB422" />
          <stop offset="1" stopColor="#FD9500" />
        </linearGradient>
      </defs>
    </Icon>
  )
}

const Illustration2 = (props) => {
  return (
    <Box>
      <NextImage src={rndSvgIllustration} >
      </NextImage>
    </Box>
  )
}

