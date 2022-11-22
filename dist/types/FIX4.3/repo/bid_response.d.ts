/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ICommissionData } from './set/commission_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBidResponse {
    StandardHeader: IStandardHeader;
    BidID?: string;
    ClientBidID?: string;
    NoBidComponents: number;
    CommissionData: ICommissionData;
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
