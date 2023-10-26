import { gnoCurrencies } from "./currencies";
import { GnoNetworkInfo, NetworkFeature, NetworkKind } from "../types";

export const gnoFuryaNetwork: GnoNetworkInfo = {
  id: "gno-furya",
  kind: NetworkKind.Gno,
  displayName: "Gno Furya",
  icon: "icons/networks/gno.svg",
  features: [
    NetworkFeature.Organizations,
    NetworkFeature.SocialFeed,
    NetworkFeature.UPP,
  ],
  currencies: gnoCurrencies,
  stakeCurrency: "ugnot",
  idPrefix: "gnofurya",
  chainId: "furya-1",
  endpoint: "https://testnet.gno.furya.xyz:26658",
  txExplorer: "https://etherscan.io/tx/$hash",
  accountExplorer: "https://etherscan.io/address/$address",
  contractExplorer: "https://etherscan.io/address/$address",
  testnet: true,
  backendEndpoint: "https://dapp-backend.testnet.furya.xyz",
  vaultContractAddress: "",
  nameServiceContractAddress: "gno.land/r/demo/users",
  nameServiceDefaultImage:
    "ipfs://bafkreignptjimiu7wuux6mk6uh4hb4odb6ff62ny4bvdokrhes7g67huse",
  daoRegistryPkgPath: "gno.land/r/demo/furya/dao_registry_v4",
  socialFeedsPkgPath: "gno.land/r/demo/furya/social_feeds_v4",
  socialFeedsDAOPkgPath: "gno.land/r/demo/furya/social_feeds_dao_v2",
  modboardsPkgPath: "gno.land/r/demo/furya/modboards_v4",
  groupsPkgPath: "gno.land/r/demo/furya/groups_v4",
  votingGroupPkgPath: "gno.land/p/demo/furya/dao_voting_group_v2",
  daoProposalSinglePkgPath: "gno.land/p/demo/furya/dao_proposal_single_v4",
  daoInterfacesPkgPath: "gno.land/p/demo/furya/dao_interfaces_v5",
  daoCorePkgPath: "gno.land/p/demo/furya/dao_core_v4",
  gnowebURL: "https://testnet.gno.furya.xyz",
  faucetURL: "https://testnet.gno.furya.xyz:5050/?toaddr=$addr",
};
