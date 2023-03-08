import { useEvmNativeBalance } from "@moralisweb3/next";
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");


function HomePage(props) {


  const address = "0x7335cBb8fe37c51a6B781A5084C7bFB8fE72e208";
  const { data: nativeBalance } = useEvmNativeBalance({ address });

    const metadataString = JSON.stringify(props.metadata);
    // const metadataJson = metadataString.toJSON();



  return (
    <div>
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
      <h3>NFT Address: {address} </h3>
      <h3>NFT Metadata: {props.contract_type} </h3>
    </div>
  );
}
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


export default HomePage;