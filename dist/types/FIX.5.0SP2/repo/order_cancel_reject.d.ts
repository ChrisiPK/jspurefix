/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelReject {
    StandardHeader: IStandardHeader;
    OrderID: string;
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
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
