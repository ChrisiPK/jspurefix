/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IParties } from './set/parties';
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp';
import { IAllocAckGrp } from './set/alloc_ack_grp';
export interface IAllocationReportAck {
    AllocReportID: string;
    AllocID?: string;
    ClearingBusinessDate?: Date;
    AvgPxIndicator?: number;
    Quantity?: number;
    AllocTransType?: string;
    SecondaryAllocID?: string;
    AllocGroupID?: string;
    FirmGroupID?: string;
    AvgPxGroupID?: string;
    TradeDate?: Date;
    TransactTime?: Date;
    AllocStatus?: number;
    AllocRejCode?: number;
    AllocReportType?: number;
    AllocIntermedReqType?: number;
    MatchStatus?: string;
    CustOrderHandlingInst?: string;
    OrderHandlingInstSource?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    Parties?: IParties[];
    RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[];
    AllocAckGrp?: IAllocAckGrp[];
}
