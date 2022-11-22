/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IBaseTradingRules } from './set/base_trading_rules';
import { IOrdTypeRules } from './set/ord_type_rules';
import { ITimeInForceRules } from './set/time_in_force_rules';
import { IExecInstRules } from './set/exec_inst_rules';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDefinition {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    MarketReportID: string;
    MarketReqID?: string;
    MarketID: string;
    MarketSegmentID?: string;
    MarketSegmentDesc?: string;
    EncodedMktSegmDescLen?: number;
    EncodedMktSegmDesc?: Buffer;
    ParentMktSegmID?: string;
    Currency?: string;
    BaseTradingRules?: IBaseTradingRules;
    OrdTypeRules?: IOrdTypeRules[];
    TimeInForceRules?: ITimeInForceRules[];
    ExecInstRules?: IExecInstRules[];
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
