import { INestedParties2 } from './nested_parties_2';
export interface ITrdAllocGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: string;
    IndividualAllocID?: string;
    NestedParties2?: INestedParties2[];
    AllocQty?: number;
}
