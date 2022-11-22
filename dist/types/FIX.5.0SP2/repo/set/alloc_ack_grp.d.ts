/// <reference types="node" />
import { INestedParties } from './nested_parties';
export interface IAllocAckGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocPrice?: number;
    AllocPositionEffect?: string;
    IndividualAllocID?: string;
    IndividualAllocRejCode?: number;
    NestedParties?: INestedParties[];
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    SecondaryIndividualAllocID?: string;
    AllocCustomerCapacity?: string;
    IndividualAllocType?: number;
    AllocQty?: number;
}
