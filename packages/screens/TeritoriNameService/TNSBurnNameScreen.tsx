import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";

import burnSVG from "../../../assets/icons/burn.svg";
import { BrandText } from "../../components/BrandText";
import { SVG } from "../../components/SVG";
import { ScreenContainer } from "../../components/ScreenContainer";
import { SecondaryButton } from "../../components/buttons/SecondaryButton";
import { BackTo } from "../../components/navigation/BackTo";
import { NameNFT } from "../../components/teritoriNameService/NameNFT";
import { useFeedbacks } from "../../context/FeedbacksProvider";
import { useTNS } from "../../context/TNSProvider";
import { useTokenList } from "../../hooks/tokens";
import { useAreThereWallets } from "../../hooks/useAreThereWallets";
import { useIsKeplrConnected } from "../../hooks/useIsKeplrConnected";
import { defaultExecuteFee } from "../../utils/fee";
import {
  getFirstKeplrAccount,
  getSigningCosmWasmClient,
} from "../../utils/keplr";
import { defaultMemo } from "../../utils/memo";
import { ScreenFC, useAppNavigation } from "../../utils/navigation";
import { neutral33 } from "../../utils/style/colors";
import { isTokenOwnedByUser } from "../../utils/tns";

export const TNSBurnNameScreen: ScreenFC<"TNSBurnName"> = ({ route }) => {
  const { name, setName } = useTNS();
  const { setToastError, setToastSuccess, setLoadingFullScreen } =
    useFeedbacks();
  const { tokens, loadingTokens } = useTokenList();
  const isKeplrConnected = useIsKeplrConnected();
  const userHasCoWallet = useAreThereWallets();
  const navigation = useAppNavigation();
  const contractAddress = process.env.PUBLIC_WHOAMI_ADDRESS as string;
  const normalizedTokenId = (name + process.env.TLD).toLowerCase();

  // Sync loadingFullScreen
  useEffect(() => {
    setLoadingFullScreen(loadingTokens);
  }, [loadingTokens]);

  // ==== Init
  useFocusEffect(() => {
    // ---- Setting the name from TNSContext. Redirects to TNSHome if this screen is called when the user doesn't own the token
    setName(route.params.name);
    // ===== Controls many things, be careful TODO: Still redirects to TNSHome, weird..
    if (
      (name &&
        tokens.length &&
        (!userHasCoWallet || !isTokenOwnedByUser(tokens, name))) ||
      !isKeplrConnected
    ) {
      navigation.navigate("TNSHome");
    }
  });

  const onSubmit = async () => {
    setLoadingFullScreen(true);

    const msg = {
      burn: {
        token_id: normalizedTokenId,
      },
    };
    try {
      const signingClient = await getSigningCosmWasmClient();

      const walletAddress = (await getFirstKeplrAccount()).address;

      const updatedToken = await signingClient.execute(
        walletAddress!,
        contractAddress,
        msg,
        defaultExecuteFee,
        defaultMemo
      );
      if (updatedToken) {
        console.log(normalizedTokenId + " successfully burnt");
        setToastSuccess({
          title: normalizedTokenId + " successfully burnt",
          message: "",
        });
        navigation.navigate("TNSManage");
        setLoadingFullScreen(false);
      }
    } catch (e) {
      if (e instanceof Error) {
        setToastError({
          title: "Something went wrong!",
          message: e.message,
        });
      }
      console.warn(e);
      setLoadingFullScreen(false);
    }
  };

  return (
    <ScreenContainer
      hideSidebar
      headerStyle={{ borderBottomColor: "transparent" }}
      footerChildren={
        <BackTo
          label={"Back to " + name}
          onPress={() => navigation.navigate("TNSConsultName", { name })}
        />
      }
    >
      <View
        style={{
          flex: 1,
          marginTop: 32,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <NameNFT name={name} />

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            height: 404,
            maxHeight: 404,
            minHeight: 404,
            width: "100%",
            maxWidth: 396,
            borderColor: neutral33,
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: "#000000",
            padding: 24,
            marginLeft: 20,
          }}
        >
          <View>
            <View
              style={{ flex: 1, alignItems: "center", flexDirection: "row" }}
            >
              <SVG
                width={32}
                height={32}
                source={burnSVG}
                style={{ marginRight: 16 }}
              />
              <BrandText style={{ fontSize: 32, lineHeight: 44 }}>
                Burn {name}
              </BrandText>
            </View>
            <BrandText
              style={{
                fontSize: 16,
                lineHeight: 20,
                color: "#A3A3A3",
                marginTop: 16,
              }}
            >
              This will permanently destroy the token. The token will no longer
              be visible from the name service and another token with the same
              name will be mintable.
            </BrandText>
          </View>

          <SecondaryButton
            fullWidth
            size="XS"
            text="I understand, burn it"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};