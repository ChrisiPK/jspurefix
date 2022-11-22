"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDFactory = void 0;
const quickfix_1 = require("../../../types/FIX4.4/quickfix");
class MDFactory {
    static BidOfferRequest(symbol) {
        return {
            MDReqID: '1',
            SubscriptionRequestType: quickfix_1.SubscriptionRequestType.SnapshotPlusUpdates,
            MarketDepth: 0,
            MDReqGrp: {
                NoMDEntryTypes: [
                    {
                        MDEntryType: quickfix_1.MDEntryType.Bid
                    },
                    {
                        MDEntryType: quickfix_1.MDEntryType.Offer
                    }
                ]
            },
            InstrmtMDReqGrp: {
                NoRelatedSym: [
                    {
                        Instrument: {
                            StrikeCurrency: 'USD',
                            Symbol: symbol
                        }
                    }
                ]
            }
        };
    }
}
exports.MDFactory = MDFactory;
//# sourceMappingURL=md-factory.js.map