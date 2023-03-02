import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import { setSelectedNetworkId } from "../store/slices/settings";
import { useAppDispatch } from "../store/store";
import { useSelectedNetworkId } from "./useSelectedNetwork";

export const useForceNetworkSelection = (networkId: string | undefined) => {
  const selectedNetworkId = useSelectedNetworkId();
  const dispatch = useAppDispatch();
  const effect = useCallback(() => {
    if (networkId && networkId !== selectedNetworkId) {
      dispatch(setSelectedNetworkId(networkId));
    }
  }, [dispatch, networkId, selectedNetworkId]);
  useFocusEffect(effect);
};