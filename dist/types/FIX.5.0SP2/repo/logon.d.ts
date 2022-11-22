/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IMsgTypeGrp } from './set/msg_type_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ILogon {
    StandardHeader: IStandardHeader;
    EncryptMethod: number;
    HeartBtInt: number;
    RawDataLength?: number;
    RawData?: Buffer;
    ResetSeqNumFlag?: boolean;
    NextExpectedMsgSeqNum?: number;
    MaxMessageSize?: number;
    MsgTypeGrp?: IMsgTypeGrp[];
    TestMessageIndicator?: boolean;
    Username?: string;
    Password?: string;
    NewPassword?: string;
    EncryptedPasswordMethod?: number;
    EncryptedPasswordLen?: number;
    EncryptedPassword?: Buffer;
    EncryptedNewPasswordLen?: number;
    EncryptedNewPassword?: Buffer;
    SessionStatus?: number;
    DefaultApplVerID: string;
    DefaultApplExtID?: number;
    DefaultCstmApplVerID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
