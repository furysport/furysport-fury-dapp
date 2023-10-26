import { useQuery } from "@tanstack/react-query";

import { FuryaMinter__factory } from "../../evm-contracts-clients/furya-bunker-minter/FuryaMinter__factory";
import { NetworkKind, getNetwork } from "../../networks";
import { getEthereumProvider } from "../../utils/ethereum";

export const useEthMinterConfig = (
  networkId: string | undefined,
  mintAddress: string | undefined,
  enabled?: boolean
) => {
  if (enabled === undefined) {
    enabled = true;
  }
  return useQuery(
    ["ethMinterConfig", networkId, mintAddress],
    async () => {
      if (!mintAddress) {
        return undefined;
      }

      const network = getNetwork(networkId);
      if (network?.kind !== NetworkKind.Ethereum) {
        return undefined;
      }

      const provider = await getEthereumProvider(network);
      if (!provider) {
        return undefined;
      }

      const minterClient = FuryaMinter__factory.connect(
        mintAddress,
        provider
      );
      return await minterClient.callStatic.config();
    },
    { staleTime: Infinity, enabled: enabled && !!networkId && !!mintAddress }
  );
};
