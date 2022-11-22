/// <reference types="node" />
import { ICommissionData } from './commission_data';
export interface IBidResponseNoBidComponents {
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
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
