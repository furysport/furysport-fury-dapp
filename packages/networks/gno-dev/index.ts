import { gnoCurrencies } from "./currencies";
import { GnoNetworkInfo, NetworkFeature, NetworkKind } from "../types";

export const gnoDevNetwork: GnoNetworkInfo = {
  id: "gno-dev",
  kind: NetworkKind.Gno,
  displayName: "Gno Dev",
  icon: "icons/networks/gno.svg",
  features: [
    NetworkFeature.Organizations,
    NetworkFeature.SocialFeed,
    NetworkFeature.UPP,
  ],
  currencies: gnoCurrencies,
  stakeCurrency: "ugnot",
  idPrefix: "gnodev",
  chainId: "dev",
  endpoint: "http://127.0.0.1:36657/http://127.0.0.1:26657",
  txExplorer: "https://etherscan.io/tx/$hash",
  accountExplorer: "https://etherscan.io/address/$address",
  contractExplorer: "https://etherscan.io/address/$address",
  testnet: true,
  backendEndpoint: "http://localhost:9090",
  vaultContractAddress: "",
  daoRegistryPkgPath: "gno.land/r/demo/furya/dao_registry",
  socialFeedsPkgPath: "gno.land/r/demo/furya/social_feeds",
  socialFeedsDAOPkgPath: "gno.land/r/demo/furya/social_feeds_dao",
  nameServiceContractAddress: "gno.land/r/demo/users",
  modboardsPkgPath: "gno.land/r/demo/furya/modboards",
  groupsPkgPath: "gno.land/r/demo/furya/groups",
  votingGroupPkgPath: "gno.land/p/demo/furya/dao_voting_group",
  daoProposalSinglePkgPath: "gno.land/p/demo/furya/dao_proposal_single",
  daoInterfacesPkgPath: "gno.land/p/demo/furya/dao_interfaces",
  daoCorePkgPath: "gno.land/p/demo/furya/dao_core",
  nameServiceDefaultImage:
    "ipfs://bafkreignptjimiu7wuux6mk6uh4hb4odb6ff62ny4bvdokrhes7g67huse",
  gnowebURL: "http://127.0.0.1:8888",
};
