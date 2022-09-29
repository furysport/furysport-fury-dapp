import React, { useEffect } from "react";

import { useTNS } from "../../../context/TNSProvider";
import { NameFinderFormType } from "../../../utils/types/tns";
import { TextInputCustom } from "../../inputs/TextInputCustom";
import ModalBase from "../ModalBase";

// "Find a name" modal

export const TNSNameFinderModal: React.FC<{
  visible?: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  const { name, setName } = useTNS();

  const onPressEnter = () => {
    if (name) {
      onClose();
    }
  };

  useEffect(() => {
    // Reset the name each time the modal appears
    if (visible) setName("");
  }, [visible]);

  return (
    <ModalBase
      visible={visible}
      onClose={onClose}
      label="Find a name"
      // childrenBottom={<DomainsAvailability/>} TODO: Uncomment this when the functionality is done
    >
      <TextInputCustom<NameFinderFormType>
        name="name"
        label="NAME"
        placeHolder="Type name here"
        onPressEnter={onPressEnter}
        onChangeText={setName}
        value={name}
        regexp={new RegExp(/^[a-zA-Z]+$/)}
        style={{ marginBottom: 20 }}
      />
    </ModalBase>
  );
};