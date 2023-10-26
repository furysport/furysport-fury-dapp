package indexerdb

import "github.com/furysport/furya-dapp/go/pkg/networks"

type Quest struct {
	ID    string
	Title string
}

type QuestCompletion struct {
	QuestID string          `gorm:"primaryKey"`
	UserID  networks.UserID `gorm:"primaryKey"`

	Quest     *Quest
	Completed bool
}
