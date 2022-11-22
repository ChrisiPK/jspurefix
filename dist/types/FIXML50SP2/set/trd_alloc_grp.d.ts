/// <reference types="node" />
import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp';
import { INestedParties2 } from './nested_parties_2';
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp';
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp';
export interface ITrdAllocGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: string;
    IndividualAllocID?: string;
    ParentAllocID?: string;
    FirmMnemonic?: string;
    AllocQty?: number;
    AllocCalculatedCcyQty?: number;
    CustodialLotID?: string;
    VersusPurchaseDate?: Date;
    VersusPurchasePrice?: number;
    CurrentCostBasis?: number;
    AllocCustomerCapacity?: string;
    AllocMethod?: number;
    SecondaryIndividualAllocID?: string;
    AllocClearingFeeIndicator?: string;
    TradeAllocStatus?: number;
    AllocationRollupInstruction?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    FirmAllocText?: string;
    AllocRefRiskLimitCheckID?: string;
    AllocRefRiskLimitCheckIDType?: number;
    AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[];
    NestedParties2?: INestedParties2[];
    TradeAllocAmtGrp?: ITradeAllocAmtGrp[];
    AllocCommissionDataGrp?: IAllocCommissionDataGrp[];
}
