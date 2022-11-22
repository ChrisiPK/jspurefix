/// <reference types="node" />
export interface IBidResponseNoBidComponents {
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
}
