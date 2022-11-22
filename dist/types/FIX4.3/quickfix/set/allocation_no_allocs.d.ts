/// <reference types="node" />
import { INestedParties } from './nested_parties';
import { ICommissionData } from './commission_data';
import { IAllocationNoAllocsNoMiscFees } from './allocation_no_allocs_no_misc_fees';
export interface IAllocationNoAllocs {
    AllocAccount?: string;
    AllocPrice?: number;
    AllocQty?: number;
    IndividualAllocID?: string;
    ProcessCode?: string;
    NestedParties?: INestedParties;
    NotifyBrokerOfCredit?: boolean;
    AllocHandlInst?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    CommissionData?: ICommissionData;
    AllocAvgPx?: number;
    AllocNetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    AccruedInterestAmt?: number;
    SettlInstMode?: string;
    NoMiscFees?: IAllocationNoAllocsNoMiscFees[];
}
