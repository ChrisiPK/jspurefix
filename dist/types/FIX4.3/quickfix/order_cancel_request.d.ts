/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IOrderQtyData } from './set/order_qty_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelRequest {
    StandardHeader: IStandardHeader;
    OrigClOrdID: string;
    OrderID?: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    ListID?: string;
    OrigOrdModTime?: Date;
    Account?: string;
    AccountType?: number;
    Parties?: IParties;
    Instrument?: IInstrument;
    Side: string;
    TransactTime: Date;
    OrderQtyData?: IOrderQtyData;
    ComplianceID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
