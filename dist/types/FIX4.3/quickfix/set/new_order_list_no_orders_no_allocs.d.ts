import { INestedParties } from './nested_parties';
export interface INewOrderListNoOrdersNoAllocs {
    AllocAccount?: string;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
