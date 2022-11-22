/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ILogonNoMsgTypes } from './set/logon_no_msg_types';
import { IStandardTrailer } from './set/standard_trailer';
export interface ILogon {
    StandardHeader: IStandardHeader;
    EncryptMethod: number;
    HeartBtInt: number;
    RawDataLength?: number;
    RawData?: Buffer;
    ResetSeqNumFlag?: boolean;
    MaxMessageSize?: number;
    NoMsgTypes?: ILogonNoMsgTypes[];
    StandardTrailer: IStandardTrailer;
}
