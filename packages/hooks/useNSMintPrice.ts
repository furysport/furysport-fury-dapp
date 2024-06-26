import { useQuery } from "@tanstack/react-query";

import { FuryaNameServiceQueryClient } from "../contracts-clients/furya-name-service/FuryaNameService.client";
import { getCosmosNetwork, mustGetNonSigningCosmWasmClient } from "../networks";

// TODO: move all ns hooks to a hooks/ns directory

export const useNSMintPrice = (
  networkId: string | undefined,
  tokenId: string
) => {
  const { data } = useQuery(
    ["nsMintPrice", networkId, tokenId],
    async () => {
      if (!networkId) {
        return null;
      }
      const network = getCosmosNetwork(networkId);
      if (!network?.nameServiceContractAddress) {
        return null;
      }

      const client = await mustGetNonSigningCosmWasmClient(networkId);

      const tnsClient = new FuryaNameServiceQueryClient(
        client,
        network.nameServiceContractAddress
      );

      const info = await tnsClient.contractInfo();

      const amount = await tnsClient.mintPrice({ tokenId });

      return { denom: info.native_denom, amount: amount?.toString() || "0" };
    },
    { staleTime: Infinity }
  );

  return data;
};
