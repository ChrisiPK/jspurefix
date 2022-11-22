import { INestedParties3 } from './nested_parties_3';
export interface IPreAllocMlegGrp {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: string;
    IndividualAllocID?: string;
    AllocQty?: number;
    CustodialLotID?: string;
    VersusPurchaseDate?: Date;
    VersusPurchasePrice?: number;
    CurrentCostBasis?: number;
    NestedParties3?: INestedParties3[];
}
