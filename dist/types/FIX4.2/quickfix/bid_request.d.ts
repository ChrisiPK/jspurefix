/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IBidRequestNoBidDescriptors } from './set/bid_request_no_bid_descriptors';
import { IBidRequestNoBidComponents } from './set/bid_request_no_bid_components';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBidRequest {
    StandardHeader: IStandardHeader;
    BidID?: string;
    ClientBidID: string;
    BidRequestTransType: string;
    ListName?: string;
    TotalNumSecurities: number;
    BidType: number;
    NumTickets?: number;
    Currency?: string;
    SideValue1?: number;
    SideValue2?: number;
    NoBidDescriptors?: IBidRequestNoBidDescriptors[];
    NoBidComponents?: IBidRequestNoBidComponents[];
    LiquidityIndType?: number;
    WtAverageLiquidity?: number;
    ExchangeForPhysical?: boolean;
    OutMainCntryUIndex?: number;
    CrossPercent?: number;
    ProgRptReqs?: number;
    ProgPeriodInterval?: number;
    IncTaxInd?: number;
    ForexReq?: boolean;
    NumBidders?: number;
    TradeDate?: Date;
    TradeType: string;
    BasisPxType: string;
    StrikeTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
