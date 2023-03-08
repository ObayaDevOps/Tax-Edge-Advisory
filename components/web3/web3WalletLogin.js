
import {
  Icon,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
    useBreakpointValue,

  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Head from 'next/head'





import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { MoralisNextApi, useEvmNativeBalance, useAuthRequestChallengeEvm } from "@moralisweb3/next";
const apikey = MoralisNextApi({ apiKey: process.env.MORALIS_API_KEY });

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");


function Web3WalletLoginPage(props) {
  const [showPassword, setShowPassword] = useState(false);


  //General Calls for chain data
  const address = "0x7335cBb8fe37c51a6B781A5084C7bFB8fE72e208";
  // const address = "vitalik.eth"; //Note: ENS not working out the box

  const { data: nativeBalance } = useEvmNativeBalance({ address });
  const metadataString = JSON.stringify(props.metadata);

  //Need to hadle the login errors !
  //For Sign in
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();


  
  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    //wait fot the user to sign the message
    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/tech/web3-user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);

    console.log(signature); //this is client-side
  };

  //OD: The Display of the page
  return (
    <div>
      {/* <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
      <h3>NFT Address: {address} </h3>
      <h3>NFT Metadata: {props.contract_type} </h3> */}
        <Head>
        <title>this. NFT Login | Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>

      </Head>


      <Box minHeight={'100vh'} alignItems="center">
      <Blur
        position={'fixed'}
        top={'30vh'}
        left={'40vw'}
        style={{ filter: 'blur(80px)' }}
      />
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Connect Wallet
          </Heading>
          <Text fontSize={'lg'} color={'white.600'}>
            to learn more about <i>this.</i>✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={4}>
               
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleAuth}
                loadingText="Signing In!"
                size="lg"
                bg={'white.400'}
                color={'white'}
                _hover={{
                  bg: 'white.500',
                }}>
                Authenticate via Metamask
              </Button>
            </Stack>
        </Box>
      </Stack>
    </Flex>



    </Box>
    </div>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      alignContent={'center'}
      height="560px"
      viewBox="-30 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};






export async function getStaticProps(context) {
    const address = "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b"; //NFT Address
    const chain = EvmChain.ETHEREUM;
    const tokenId = 7010;

    const response = await Moralis.EvmApi.nft.getNFTMetadata({
        address,
        chain,
        tokenId,
    });

    return {
        props: response.toJSON()
    };
}


export default Web3WalletLoginPage;