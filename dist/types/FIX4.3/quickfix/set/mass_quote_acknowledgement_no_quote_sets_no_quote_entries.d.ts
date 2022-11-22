import { IInstrument } from './instrument';
export interface IMassQuoteAcknowledgementNoQuoteSetsNoQuoteEntries {
    QuoteEntryID?: string;
    Instrument?: IInstrument;
    BidPx?: number;
    OfferPx?: number;
    BidSize?: number;
    OfferSize?: number;
    ValidUntilTime?: Date;
    BidSpotRate?: number;
    OfferSpotRate?: number;
    BidForwardPoints?: number;
    OfferForwardPoints?: number;
    MidPx?: number;
    BidYield?: number;
    MidYield?: number;
    OfferYield?: number;
    TransactTime?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    FutSettDate?: Date;
    OrdType?: string;
    FutSettDate2?: Date;
    OrderQty2?: number;
    BidForwardPoints2?: number;
    OfferForwardPoints2?: number;
    Currency?: string;
    QuoteEntryRejectReason?: number;
}
