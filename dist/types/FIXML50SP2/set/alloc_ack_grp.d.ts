/// <reference types="node" />
import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp';
import { INestedParties } from './nested_parties';
export interface IAllocAckGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocPrice?: number;
    AllocPositionEffect?: string;
    IndividualAllocID?: string;
    ParentAllocID?: string;
    FirmMnemonic?: string;
    ClearedIndicator?: number;
    IndividualAllocRejCode?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    FirmAllocText?: string;
    SecondaryIndividualAllocID?: string;
    AllocCustomerCapacity?: string;
    IndividualAllocType?: number;
    AllocQty?: number;
    AllocCalculatedCcyQty?: number;
    CustodialLotID?: string;
    VersusPurchaseDate?: Date;
    VersusPurchasePrice?: number;
    CurrentCostBasis?: number;
    AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[];
    NestedParties?: INestedParties[];
}
