import React from "react";

import { Content } from "./content/Content";
import { ContentContextProvider } from "./context/ContentProvider";
import { ScreenContainer } from "../../../../components/ScreenContainer";
import { TopLogo } from "../../../../components/navigation/components/TopLogo";
import { ScreenFC, useAppNavigation } from "../../../../utils/navigation";

export const FuryaPunks: ScreenFC<"FuryaPunks"> = ({ route }) => {
  const navigation = useAppNavigation();
  const screen = route.params ? route.params.route : "welcome";
  if (!route.params) {
    navigation.navigate("FuryaPunks", { route: screen });
  }
  return (
    <ScreenContainer
      fullWidth
      hideSidebar
      headerChildren={<TopLogo />}
      footerChildren={<div />}
      forceNetworkId="furya"
    >
      <ContentContextProvider screen={screen}>
        <Content />
      </ContentContextProvider>
    </ScreenContainer>
  );
};
