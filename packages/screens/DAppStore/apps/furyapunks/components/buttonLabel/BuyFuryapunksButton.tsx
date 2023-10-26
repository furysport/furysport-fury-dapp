import { Linking } from "react-native";

import { ButtonLabel } from "./ButtonLabel";

export const BuyFuryapunksButton: React.FC<{ size: "S" | "Mobile" }> = ({
  size,
}) => (
  <ButtonLabel
    text="BUY FURYAPUNKS"
    size={size}
    actionable
    onPress={() => {
      Linking.openURL(
        "/collection/furya-furya1plr28ztj64a47a32lw7tdae8vluzm2lm7nqk364r4ws50rgwyzgsmasxhj"
      );
    }}
  />
);
