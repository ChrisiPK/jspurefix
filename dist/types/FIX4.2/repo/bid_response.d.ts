/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBidResponse {
    StandardHeader: IStandardHeader;
    BidID?: string;
    ClientBidID?: string;
    NoBidComponents: number;
    Commission: number;
    CommType: string;
    ListID?: string;
    Country?: string;
    Side?: string;
    Price?: number;
    PriceType?: number;
    FairValue?: number;
    NetGrossInd?: number;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    TradingSessionID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
