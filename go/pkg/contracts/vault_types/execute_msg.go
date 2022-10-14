// Code generated by schema-generate. DO NOT EDIT.

package vault_types

import (
	"bytes"
	"encoding/json"
	"errors"
)

// ExecuteMsg
type ExecuteMsg interface{}

// Cw721ReceiveMsg Cw721ReceiveMsg should be de/serialized under `Receive()` variant in a ExecuteMsg
type Cw721ReceiveMsg struct {
	Msg     string `json:"msg"`
	Sender  string `json:"sender"`
	TokenId string `json:"token_id"`
}

func (strct *Cw721ReceiveMsg) MarshalJSON() ([]byte, error) {
	buf := bytes.NewBuffer(make([]byte, 0))
	buf.WriteString("{")
	comma := false
	// "Msg" field is required
	// only required object types supported for marshal checking (for now)
	// Marshal the "msg" field
	if comma {
		buf.WriteString(",")
	}
	buf.WriteString("\"msg\": ")
	if tmp, err := json.Marshal(strct.Msg); err != nil {
		return nil, err
	} else {
		buf.Write(tmp)
	}
	comma = true
	// "Sender" field is required
	// only required object types supported for marshal checking (for now)
	// Marshal the "sender" field
	if comma {
		buf.WriteString(",")
	}
	buf.WriteString("\"sender\": ")
	if tmp, err := json.Marshal(strct.Sender); err != nil {
		return nil, err
	} else {
		buf.Write(tmp)
	}
	comma = true
	// "TokenId" field is required
	// only required object types supported for marshal checking (for now)
	// Marshal the "token_id" field
	if comma {
		buf.WriteString(",")
	}
	buf.WriteString("\"token_id\": ")
	if tmp, err := json.Marshal(strct.TokenId); err != nil {
		return nil, err
	} else {
		buf.Write(tmp)
	}
	comma = true

	buf.WriteString("}")
	rv := buf.Bytes()
	return rv, nil
}

func (strct *Cw721ReceiveMsg) UnmarshalJSON(b []byte) error {
	msgReceived := false
	senderReceived := false
	token_idReceived := false
	var jsonMap map[string]json.RawMessage
	if err := json.Unmarshal(b, &jsonMap); err != nil {
		return err
	}
	// parse all the defined properties
	for k, v := range jsonMap {
		switch k {
		case "msg":
			if err := json.Unmarshal([]byte(v), &strct.Msg); err != nil {
				return err
			}
			msgReceived = true
		case "sender":
			if err := json.Unmarshal([]byte(v), &strct.Sender); err != nil {
				return err
			}
			senderReceived = true
		case "token_id":
			if err := json.Unmarshal([]byte(v), &strct.TokenId); err != nil {
				return err
			}
			token_idReceived = true
		}
	}
	// check if msg (a required property) was received
	if !msgReceived {
		return errors.New("\"msg\" is required but was not present")
	}
	// check if sender (a required property) was received
	if !senderReceived {
		return errors.New("\"sender\" is required but was not present")
	}
	// check if token_id (a required property) was received
	if !token_idReceived {
		return errors.New("\"token_id\" is required but was not present")
	}
	return nil
}