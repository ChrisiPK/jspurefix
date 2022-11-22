/// <reference types="node" />
import { IHopGrp } from './hop_grp';
export interface IStandardHeader {
    BeginString: string;
    BodyLength: number;
    MsgType: string;
    ApplVerID?: string;
    ApplExtID?: number;
    CstmApplVerID?: string;
    SenderCompID: string;
    TargetCompID: string;
    OnBehalfOfCompID?: string;
    DeliverToCompID?: string;
    SecureDataLen?: number;
    SecureData?: Buffer;
    MsgSeqNum: number;
    SenderSubID?: string;
    SenderLocationID?: string;
    TargetSubID?: string;
    TargetLocationID?: string;
    OnBehalfOfSubID?: string;
    OnBehalfOfLocationID?: string;
    DeliverToSubID?: string;
    DeliverToLocationID?: string;
    PossDupFlag?: boolean;
    PossResend?: boolean;
    SendingTime: Date;
    OrigSendingTime?: Date;
    XmlDataLen?: number;
    XmlData?: Buffer;
    MessageEncoding?: string;
    LastMsgSeqNumProcessed?: number;
    HopGrp?: IHopGrp[];
}
