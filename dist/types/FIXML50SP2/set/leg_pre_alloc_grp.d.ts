import { INestedParties2 } from './nested_parties_2';
export interface ILegPreAllocGrp {
    LegAllocAccount?: string;
    LegIndividualAllocID?: string;
    LegAllocQty?: number;
    LegAllocAcctIDSource?: string;
    LegAllocSettlCurrency?: string;
    LegCustodialLotID?: string;
    LegVersusPurchaseDate?: Date;
    LegVersusPurchasePrice?: number;
    LegCurrentCostBasis?: number;
    NestedParties2?: INestedParties2[];
}
