/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
export interface IOrderCancelReject {
    OrderID: string;
    OrderRequestID?: number;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    ClOrdID: string;
    ClOrdLinkID?: string;
    OrigClOrdID?: string;
    OrdStatus: string;
    WorkingIndicator?: boolean;
    OrigOrdModTime?: Date;
    ListID?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    TransactTime?: Date;
    CxlRejResponseTo: string;
    CxlRejReason?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    ExDestination?: string;
    ExDestinationIDSource?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
}
