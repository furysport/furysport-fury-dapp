import React from "react";
import {
  Linking,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
} from "react-native";

import { LegalFooter } from "./LegalFooter";
import getUpImage from "../../../assets/getup.png";
import discordSVG from "../../../assets/icons/discord.svg";
import mediumSVG from "../../../assets/icons/medium.svg";
import twitterSVG from "../../../assets/icons/twitter.svg";
import logoSVG from "../../../assets/logos/logo.svg";
import { secondaryColor } from "../../utils/style/colors";
import { layout, screenContentMaxWidthLarge } from "../../utils/style/layout";
import { SVG } from "../SVG";
import { TertiaryBox } from "../boxes/TertiaryBox";

const FooterSocialNetworks: React.FC = () => {
  return (
    <TertiaryBox
      mainContainerStyle={{ padding: layout.spacing_x1, flexDirection: "row" }}
      style={{ marginBottom: layout.contentSpacing }}
    >
      <TouchableOpacity
        style={{ marginRight: layout.spacing_x1 }}
        onPress={() => Linking.openURL("https://medium.com/furya/")}
      >
        <TertiaryBox
          mainContainerStyle={{
            borderColor: secondaryColor,
            borderRadius: 12,
            padding: layout.spacing_x1_5,
          }}
        >
          <SVG source={mediumSVG} width={20} height={20} />
        </TertiaryBox>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginRight: layout.spacing_x1 }}
        onPress={() => Linking.openURL("https://twitter.com/FuryaNetwork")}
      >
        <TertiaryBox
          mainContainerStyle={{
            borderColor: secondaryColor,
            borderRadius: 12,
            padding: layout.spacing_x1_5,
          }}
        >
          <SVG source={twitterSVG} width={20} height={20} />
        </TertiaryBox>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL("https://discord.gg/furya")}
      >
        <TertiaryBox
          mainContainerStyle={{
            borderColor: secondaryColor,
            borderRadius: 12,
            padding: layout.spacing_x1_5,
          }}
        >
          <SVG source={discordSVG} width={20} height={20} />
        </TertiaryBox>
      </TouchableOpacity>
    </TertiaryBox>
  );
};

const FooterGetUp: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        maxWidth: screenContentMaxWidthLarge,
        justifyContent: "space-between",
        marginBottom: layout.contentSpacing,
      }}
    >
      <Image
        source={{ uri: getUpImage }}
        style={{
          width: 323,
          height: 179,
        }}
      />
      <Image
        source={{ uri: getUpImage }}
        style={{
          width: 323,
          height: 179,
        }}
      />
      <Image
        source={{ uri: getUpImage }}
        style={{
          width: 323,
          height: 179,
        }}
      />
    </View>
  );
};

const FooterLogo: React.FC = () => {
  return (
    <View style={{ marginBottom: layout.spacing_x4 }}>
      <SVG source={logoSVG} width={88} height={88} />
    </View>
  );
};

export const Footer: React.FC<{
  style?: StyleProp<ViewStyle>;
}> = ({ style, children }) => {
  return (
    <View
      style={[
        {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        },
        style,
      ]}
    >
      <FooterGetUp />

      <FooterLogo />

      <FooterSocialNetworks />

      <LegalFooter>{children}</LegalFooter>
    </View>
  );
};
