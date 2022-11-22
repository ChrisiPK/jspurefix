import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrmtMatchSideGrp } from './set/instrmt_match_side_grp';
export interface ITradeMatchReport {
    TrdMatchID: string;
    MatchType?: string;
    TradeReportType?: number;
    ClearingBusinessDate?: Date;
    TrdType?: number;
    TrdSubType?: number;
    TradeDate?: Date;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    VenueType?: string;
    TradeMatchTimestamp?: Date;
    TransactTime?: Date;
    MultiLegReportingType?: string;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    InstrmtMatchSideGrp?: IInstrmtMatchSideGrp[];
}
