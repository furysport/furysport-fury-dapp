package indexerdb

import (
	"database/sql"

	"github.com/furysport/furysport-fury-dapp/go/pkg/networks"
)

type Attribute struct {
	TraitType string `json:"trait_type"`
	Value     string `json:"value"`
}

type NFT struct {
	// ID is network-dependent
	// Furya: fury-<bech32_mint_contract_address>-<token_id>
	ID          networks.NFTID
	Name        string
	ImageURI    string
	OwnerID     networks.UserID
	IsListed    bool
	PriceAmount sql.NullString `gorm:"type:numeric"`
	PriceDenom  string
	LockedOn    string

	// "belongs to" relations
	CollectionID networks.CollectionID `gorm:"index"`
	Collection   *Collection

	// "has one" relations
	FuryaNFT *FuryaNFT

	// "has many" relations
	Activities []Activity
	Attributes ArrayJSONB `gorm:"type:jsonb;default:'[]'"`
	Burnt      bool
}

type FuryaNFT struct {
	NFTID   string `gorm:"primaryKey"`
	TokenID string
}
