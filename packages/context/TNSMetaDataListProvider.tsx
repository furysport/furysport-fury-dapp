import React, { createContext, useState } from "react";

import { Metadata } from "../contracts-clients/furya-name-service/FuryaNameService.types";

interface TNSMetaDataType extends Metadata {
  tokenId: string;
}

interface DefaultValue {
  metaDataList: { [address: string]: TNSMetaDataType };
  addMetaData: (address: string, metadata: TNSMetaDataType) => void;
}

const defaultValue: DefaultValue = {
  metaDataList: {},
  addMetaData: () => {},
};

const TNSMetaDataListContext = createContext(defaultValue);

export const TNSMetaDataListContextProvider: React.FC = ({ children }) => {
  // The entered name
  const [metaDataList, setMetaDataList] = useState<
    DefaultValue["metaDataList"]
  >({});

  const addMetaData: DefaultValue["addMetaData"] = (address, metadata) =>
    setMetaDataList((prev) => ({
      ...prev,
      [address]: metadata,
    }));

  return (
    <TNSMetaDataListContext.Provider
      value={{
        metaDataList,
        addMetaData,
      }}
    >
      {children}
    </TNSMetaDataListContext.Provider>
  );
};
