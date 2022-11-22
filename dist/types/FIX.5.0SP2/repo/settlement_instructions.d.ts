/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ISettlInstGrp } from './set/settl_inst_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISettlementInstructions {
    StandardHeader: IStandardHeader;
    SettlInstMsgID: string;
    SettlInstReqID?: string;
    SettlInstMode: string;
    SettlInstReqRejCode?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    ClOrdID?: string;
    TransactTime: Date;
    SettlInstGrp?: ISettlInstGrp[];
    StandardTrailer: IStandardTrailer;
}
