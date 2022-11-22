/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IOrderQtyData } from './set/order_qty_data';
export interface IOrderCancelRequest {
    OrderRequestID?: number;
    OrigClOrdID?: string;
    OrderID?: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    ListID?: string;
    OrigOrdModTime?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    MarketSegmentID?: string;
    ExDestination?: string;
    ExDestinationIDSource?: string;
    Side: string;
    TransactTime: Date;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    OrderQtyData?: IOrderQtyData;
}
