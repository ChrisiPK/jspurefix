import { INestedParties } from './nested_parties';
export interface IPreAllocGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: string;
    IndividualAllocID?: string;
    AllocQty?: number;
    CustodialLotID?: string;
    VersusPurchaseDate?: Date;
    VersusPurchasePrice?: number;
    CurrentCostBasis?: number;
    NestedParties?: INestedParties[];
}
