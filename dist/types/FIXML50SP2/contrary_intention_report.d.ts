/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IParties } from './set/parties';
import { IExpirationQty } from './set/expiration_qty';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
export interface IContraryIntentionReport {
    ContIntRptID: string;
    TransactTime?: Date;
    LateIndicator?: boolean;
    InputSource?: string;
    ClearingBusinessDate: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    Parties?: IParties[];
    ExpirationQty?: IExpirationQty[];
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
}
