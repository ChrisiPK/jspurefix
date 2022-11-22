/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { IQuotReqGrp } from './set/quot_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    RFQReqID?: string;
    ClOrdID?: string;
    OrderCapacity?: string;
    PrivateQuote?: boolean;
    RespondentType?: number;
    PreTradeAnonymity?: boolean;
    RootParties?: IRootParties[];
    QuotReqGrp: IQuotReqGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    BookingType?: number;
    OrderRestrictions?: string;
}
