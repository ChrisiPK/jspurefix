import { IMiscFeesSubGrp } from './misc_fees_sub_grp';
export interface IMiscFeesGrp {
    MiscFeeAmt?: number;
    MiscFeeCurr?: string;
    MiscFeeType?: string;
    MiscFeeBasis?: number;
    MiscFeeRate?: number;
    MiscFeeAmountDue?: number;
    MiscFeesSubGrp?: IMiscFeesSubGrp[];
}
