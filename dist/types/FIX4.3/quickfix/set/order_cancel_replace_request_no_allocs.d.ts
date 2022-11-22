import { INestedParties } from './nested_parties';
export interface IOrderCancelReplaceRequestNoAllocs {
    AllocAccount?: string;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
