import {
    Avatar,
    Box,
    chakra,
    Flex,
    SimpleGrid,
    useColorModeValue,
    Button,
    AvatarBadge,
  } from '@chakra-ui/react';

import Head from 'next/head';
import NextLink from 'next/link'

  const artistDescription = [
    {
        name: 'Letaru Dralega',
        active: true,
        role: 'Founder, Curator, Mixed-Media Artist',
        content: "Letaru is a multidisciplinary artist based in Kampala. She experiments across collage, marbling, painting, installation and sound to create meditative works and to contemplate belonging, and memory as they relate to the African/Afro-diasporic postcolonial condition, to race, religion and cosmology.",
        avatar:'../../../images/team/LetaruPFP.png',
        followLink:
            'https://www.instagram.com/letaru.dralega/',
    },
    {
      name: 'Obaya Dralega',
      active: true,
      role: 'Founder, Technologist, Generative Artist',
      content:"Computer Scientist by training exploring African Fractals, Biological Systems, Emergence, Recursion and Blockchains+NFTs",
      avatar: '../../../images/team/ObiPFP.png',
    followLink:
        'https://www.instagram.com/odralega/',
    },
    {
      name: 'Kharumwa',
      active: true,
      role: 'Photographer, Digital Artist',
      content:"Award-Winning Photographer and Digital Artist. He is interested in the theories around the next evolution of the homosapien that originated from East Africa, and what roles we are invited to play in the next chapter of the species.",
      avatar:'../../../images/team/MartinPFP.png',
      followLink:
        'https://www.instagram.com/kharumwa/',
    },
    {
      name: 'Odur',
      active: true,
      role: 'Founder, Painter, Sculptor, Installation',
      content: "A multi-disciplinary visual artist, he uses aluminum printing plates, exploring its possibilities one technique at a time. He paints, dents, burns, stitches, and weaves the shiny metal achieving texture, color, shape, and character. His sculptures, installations, paintings, and performances explore the complexities of socio-political interactions and their influence in the contemporary world. His work addresses contemporary issues of power, movement, access, belonging, and personhood.",
      avatar: '../../../images/team/OdurPFP.png',
      followLink:
        'https://www.instagram.com/odurart/',
    },
    {
        name: 'Mona Taha',
        active: false,
        role: 'Charcoal Artist',
        content:'Mona primarily works with charcoal on medium to large-scale paper. Her drawings are figurative and oftentimes self-portraits depicting herself in intimate, yet mundane poses. She is fascinated by anatomy and how the body can portray a message oscillating between motion and stillness. The figures depicted in her work seem to be frozen in moments between movement and stillness, moving on from stillness, yet caught in suspension while contemplating how to move forward. ',
        avatar: '../../../images/team/MonaPFP.png',
        followLink:
          'https://www.instagram.com/mona_tee/',
      },
      {
        name: 'Henry Robinson',
        active: true,
        role: 'Photographer',
        content:'Henry is a Jamaican photographer who has worked commercially in film and photography in both Jamaica and the UK. Specializing in portrait photography, he spent his time in residence capturing a series on women and their bicycles in Lira ',
        avatar: '../../../images/team/HenryPFP.png',
        followLink:
          'https://www.instagram.com/oh_henry/',
      },
      {
        name: 'SCARLETMOTIFF',
        active: true,
        role: 'Technologist, Generative artist',
        content:'Scarlet Motiff is an audio-visual artist and technologist. He generates his code-based art using programming languages such as Python and the real-time programming visual language TouchDesigner. His current body of work Generative Dreams, began in 2020 as a daily practice of contemplation, and to date, consists of over 800 unique sound and video pieces.  He’s always on the lookout for new ways to translate the narratives of our analog world into the digital tongue. ',
        avatar: '../../../images/team/NoelPFP.png',
        followLink:
          'https://www.instagram.com/scarletmotiff/',
      },
      {
        name: 'Tracian Meikle',
        active: false,
        role: 'Curator, Artist and Educator',
        content:'A Jamaican based between Lagos and Amsterdam, her work focuses on blackness, place-making and community-building for black people. Tracian&apos;s artistic work is experimental and research-based; her installations vary in medium and range from second-hand clothing to plastic sheets. Tracian is currently the lead facilitator at 1952 Africa, and is also a co-curator of the Treehouse Lagos, a space that supports creative experimentation and artistic research.',
        avatar: '../../../images/team/TracianPFP.jpeg',
        followLink:
          'https://www.instagram.com/tracianmeikle/',
      }
      ,
      {
        name: 'Birungi Kawooya',
        active: false,
        role: 'Mixed Media, Natural Fibre',
        content:'She is the first Artist in Residence hosted by the Njabala Foundation in Uganda from Sept 2022 - March 2023. Her residency was tailored to provide for her specific needs as a Ugandan - British artist with the urge to explore her own interests and culture with the mentorship of 5 women artists. She is working towards creating self-portraits and installations around the theme of care, self-reflection and well-being to exhibit with the Njabala Foundation in March 2023. She has been supported by the Arts Council England.',
        avatar: '../../../images/team/birungiPFP.jpeg',
        followLink:
          'https://www.instagram.com/birungiart/',
      }
  ];
  
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  
  


  function ArtistCard(props) {
    const { name, active, role, content, avatar, followLink, index  } = props;
    return (
      <Flex
        // boxShadow={'xl'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        // rounded={'xl'}
        rounded={'none'}
        p={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }

        >
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p fontFamily={'Space Mono'} fontWeight={'bold'} fontSize={20}>
            {name}
            <chakra.span
              fontFamily={'Space Mono'}
              fontWeight={'medium'}
              color={'gray.500'}
              py={3}>
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
          <chakra.p
            fontFamily={'Space Mono'}
            fontWeight={'light'}
            fontSize={'15px'}
            pb={10}>
            {content}
          </chakra.p>
        <NextLink href={followLink} passHref>
            <Button
                // flex={1}
                onClick={followLink}
                size={'xs'}
                fontSize={'md'}
                rounded={'none'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Follow
            </Button>
        </NextLink>

        </Flex>
        <Avatar
          src={avatar}
          height={'200px'}
          width={'200px'}
          alignSelf={'center'}
          size='2xl'
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        >
        <AvatarBadge boxSize='1.25em' bg={active ? 'green.500' : 'blue.500'} />
        </Avatar>

      </Flex>
    );
  }
  
  export default function GridBlurredBackdrop() {
    return (
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        py={10}
        >
      <Head>
        <title>Artists: Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>
        
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Space Mono'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'blue.400'}>
            Our Thinkers, Creators and Doers
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Space Mono'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Artists
          </chakra.h1>
          <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Space Mono'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          {' '}
          <chakra.strong color={useColorModeValue('green.500', 'green.500')}>
            Current
          </chakra.strong>{' '}
          and  {' '}
          <chakra.strong color={useColorModeValue('blue.500', 'blue.500')}>
             Past 
          </chakra.strong>{' '}

            Residents
        </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {artistDescription.map((cardInfo, index) => (
            <ArtistCard {...cardInfo} index={index} key={index} />
          ))}
        {/* <SocialProfileWithImageHorizontal /> */}

        </SimpleGrid>
      </Flex>
    );
  }