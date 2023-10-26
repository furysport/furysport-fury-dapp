package collections

import "github.com/furysport/furya-dapp/go/pkg/marketplacepb"

type CollectionsProvider interface {
	Collections(limit, offset int) chan *marketplacepb.Collection
}
