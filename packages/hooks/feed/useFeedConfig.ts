import { useQuery } from "@tanstack/react-query";

import { FuryaSocialFeedQueryClient } from "../../contracts-clients/furya-social-feed/FuryaSocialFeed.client";
import {
  getCosmosNetwork,
  mustGetNonSigningCosmWasmClient,
} from "../../networks";

export const useFeedConfig = (networkId: string) => {
  const { data: feedConfig, ...other } = useQuery(
    ["feedConfig", networkId],
    async () => {
      const network = getCosmosNetwork(networkId);
      if (!network?.socialFeedContractAddress) {
        return null;
      }
      const cosmwasmClient = await mustGetNonSigningCosmWasmClient(networkId);
      const client = new FuryaSocialFeedQueryClient(
        cosmwasmClient,
        network.socialFeedContractAddress
      );
      const conf = await client.config();
      return conf;
    },
    { staleTime: Infinity }
  );
  return { feedConfig, ...other };
};
