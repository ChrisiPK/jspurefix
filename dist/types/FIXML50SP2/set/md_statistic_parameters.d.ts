/// <reference types="node" />
export interface IMDStatisticParameters {
    MiscFeeType: string;
    Scope: string;
    MDStatisticSubScope?: number;
    MDStatisticScopeType?: number;
    MDStatisticName?: string;
    MDStatisticDesc?: string;
    EncodedMDStatisticDescLen?: number;
    EncodedMDStatisticDesc?: Buffer;
    MarketDepth?: number;
    MDStatisticFrequencyPeriod?: number;
    MDStatisticFrequencyUnit?: number;
    MDStatisticDelayPeriod?: number;
    MDStatisticDelayUnit?: number;
    MDStatisticIntervalType: number;
    MDStatisticIntervalTypeUnit?: string;
    MDStatisticIntervalPeriod?: number;
    MDStatisticIntervalUnit?: number;
    MDStatisticStartDate?: Date;
    MDStatisticEndDate?: Date;
    MDStatisticStartTime?: Date;
    MDStatisticEndTime?: Date;
    MDStatisticRatioType?: number;
    TradingCapacity?: number;
    OrdType?: string;
    TimeInForce?: string;
    QuoteCondition?: string;
    TradeCondition?: string;
    Side?: string;
    TradeInputSource?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
