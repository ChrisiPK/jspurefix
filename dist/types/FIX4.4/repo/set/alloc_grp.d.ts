/// <reference types="node" />
import { INestedParties } from './nested_parties';
import { ICommissionData } from './commission_data';
import { IMiscFeesGrp } from './misc_fees_grp';
import { IClrInstGrp } from './clr_inst_grp';
import { ISettlInstructionsData } from './settl_instructions_data';
export interface IAllocGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    MatchStatus?: string;
    AllocPrice?: number;
    AllocQty?: number;
    IndividualAllocID?: string;
    ProcessCode?: string;
    NestedParties?: INestedParties[];
    NotifyBrokerOfCredit?: boolean;
    AllocHandlInst?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    CommissionData?: ICommissionData;
    AllocAvgPx?: number;
    AllocNetMoney?: number;
    SettlCurrAmt?: number;
    AllocSettlCurrAmt?: number;
    SettlCurrency?: string;
    AllocSettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    AllocAccruedInterestAmt?: number;
    AllocInterestAtMaturity?: number;
    MiscFeesGrp?: IMiscFeesGrp[];
    ClrInstGrp?: IClrInstGrp[];
    AllocSettlInstType?: number;
    SettlInstructionsData?: ISettlInstructionsData;
}
