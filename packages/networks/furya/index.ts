import { furyaCurrencies } from "./currencies";
import { NetworkKind, CosmosNetworkInfo, NetworkFeature } from "../types";

const nameServiceContractAddress =
  "furya1kuwymnvq87gtmgcktakd9nhdunfmh03dngyhynzswmraag9gpklq8jkhck";
const riotContractAddressGen1 =
  "furya1mskh66lkd7y2pn6mhjpwc4swy79t9gck42h0zfd7lx9rmkqyu2zsmq4y0e";

export const furyaNetwork: CosmosNetworkInfo = {
  id: "furya",
  kind: NetworkKind.Cosmos,
  chainId: "furya-1",
  displayName: "Furya",
  icon: "icons/networks/furya.svg",
  features: [
    NetworkFeature.NFTMarketplace,
    NetworkFeature.Organizations,
    NetworkFeature.SocialFeed,
    NetworkFeature.UPP,
    NetworkFeature.NameService,
    NetworkFeature.BurnTokens,
    NetworkFeature.NFTLaunchpad,
    NetworkFeature.RiotP2E,
  ],
  overrides: "cosmos-registry:furya",
  walletUrlForStaking: "https://app.furya.com/staking",
  currencies: furyaCurrencies,
  txExplorer: "https://www.mintscan.io/furya/txs/$hash",
  accountExplorer: "https://www.mintscan.io/furya/account/$address",
  contractExplorer: "https://www.mintscan.io/furya/account/$address",
  idPrefix: "furya",
  testnet: false,
  backendEndpoint: "https://dapp-backend.mainnet.furya.com",
  addressPrefix: "furya",
  restEndpoint: "https://api.furya.xyz",
  rpcEndpoint: "https://rpc.furya.xyz",
  stakeCurrency: "ufury",
  gasPriceStep: {
    low: 0.0,
    average: 0.025,
    high: 0.04,
  },
  cosmosFeatures: [
    "stargate",
    "ibc-transfer",
    "cosmwasm",
    "no-legacy-stdTx",
    "ibc-go",
  ],
  nameServiceContractAddress,
  nameServiceDefaultImage:
    "ipfs://bafkreieqcwmjcb64r42ygs6a4dswz63djzgayjn3rhzjber3e42cknawlm",
  nameServiceTLD: ".fury",
  vaultContractAddress:
    "furya1x2ru7ta9pkz8hgqd4u5m774c0djx82fxpgjcfjfl3fmp2fj5y23svu0fuw",
  riotContractAddressGen0:
    "furya1k75l9qg8dl7aqk3aa24j2u6ey3frmzy597jaajryeszfzgvchs2s05yjhs",
  riotContractAddressGen1,
  riotSquadStakingContractAddressV1:
    "furya12j48zqus4tc6g8df4luxw6wunk9gdn07kjr3fpe3564ktrujsexsqevqga",
  riotSquadStakingContractAddressV2:
    "furya1yfym0f5ck8m0vvqnqel7zx82jt04lkt9h4m76m9dqdwcxf67crfsjgrs0k",
  distributorContractAddress:
    "furya1h5ndearvduw2jcq6x0taj0aurrwpr6v3skqd05ff3gx9rrpmepwqxs9v8x",
  riotersFooterContractAddress:
    "furya1m6g3l3j5t988zwmp965hrhsxvm8jrkf2ulw4gmwj8hx8pd84tvcql90u95",
  secondaryDuringMintList: [
    nameServiceContractAddress,
    riotContractAddressGen1,
    "furya1r8raaqul4j05qtn0t05603mgquxfl8e9p7kcf7smwzcv2hc5rrlqfsyx7k", // Furya's pets
    "furya167xst2jy9n6u92t3n8hf762adtpe3cs6acsgn0w5n2xlz9hv3xgsn2z80j", // Diseases of the Brain AI
    "furya1qdgvugdnscwnj8lc96q666000gyjv434kn9zl9ey3dph6p0cunuszx32ll", // Furysouls
    "furya1r5f97ltu4d5jdn8jv5zjhc0vz2npjhnc9zcuz29z8ua739s376dqeg0h7v", // The skull arts
    "furya16504tvqjzrln0gsewpcn20863h5ftr638fxlx37a6ntd7w5tudwqkmmw7f", // Mr Crypto
  ],
  excludeFromLaunchpadList: [riotContractAddressGen1],
  socialFeedContractAddress:
    "furya1h8z59cfgu4tq9j8rzpknshlvwztr8z796e7jy98zfymn56xpg6psysqfcn",
  daoFactoryContractAddress:
    "furya16rxh5hgukhdq8rvm2j3t6v483dcqguwp4l825vlwz5pmfpw7s4rsngpvdy",
  daoCoreCodeId: 27,
  daoPreProposeSingleCodeId: 28,
  daoProposalSingleCodeId: 31,
  daoCw4GroupCodeId: 32,
  daoVotingCw4CodeId: 33,
};
