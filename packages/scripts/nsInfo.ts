import { FuryaNameServiceQueryClient } from "../contracts-clients/furya-name-service/FuryaNameService.client";
import { mustGetNonSigningCosmWasmClient } from "../networks";
import { furyaNetwork } from "../networks/furya";

const main = async () => {
  const network = furyaNetwork;
  if (!network.nameServiceContractAddress) {
    throw new Error("no name service contract address in network config");
  }

  console.log("contract address:", network.nameServiceContractAddress);

  const client = new FuryaNameServiceQueryClient(
    await mustGetNonSigningCosmWasmClient(network.id),
    network.nameServiceContractAddress
  );

  const admin = await client.adminAddress();
  console.log("admin address:", admin);

  const config = await client.contractInfo();
  console.log(config);
};

main();
