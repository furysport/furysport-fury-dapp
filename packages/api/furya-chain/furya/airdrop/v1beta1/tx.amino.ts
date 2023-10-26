// @ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimAllocation, MsgSetAllocation, MsgTransferModuleOwnership, MsgDepositTokens } from "./tx";
export interface MsgClaimAllocationAminoType extends AminoMsg {
  type: "/furya.airdrop.v1beta1.MsgClaimAllocation";
  value: {
    address: string;
    pub_key: string;
    reward_address: string;
    signature: string;
  };
}
export interface MsgSetAllocationAminoType extends AminoMsg {
  type: "/furya.airdrop.v1beta1.MsgSetAllocation";
  value: {
    sender: string;
    allocation: {
      chain: string;
      address: string;
      amount: string;
      claimed_amount: string;
    };
  };
}
export interface MsgTransferModuleOwnershipAminoType extends AminoMsg {
  type: "/furya.airdrop.v1beta1.MsgTransferModuleOwnership";
  value: {
    sender: string;
    new_owner: string;
  };
}
export interface MsgDepositTokensAminoType extends AminoMsg {
  type: "/furya.airdrop.v1beta1.MsgDepositTokens";
  value: {
    sender: string;
    amount: string[];
  };
}
export const AminoConverter = {
  "/furya.airdrop.v1beta1.MsgClaimAllocation": {
    aminoType: "/furya.airdrop.v1beta1.MsgClaimAllocation",
    toAmino: ({
      address,
      pubKey,
      rewardAddress,
      signature
    }: MsgClaimAllocation): MsgClaimAllocationAminoType["value"] => {
      return {
        address,
        pub_key: pubKey,
        reward_address: rewardAddress,
        signature
      };
    },
    fromAmino: ({
      address,
      pub_key,
      reward_address,
      signature
    }: MsgClaimAllocationAminoType["value"]): MsgClaimAllocation => {
      return {
        address,
        pubKey: pub_key,
        rewardAddress: reward_address,
        signature
      };
    }
  },
  "/furya.airdrop.v1beta1.MsgSetAllocation": {
    aminoType: "/furya.airdrop.v1beta1.MsgSetAllocation",
    toAmino: ({
      sender,
      allocation
    }: MsgSetAllocation): MsgSetAllocationAminoType["value"] => {
      return {
        sender,
        allocation: {
          chain: allocation.chain,
          address: allocation.address,
          amount: allocation.amount,
          claimed_amount: allocation.claimedAmount
        }
      };
    },
    fromAmino: ({
      sender,
      allocation
    }: MsgSetAllocationAminoType["value"]): MsgSetAllocation => {
      return {
        sender,
        allocation: {
          chain: allocation.chain,
          address: allocation.address,
          amount: allocation.amount,
          claimedAmount: allocation.claimed_amount
        }
      };
    }
  },
  "/furya.airdrop.v1beta1.MsgTransferModuleOwnership": {
    aminoType: "/furya.airdrop.v1beta1.MsgTransferModuleOwnership",
    toAmino: ({
      sender,
      newOwner
    }: MsgTransferModuleOwnership): MsgTransferModuleOwnershipAminoType["value"] => {
      return {
        sender,
        new_owner: newOwner
      };
    },
    fromAmino: ({
      sender,
      new_owner
    }: MsgTransferModuleOwnershipAminoType["value"]): MsgTransferModuleOwnership => {
      return {
        sender,
        newOwner: new_owner
      };
    }
  },
  "/furya.airdrop.v1beta1.MsgDepositTokens": {
    aminoType: "/furya.airdrop.v1beta1.MsgDepositTokens",
    toAmino: ({
      sender,
      amount
    }: MsgDepositTokens): MsgDepositTokensAminoType["value"] => {
      return {
        sender,
        amount
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgDepositTokensAminoType["value"]): MsgDepositTokens => {
      return {
        sender,
        amount
      };
    }
  }
};
