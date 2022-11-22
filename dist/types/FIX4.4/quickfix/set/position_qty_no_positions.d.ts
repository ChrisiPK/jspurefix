import { INestedParties } from './nested_parties';
export interface IPositionQtyNoPositions {
    PosType?: string;
    LongQty?: number;
    ShortQty?: number;
    PosQtyStatus?: number;
    NestedParties?: INestedParties;
}
