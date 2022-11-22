/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISettlObligationInstructions } from './set/settl_obligation_instructions';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISettlementObligationReport {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    ClearingBusinessDate?: Date;
    SettlementCycleNo?: number;
    SettlObligMsgID: string;
    SettlObligMode: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TransactTime?: Date;
    SettlObligationInstructions: ISettlObligationInstructions[];
    StandardTrailer: IStandardTrailer;
}
