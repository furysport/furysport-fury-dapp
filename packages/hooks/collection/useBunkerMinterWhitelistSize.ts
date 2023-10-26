import { useQuery } from "@tanstack/react-query";

import { FuryaBunkerMinterQueryClient } from "../../contracts-clients/furya-bunker-minter/FuryaBunkerMinter.client";
import { mustGetNonSigningCosmWasmClient } from "../../networks";

export const useBunkerMinterWhitelistSize = (
  networkId: string | undefined,
  contractAddress: string | undefined,
  enabled?: boolean
) => {
  const { data, ...other } = useQuery(
    ["bunkerMinterWhitelistSize", networkId, contractAddress],
    async () => {
      if (!networkId || !contractAddress) {
        return undefined;
      }
      const cosmwasm = await mustGetNonSigningCosmWasmClient(networkId);
      const minterClient = new FuryaBunkerMinterQueryClient(
        cosmwasm,
        contractAddress
      );
      return await minterClient.whitelistSize();
    },
    { staleTime: Infinity, enabled }
  );
  return { bunkerMinterWhitelistSize: data, ...other };
};
