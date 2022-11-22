import { INestedParties } from './nested_parties';
export interface INewOrderSingleNoAllocs {
    AllocAccount?: string;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
