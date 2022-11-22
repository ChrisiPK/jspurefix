/// <reference types="node" />
export interface IStandardHeader {
    BeginString: string;
    BodyLength: number;
    MsgType: string;
    SenderCompID: string;
    TargetCompID: string;
    OnBehalfOfCompID?: string;
    DeliverToCompID?: string;
    SecureDataLen?: number;
    SecureData?: Buffer;
    MsgSeqNum: number;
    SenderSubID?: string;
    TargetSubID?: string;
    OnBehalfOfSubID?: string;
    DeliverToSubID?: string;
    PossDupFlag?: string;
    PossResend?: string;
    SendingTime: string;
    OrigSendingTime?: string;
}
