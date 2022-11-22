export interface IStandardHeader {
    MsgType?: string;
    ApplVerID?: string;
    SenderCompID?: string;
    TargetCompID?: string;
    OnBehalfOfCompID?: string;
    DeliverToCompID?: string;
    MsgSeqNum?: number;
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
    SendingTime?: Date;
    OrigSendingTime?: Date;
    MessageEncoding?: string;
}
