/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradeCaptureReportRequest {
    StandardHeader: IStandardHeader;
    SubscriptionRequestType?: string;
    ExecID?: string;
    OrderID?: string;
    ClOrdID?: string;
    Parties?: IParties[];
    Instrument?: IInstrument;
    TradeDate?: Date;
    TransactTime?: Date;
    Side?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
