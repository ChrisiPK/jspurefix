/// <reference types="node" />
import { IAllocationNoAllocsNoMiscFees } from './allocation_no_allocs_no_misc_fees';
export interface IAllocationNoAllocs {
    AllocAccount?: string;
    AllocPrice?: number;
    AllocShares: number;
    ProcessCode?: string;
    BrokerOfCredit?: string;
    NotifyBrokerOfCredit?: boolean;
    AllocHandlInst?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    ExecBroker?: string;
    ClientID?: string;
    Commission?: number;
    CommType?: string;
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
