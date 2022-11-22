/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
export interface ITradeCaptureReportRequestAck {
    TradeRequestID: string;
    TradeID?: string;
    SecondaryTradeID?: string;
    FirmTradeID?: string;
    SecondaryFirmTradeID?: string;
    TradeRequestType: number;
    SubscriptionRequestType?: string;
    TotNumTradeReports?: number;
    SecurityRequestResult: number;
    TradeRequestStatus: number;
    MultiLegReportingType?: string;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    MessageEventSource?: string;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
}
