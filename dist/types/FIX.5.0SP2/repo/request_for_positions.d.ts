/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRequestForPositions {
    StandardHeader: IStandardHeader;
    PosReqID: string;
    PosReqType: number;
    MatchStatus?: string;
    SubscriptionRequestType?: string;
    SettlCurrency?: string;
    Parties: IParties[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Instrument?: IInstrument;
    Currency?: string;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    TrdgSesGrp?: ITrdgSesGrp[];
    TransactTime: Date;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
