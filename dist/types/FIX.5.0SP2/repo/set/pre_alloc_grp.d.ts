import { INestedParties } from './nested_parties';
export interface IPreAllocGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: string;
    IndividualAllocID?: string;
    NestedParties?: INestedParties[];
    AllocQty?: number;
}
