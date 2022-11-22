export interface IBidDescReqGrp {
    BidDescriptorType?: number;
    BidDescriptor?: string;
    SideValueInd?: number;
    LiquidityValue?: number;
    LiquidityNumSecurities?: number;
    LiquidityPctLow?: number;
    LiquidityPctHigh?: number;
    EFPTrackingError?: number;
    FairValue?: number;
    OutsideIndexPct?: number;
    ValueOfFutures?: number;
}
