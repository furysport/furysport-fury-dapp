import { currencyFURYAcolor } from "../../utils/style/colors";
import { CurrencyInfo } from "../types";

export const furyaCurrencies: CurrencyInfo[] = [
  {
    denom: "ufury",
    displayName: "FURY",
    decimals: 6,
    coingeckoId: "fanfury",
    icon: "icons/networks/furya-circle.svg",
    kind: "native",
    color: currencyFURYAcolor,
  },
];
