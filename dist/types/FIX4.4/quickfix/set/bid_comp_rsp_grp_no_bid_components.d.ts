/// <reference types="node" />
import { ICommissionData } from './commission_data';
export interface IBidCompRspGrpNoBidComponents {
    CommissionData: ICommissionData;
    ListID?: string;
    Country?: string;
    Side?: string;
    Price?: number;
    PriceType?: number;
    FairValue?: number;
    NetGrossInd?: number;
    SettlType?: string;
    SettlDate?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
