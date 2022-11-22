/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ISettlInstGrp } from './set/settl_inst_grp';
export interface ISettlementInstructions {
    SettlInstMsgID: string;
    SettlInstReqID?: string;
    SettlInstMode: string;
    SettlInstReqRejCode?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    ClOrdID?: string;
    TransactTime: Date;
    StandardHeader?: IStandardHeader;
    SettlInstGrp?: ISettlInstGrp[];
}
