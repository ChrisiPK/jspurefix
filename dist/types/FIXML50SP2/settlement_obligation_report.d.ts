/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISettlObligationInstructions } from './set/settl_obligation_instructions';
export interface ISettlementObligationReport {
    ClearingBusinessDate?: Date;
    SettlementCycleNo?: number;
    SettlObligMsgID: string;
    SettlObligMode: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TransactTime?: Date;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SettlObligationInstructions?: ISettlObligationInstructions[];
}
