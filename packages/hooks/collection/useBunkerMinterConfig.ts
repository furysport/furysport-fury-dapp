import { useQuery } from "@tanstack/react-query";

import { FuryaBunkerMinterQueryClient } from "../../contracts-clients/furya-bunker-minter/FuryaBunkerMinter.client";
import { mustGetNonSigningCosmWasmClient } from "../../networks";

export const useBunkerMinterConfig = (
  networkId: string | undefined,
  contractAddress: string | undefined,
  enabled?: boolean
) => {
  if (enabled === undefined) {
    enabled = true;
  }
  const { data, ...other } = useQuery(
    ["bunkerMinterConfig", networkId, contractAddress],
    async () => {
      if (!networkId || !contractAddress) {
        return undefined;
      }
      const cosmwasm = await mustGetNonSigningCosmWasmClient(networkId);
      const minterClient = new FuryaBunkerMinterQueryClient(
        cosmwasm,
        contractAddress
      );
      return await minterClient.config();
    },
    {
      staleTime: Infinity,
      enabled: !!networkId && !!contractAddress && enabled,
    }
  );
  return { bunkerMinterConfig: data, ...other };
};
