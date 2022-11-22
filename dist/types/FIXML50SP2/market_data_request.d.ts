import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IMDReqGrp } from './set/md_req_grp';
import { IMarketSegmentScopeGrp } from './set/market_segment_scope_grp';
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
export interface IMarketDataRequest {
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    OpenCloseSettlFlag?: string;
    Scope?: string;
    MDImplicitDelete?: boolean;
    ApplQueueAction?: number;
    ApplQueueMax?: number;
    MDQuoteType?: number;
    FastMarketIndicator?: boolean;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    MDReqGrp?: IMDReqGrp[];
    MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[];
    InstrmtMDReqGrp?: IInstrmtMDReqGrp[];
    TrdgSesGrp?: ITrdgSesGrp[];
}
