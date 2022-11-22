/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IQuotReqGrp } from './set/quot_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    RFQReqID?: string;
    ClOrdID?: string;
    OrderCapacity?: string;
    QuotReqGrp: IQuotReqGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
