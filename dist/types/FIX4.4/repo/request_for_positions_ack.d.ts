/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRequestForPositionsAck {
    StandardHeader: IStandardHeader;
    PosMaintRptID: string;
    PosReqID?: string;
    TotalNumPosReports?: number;
    UnsolicitedIndicator?: boolean;
    PosReqResult: number;
    PosReqStatus: number;
    Parties: IParties[];
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: string;
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
