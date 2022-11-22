/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuote {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteResponseLevel?: number;
    Parties?: IParties[];
    Account?: string;
    TradingSessionID?: string;
    Instrument: IInstrument;
    BidPx?: number;
    OfferPx?: number;
    BidSize?: number;
    OfferSize?: number;
    ValidUntilTime?: Date;
    BidSpotRate?: number;
    OfferSpotRate?: number;
    BidForwardPoints?: number;
    OfferForwardPoints?: number;
    TransactTime?: Date;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    OrdType?: string;
    FutSettDate2?: Date;
    OrderQty2?: number;
    Currency?: string;
    SettlCurrFxRateCalc?: string;
    Commission?: number;
    CommType?: string;
    ExDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
