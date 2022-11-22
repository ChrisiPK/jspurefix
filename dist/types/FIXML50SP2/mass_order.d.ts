/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IOrderEntryGrp } from './set/order_entry_grp';
export interface IMassOrder {
    MassOrderRequestID: string;
    OrderResponseLevel?: number;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingCapacity?: number;
    ClearingAccountType?: number;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    ManualOrderIndicator?: boolean;
    CustOrderHandlingInst?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    ThrottleInst?: number;
    TotNoOrderEntries?: number;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    OrderEntryGrp?: IOrderEntryGrp[];
}
