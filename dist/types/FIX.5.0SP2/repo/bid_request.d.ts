/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IBidDescReqGrp } from './set/bid_desc_req_grp';
import { IBidCompReqGrp } from './set/bid_comp_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBidRequest {
    StandardHeader: IStandardHeader;
    BidID?: string;
    ClientBidID: string;
    BidRequestTransType: string;
    ListName?: string;
    TotNoRelatedSym: number;
    BidType: number;
    NumTickets?: number;
    Currency?: string;
    SideValue1?: number;
    SideValue2?: number;
    BidDescReqGrp?: IBidDescReqGrp[];
    BidCompReqGrp?: IBidCompReqGrp[];
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
    BidTradeType: string;
    BasisPxType: string;
    StrikeTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
