/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
export interface IRequestForPositions {
    PosReqID: string;
    PosReqType: number;
    MatchStatus?: string;
    SubscriptionRequestType?: string;
    SettlCurrency?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Currency?: string;
    ClearingBusinessDate: Date;
    SettlDate?: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    TransactTime: Date;
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
    TrdgSesGrp?: ITrdgSesGrp[];
}
