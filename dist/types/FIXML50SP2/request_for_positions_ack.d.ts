/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
export interface IRequestForPositionsAck {
    PosMaintRptID: string;
    PosReqID?: string;
    TotalNumPosReports?: number;
    TotNumReports?: number;
    UnsolicitedIndicator?: boolean;
    PosMaintResult: number;
    PosReqStatus: number;
    PosReqType?: number;
    MatchStatus?: string;
    ClearingBusinessDate?: Date;
    SubscriptionRequestType?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    SettlCurrency?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Currency?: string;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    Instrument?: IInstrument;
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
}
