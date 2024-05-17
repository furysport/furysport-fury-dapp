package collections

import "github.com/furysport/furysport-fury-dapp/go/pkg/marketplacepb"

type CollectionsProvider interface {
	Collections(limit, offset int) chan *marketplacepb.Collection
}
