/// <reference types="node" />
import { IParties } from './parties';
import { IOrderQtyData } from './order_qty_data';
export interface ISideCrossOrdCxlGrp {
    Side: string;
    OrigClOrdID?: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    OrigOrdModTime?: Date;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Parties?: IParties[];
    OrderQtyData: IOrderQtyData;
}
