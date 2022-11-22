/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradeCaptureReportRequestAck {
    StandardHeader: IStandardHeader;
    TradeRequestID: string;
    TradeRequestType: number;
    SubscriptionRequestType?: string;
    TotNumTradeReports?: number;
    TradeRequestResult: number;
    TradeRequestStatus: number;
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    MultiLegReportingType?: string;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
