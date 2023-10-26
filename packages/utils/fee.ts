import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/stargate";

export const defaultSocialFeedFee: StdFee = {
  amount: coins(5000, "ufury"), // FIXME: get from network
  gas: "30010000",
};
