import { INestedParties } from './nested_parties';
export interface INewOrderCrossNoSidesNoAllocs {
    AllocAccount?: string;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
