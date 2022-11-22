import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteStatusReport {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
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
    FutSettDate?: Date;
    OrdType?: string;
    FutSettDate2?: Date;
    OrderQty2?: number;
    Currency?: string;
    SettlCurrFxRateCalc?: string;
    Commission?: number;
    CommType?: string;
    ExDestination?: string;
    QuoteAckStatus?: number;
    StandardTrailer: IStandardTrailer;
}