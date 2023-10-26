import { FuryaNftVaultQueryClient } from "../contracts-clients/furya-nft-vault/FuryaNftVault.client";
import { mustGetNonSigningCosmWasmClient } from "../networks";
import { furyaNetwork } from "../networks/furya";

const main = async () => {
  const network = furyaNetwork;
  if (!network.vaultContractAddress) {
    throw new Error("no vault contract address in network config");
  }

  console.log("contract address:", network.vaultContractAddress);

  const client = new FuryaNftVaultQueryClient(
    await mustGetNonSigningCosmWasmClient(network.id),
    network.vaultContractAddress
  );

  const config = await client.config();
  console.log(config);
};

main();
