import { useQuery } from "@tanstack/react-query";

import { FuryaNftQueryClient } from "../contracts-clients/furya-nft/FuryaNft.client";
import { mustGetNonSigningCosmWasmClient } from "../networks";

export const useCW721ContractInfo = (
  networkId: string | undefined,
  contractAddress: string | undefined
) => {
  const { data: cw721ContractInfo, ...other } = useQuery(
    ["nftContractInfo", networkId, contractAddress],
    async () => {
      if (!contractAddress || !networkId) {
        return undefined;
      }
      const cosmwasm = await mustGetNonSigningCosmWasmClient(networkId);
      const nftClient = new FuryaNftQueryClient(cosmwasm, contractAddress);
      return await nftClient.contractInfo();
    },
    { enabled: !!contractAddress && !!networkId }
  );

  return { cw721ContractInfo, ...other };
};
