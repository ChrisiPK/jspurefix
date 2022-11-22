import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IMDIncGrp } from './set/md_inc_grp';
import { IRoutingGrp } from './set/routing_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataIncrementalRefresh {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    MDBookType?: number;
    MDFeedType?: string;
    TradeDate?: Date;
    MDReqID?: string;
    MDIncGrp: IMDIncGrp[];
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
    RoutingGrp?: IRoutingGrp[];
    StandardTrailer: IStandardTrailer;
}
