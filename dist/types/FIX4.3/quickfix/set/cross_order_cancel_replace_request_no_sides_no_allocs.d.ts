import { INestedParties } from './nested_parties';
export interface ICrossOrderCancelReplaceRequestNoSidesNoAllocs {
    AllocAccount?: string;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
