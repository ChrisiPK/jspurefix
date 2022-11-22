/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface INews {
    StandardHeader: IStandardHeader;
    OrigTime?: string;
    Urgency?: string;
    Headline: string;
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
    LinesOfText: number;
    Text: string;
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
