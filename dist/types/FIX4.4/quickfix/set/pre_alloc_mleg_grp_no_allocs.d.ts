import { INestedParties3 } from './nested_parties_3';
export interface IPreAllocMlegGrpNoAllocs {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: string;
    IndividualAllocID?: string;
    NestedParties3?: INestedParties3;
    AllocQty?: number;
}