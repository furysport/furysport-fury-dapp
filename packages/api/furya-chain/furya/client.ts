// @ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as furyaAirdropV1beta1TxRegistry from "./airdrop/v1beta1/tx.registry";
import * as furyaMintV1beta1TxRegistry from "./mint/v1beta1/tx.registry";
import * as furyaAirdropV1beta1TxAmino from "./airdrop/v1beta1/tx.amino";
import * as furyaMintV1beta1TxAmino from "./mint/v1beta1/tx.amino";
export const furyaAminoConverters = {
  ...furyaAirdropV1beta1TxAmino.AminoConverter,
  ...furyaMintV1beta1TxAmino.AminoConverter
};
export const furyaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...furyaAirdropV1beta1TxRegistry.registry, ...furyaMintV1beta1TxRegistry.registry];
export const getSigningFuryaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...furyaProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...furyaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningFuryaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningFuryaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};
