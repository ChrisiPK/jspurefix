import { INestedParties } from './nested_parties';
export interface IPositionQty {
    PosType?: string;
    LongQty?: number;
    ShortQty?: number;
    CoveredQty?: number;
    PosQtyStatus?: number;
    QuantityDate?: Date;
    PosQtyUnitOfMeasure?: string;
    PosQtyUnitOfMeasureCurrency?: string;
    NestedParties?: INestedParties[];
}
