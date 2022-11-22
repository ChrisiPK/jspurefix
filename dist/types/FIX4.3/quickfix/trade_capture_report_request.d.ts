/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { ITradeCaptureReportRequestNoDates } from './set/trade_capture_report_request_no_dates';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradeCaptureReportRequest {
    StandardHeader: IStandardHeader;
    TradeRequestID: string;
    TradeRequestType: number;
    SubscriptionRequestType?: string;
    ExecID?: string;
    OrderID?: string;
    ClOrdID?: string;
    MatchStatus?: string;
    Parties?: IParties;
    Instrument?: IInstrument;
    NoDates?: ITradeCaptureReportRequestNoDates[];
    Side?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradeInputSource?: string;
    TradeInputDevice?: string;
    StandardTrailer: IStandardTrailer;
}
