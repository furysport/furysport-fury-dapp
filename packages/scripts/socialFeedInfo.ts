import { FuryaSocialFeedQueryClient } from "../contracts-clients/furya-social-feed/FuryaSocialFeed.client";
import { mustGetNonSigningCosmWasmClient } from "../networks";
import { furyaNetwork } from "../networks/furya";

const main = async () => {
  const network = furyaNetwork;
  if (!network.socialFeedContractAddress) {
    throw new Error("no social feed contract address in network config");
  }

  console.log("contract address:", network.socialFeedContractAddress);

  const client = new FuryaSocialFeedQueryClient(
    await mustGetNonSigningCosmWasmClient(network.id),
    network.socialFeedContractAddress
  );

  const config = await client.config();
  console.log(config);
};

main();
