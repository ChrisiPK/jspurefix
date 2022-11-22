import { INestedParties } from './nested_parties';
export interface IPositionQty {
    PosType?: string;
    LongQty?: number;
    ShortQty?: number;
    PosQtyStatus?: number;
    QuantityDate?: Date;
    NestedParties?: INestedParties[];
}
