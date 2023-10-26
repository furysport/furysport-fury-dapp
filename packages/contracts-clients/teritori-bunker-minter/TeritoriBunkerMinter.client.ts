/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint128, ConfigResponse, Addr, Config, CurrentSupplyResponse, ExecuteMsg, Metadata, Attribute, InstantiateMsg, IsWhitelistedResponse, MigrateMsg, QueryMsg, TokenRequestByIndexResponse, TokenRequestsCountResponse, WhitelistSizeResponse } from "./FuryaBunkerMinter.types";
export interface FuryaBunkerMinterReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  isWhitelisted: ({
    addr
  }: {
    addr: Addr;
  }) => Promise<IsWhitelistedResponse>;
  whitelistSize: () => Promise<WhitelistSizeResponse>;
  tokenRequestsCount: () => Promise<TokenRequestsCountResponse>;
  currentSupply: () => Promise<CurrentSupplyResponse>;
  tokenRequestByIndex: ({
    index
  }: {
    index: Uint128;
  }) => Promise<TokenRequestByIndexResponse>;
}
export class FuryaBunkerMinterQueryClient implements FuryaBunkerMinterReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.isWhitelisted = this.isWhitelisted.bind(this);
    this.whitelistSize = this.whitelistSize.bind(this);
    this.tokenRequestsCount = this.tokenRequestsCount.bind(this);
    this.currentSupply = this.currentSupply.bind(this);
    this.tokenRequestByIndex = this.tokenRequestByIndex.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  isWhitelisted = async ({
    addr
  }: {
    addr: Addr;
  }): Promise<IsWhitelistedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_whitelisted: {
        addr
      }
    });
  };
  whitelistSize = async (): Promise<WhitelistSizeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      whitelist_size: {}
    });
  };
  tokenRequestsCount = async (): Promise<TokenRequestsCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_requests_count: {}
    });
  };
  currentSupply = async (): Promise<CurrentSupplyResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      current_supply: {}
    });
  };
  tokenRequestByIndex = async ({
    index
  }: {
    index: Uint128;
  }): Promise<TokenRequestByIndexResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_request_by_index: {
        index
      }
    });
  };
}
export interface FuryaBunkerMinterInterface extends FuryaBunkerMinterReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    mintMax,
    mintStartTime,
    minter,
    nftAddr,
    nftBaseUri,
    nftMaxSupply,
    nftPriceAmount,
    nftSymbol,
    owner,
    priceDenom,
    royaltyPaymentAddress,
    royaltyPercentage,
    secondaryDuringMint,
    whitelistMintMax,
    whitelistMintPeriod,
    whitelistMintPriceAmount
  }: {
    mintMax?: Uint128;
    mintStartTime?: number;
    minter?: string;
    nftAddr?: Addr;
    nftBaseUri?: string;
    nftMaxSupply?: Uint128;
    nftPriceAmount?: Uint128;
    nftSymbol?: string;
    owner?: string;
    priceDenom?: string;
    royaltyPaymentAddress?: string;
    royaltyPercentage?: number;
    secondaryDuringMint?: boolean;
    whitelistMintMax?: Uint128;
    whitelistMintPeriod?: number;
    whitelistMintPriceAmount?: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  whitelist: ({
    addrs
  }: {
    addrs: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  startMint: ({
    mintStartTime
  }: {
    mintStartTime?: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  requestMint: ({
    addr
  }: {
    addr: Addr;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mint: ({
    extension,
    tokenId,
    tokenUri
  }: {
    extension?: Metadata;
    tokenId: string;
    tokenUri?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  pause: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  unpause: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  withdrawFund: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class FuryaBunkerMinterClient extends FuryaBunkerMinterQueryClient implements FuryaBunkerMinterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.startMint = this.startMint.bind(this);
    this.requestMint = this.requestMint.bind(this);
    this.mint = this.mint.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
    this.withdrawFund = this.withdrawFund.bind(this);
  }

  updateConfig = async ({
    mintMax,
    mintStartTime,
    minter,
    nftAddr,
    nftBaseUri,
    nftMaxSupply,
    nftPriceAmount,
    nftSymbol,
    owner,
    priceDenom,
    royaltyPaymentAddress,
    royaltyPercentage,
    secondaryDuringMint,
    whitelistMintMax,
    whitelistMintPeriod,
    whitelistMintPriceAmount
  }: {
    mintMax?: Uint128;
    mintStartTime?: number;
    minter?: string;
    nftAddr?: Addr;
    nftBaseUri?: string;
    nftMaxSupply?: Uint128;
    nftPriceAmount?: Uint128;
    nftSymbol?: string;
    owner?: string;
    priceDenom?: string;
    royaltyPaymentAddress?: string;
    royaltyPercentage?: number;
    secondaryDuringMint?: boolean;
    whitelistMintMax?: Uint128;
    whitelistMintPeriod?: number;
    whitelistMintPriceAmount?: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        mint_max: mintMax,
        mint_start_time: mintStartTime,
        minter,
        nft_addr: nftAddr,
        nft_base_uri: nftBaseUri,
        nft_max_supply: nftMaxSupply,
        nft_price_amount: nftPriceAmount,
        nft_symbol: nftSymbol,
        owner,
        price_denom: priceDenom,
        royalty_payment_address: royaltyPaymentAddress,
        royalty_percentage: royaltyPercentage,
        secondary_during_mint: secondaryDuringMint,
        whitelist_mint_max: whitelistMintMax,
        whitelist_mint_period: whitelistMintPeriod,
        whitelist_mint_price_amount: whitelistMintPriceAmount
      }
    }, fee, memo, funds);
  };
  whitelist = async ({
    addrs
  }: {
    addrs: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      whitelist: {
        addrs
      }
    }, fee, memo, funds);
  };
  startMint = async ({
    mintStartTime
  }: {
    mintStartTime?: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      start_mint: {
        mint_start_time: mintStartTime
      }
    }, fee, memo, funds);
  };
  requestMint = async ({
    addr
  }: {
    addr: Addr;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      request_mint: {
        addr
      }
    }, fee, memo, funds);
  };
  mint = async ({
    extension,
    tokenId,
    tokenUri
  }: {
    extension?: Metadata;
    tokenId: string;
    tokenUri?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {
        extension,
        token_id: tokenId,
        token_uri: tokenUri
      }
    }, fee, memo, funds);
  };
  pause = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      pause: {}
    }, fee, memo, funds);
  };
  unpause = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unpause: {}
    }, fee, memo, funds);
  };
  withdrawFund = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw_fund: {}
    }, fee, memo, funds);
  };
}