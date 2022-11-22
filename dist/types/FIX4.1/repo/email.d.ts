/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IEmail {
    StandardHeader: IStandardHeader;
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: string;
    Subject: string;
    NoRelatedSym?: number;
    RelatdSym?: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: number;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    SecurityExchange?: string;
    Issuer?: string;
    SecurityDesc?: string;
    OrderID?: string;
    ClOrdID?: string;
    LinesOfText: number;
    Text: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
