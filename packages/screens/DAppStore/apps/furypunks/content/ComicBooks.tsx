import { useEffect } from "react";
import { Linking, TouchableOpacity, View } from "react-native";

import { ButtonLabel } from "../components/buttonLabel/ButtonLabel";
import { BuyFurypunksButton } from "../components/buttonLabel/BuyFurypunksButton";
import { Label } from "../components/label/Label";
import { useContentContext } from "../context/ContentProvider";
import { useComicHistoryData } from "../query/useComicBookHistory";

export const ComicBooks = () => {
  const { setSelectedSectionHandler, isMinimunWindowWidth, selectedWallet } =
    useContentContext();

  const styleTypeSize = isMinimunWindowWidth ? "80" : "40";

  const { data, refetch: handleFetchHistoryData } = useComicHistoryData({
    selectedWallet,
  });
  useEffect(() => {
    handleFetchHistoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWallet]);

  return (
    <>
      <View
        style={{
          height: isMinimunWindowWidth ? "56vh" : "74vh",
          justifyContent: isMinimunWindowWidth ? "space-around" : "flex-end",
          alignItems: "center",
          paddingHorizontal: isMinimunWindowWidth ? 0 : 18,
          marginBottom: isMinimunWindowWidth ? 0 : "-2em",
          marginTop: isMinimunWindowWidth ? "6vh" : "none",
        }}
      >
        <Label
          styleType={`H1_Bebas_${styleTypeSize}`}
          style={{ textAlign: "center", color: "#E8E1EF" }}
        >
          Punks, here's the prize
        </Label>
        <Label
          styleType={`H1_Bebas_${styleTypeSize}`}
          style={{ textAlign: "center", color: "#E8E1EF" }}
        >
          pool of the last
        </Label>
        <Label
          styleType={`H2_DHBS_${styleTypeSize}`}
          style={{
            textAlign: "center",
            color: "#FFD753",
            marginTop: 16,
            marginBottom: 16,
            transform: [{ rotate: "-1.5deg" }],
          }}
        >
          early punks wallet
        </Label>
        <Label
          styleType={`H1_Bebas_${styleTypeSize}`}
          style={{
            textAlign: "center",
            color: "#E8E1EF",
            fontSize: isMinimunWindowWidth
              ? parseInt(styleTypeSize, 10) + 8
              : parseInt(styleTypeSize, 10),
          }}
        >
          {data[0]?.poolPrice} $FURY
        </Label>
        <Label
          styleType={`H1_Bebas_${styleTypeSize}`}
          style={{ textAlign: "center", color: "#E8E1EF" }}
        >
          DIVIDED BY {data[0]?.wallets} WALLETS
        </Label>
        <Label
          styleType="T1_Bebas_20"
          style={{ textAlign: "center", color: "#E8E1EF" }}
        >
          Holders of 1 furypunk + 5 different comic books
        </Label>
        <View
          style={{
            alignContent: "center",
            marginTop: 16,
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            height: 180,
          }}
        >
          <ButtonLabel
            text="BUY COMIC BOOKS"
            size="S"
            actionable
            onPress={() => {
              Linking.openURL(
                "/collection/fury-furya1syx6q5rxhntng93pmk9xep25638dqy3dcnppvvytnccxrp7urt7svgvs8p"
              );
            }}
          />
          <BuyFurypunksButton size="S" />

          <TouchableOpacity
            onPress={() => setSelectedSectionHandler("comic-book-history")}
          >
            <ButtonLabel text="PREVIOUS POOL PRIZES" size="S" actionable />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
