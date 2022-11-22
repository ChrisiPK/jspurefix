/// <reference types="node" />
import { IParties } from './parties';
import { IOrderQtyData } from './order_qty_data';
export interface ISideCrossOrdCxlGrp {
    Side: string;
    OrigClOrdID: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    OrigOrdModTime?: Date;
    Parties?: IParties[];
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    OrderQtyData: IOrderQtyData;
    ComplianceID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
