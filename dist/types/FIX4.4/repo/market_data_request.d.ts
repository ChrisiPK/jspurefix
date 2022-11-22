import { IStandardHeader } from './set/standard_header';
import { IMDReqGrp } from './set/md_req_grp';
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataRequest {
    StandardHeader: IStandardHeader;
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    OpenCloseSettlFlag?: string;
    Scope?: string;
    MDImplicitDelete?: boolean;
    MDReqGrp: IMDReqGrp[];
    InstrmtMDReqGrp: IInstrmtMDReqGrp[];
    TrdgSesGrp?: ITrdgSesGrp[];
    ApplQueueAction?: number;
    ApplQueueMax?: number;
    StandardTrailer: IStandardTrailer;
}
