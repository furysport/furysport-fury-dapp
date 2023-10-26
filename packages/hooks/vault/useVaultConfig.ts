import { useQuery } from "@tanstack/react-query";

import { FuryaNftVaultQueryClient } from "../../contracts-clients/furya-nft-vault/FuryaNftVault.client";
import {
  getCosmosNetwork,
  mustGetNonSigningCosmWasmClient,
} from "../../networks";

export const useVaultConfig = (networkId: string) => {
  const { data: vaultConfig, ...other } = useQuery(
    ["vaultConfig", networkId],
    async () => {
      const network = getCosmosNetwork(networkId);
      if (!network?.vaultContractAddress) {
        return undefined;
      }
      const cosmwasmClient = await mustGetNonSigningCosmWasmClient(networkId);
      const client = new FuryaNftVaultQueryClient(
        cosmwasmClient,
        network.vaultContractAddress
      );
      return await client.config();
    },
    { staleTime: Infinity }
  );
  return { vaultConfig, ...other };
};
