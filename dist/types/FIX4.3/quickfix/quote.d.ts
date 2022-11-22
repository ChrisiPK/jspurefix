/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuote {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteType?: number;
    QuoteResponseLevel?: number;
    Parties?: IParties;
    Account?: string;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    BidPx?: number;
    OfferPx?: number;
    MktBidPx?: number;
    MktOfferPx?: number;
    MinBidSize?: number;
    BidSize?: number;
    MinOfferSize?: number;
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
    SettlmntTyp?: string;
    FutSettDate?: Date;
    OrdType?: string;
    FutSettDate2?: Date;
    OrderQty2?: number;
    BidForwardPoints2?: number;
    OfferForwardPoints2?: number;
    Currency?: string;
    SettlCurrBidFxRate?: number;
    SettlCurrOfferFxRate?: number;
    SettlCurrFxRateCalc?: string;
    Commission?: number;
    CommType?: string;
    CustOrderCapacity?: number;
    ExDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
