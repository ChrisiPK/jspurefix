import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IMDIncGrp } from './set/md_inc_grp';
import { IRoutingGrp } from './set/routing_grp';
export interface IMarketDataIncrementalRefresh {
    MDBookType?: number;
    MDFeedType?: string;
    MDSubFeedType?: string;
    TradeDate?: Date;
    MDReqID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    MDIncGrp?: IMDIncGrp[];
    RoutingGrp?: IRoutingGrp[];
}
