import { furyaTestnetCurrencies } from "./currencies";
import { NetworkFeature, NetworkInfo, NetworkKind } from "../types";

const nameServiceContractAddress =
  "furya18etjzrma5604af50jjklk3wlkqcsxdrvmy6jzw5naw2t7kyv4rysh2n3ra";

const riotContractAddressGen1 =
  "furya1afwrcs58afaka6ltynevwcvq8zhejr3ssn703c0hky5emh890vzs9cx35d";

export const furyaTestnetNetwork: NetworkInfo = {
  id: "furya-testnet",
  kind: NetworkKind.Cosmos,
  chainId: "furya-testnet-v3",
  displayName: "Furya Testnet",
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
  currencies: furyaTestnetCurrencies,
  txExplorer: "https://explorer.furya.xyz/furya-testnet/tx/$hash",
  accountExplorer:
    "https://explorer.furya.xyz/furya-testnet/account/$address",
  contractExplorer:
    "https://explorer.furya.xyz/furya-testnet/account/$address",
  idPrefix: "testfury",
  testnet: true,
  backendEndpoint: "https://dapp-backend.testnet.furya.xyz",
  addressPrefix: "furya",
  restEndpoint: "https://rest.testnet.furya.xyz",
  rpcEndpoint: "https://rpc.testnet.furya.xyz",
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
  nameServiceTLD: ".furya",
  vaultContractAddress:
    "furya13d26fzmvuvlvvxwt3ur0vkv8j6f28mf4nqfmxu3xk5r57wzxxglq6h4xh0",
  riotContractAddressGen0:
    "furya162skshe30f43kv2q2rw6we2mu3pvz43lm2zrg4hq50jdd2fjjdjs284yd8",
  riotContractAddressGen1,
  riotSquadStakingContractAddressV1:
    "furya15wl5lw9pxpedcekgqr8vk5xfpkrsax3reyfkkey458t6a7vv0d5skp3f0z",
  riotSquadStakingContractAddressV2:
    "furya1gzk7kets2dfr7rcmzunkem0a23pn9ktkpjf0elxp38x42zpddt6q3sz7sx",
  distributorContractAddress:
    "furya1ff0ze096zcy5va5xhl7zenwt5vca6z9n0l8du7q7qsd7ftrcz0cq23anap",
  riotersFooterContractAddress:
    "furya1m6g3l3j5t988zwmp965hrhsxvm8jrkf2ulw4gmwj8hx8pd84tvcql90u95",
  secondaryDuringMintList: [
    nameServiceContractAddress,
    riotContractAddressGen1,
  ],
  excludeFromLaunchpadList: [riotContractAddressGen1],
  socialFeedContractAddress:
    "furya19y3xr6lghw04tj2ets8y70mrynlnflejanl2ys3n3c5vaasj358s3wzflk",
  daoCw20CodeId: 99,
  daoFactoryCodeId: 100,
  daoCoreCodeId: 101,
  daoPreProposeSingleCodeId: 102,
  daoProposalSingleCodeId: 103,
  daoVotingCw20StakedCodeId: 104,
  daoCw20StakeCodeId: 105,
  daoCw4GroupCodeId: 106,
  daoVotingCw4CodeId: 109,
  daoFactoryContractAddress:
    "furya1r29chp8ufwgx9u3wr4sfk050aardhkzwve7nht6y06gvlaqutr3qdmra06",
  coreDAOAddress:
    "furya1dy5h9q9zue4swxe9mzracm8gudp0fcf2ncllch6pfq9d0fq0ftgqjfgs0g",
};
