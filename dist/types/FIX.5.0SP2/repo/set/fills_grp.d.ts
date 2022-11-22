import { INestedParties4 } from './nested_parties_4';
export interface IFillsGrp {
    FillExecID?: string;
    FillPx?: number;
    FillQty?: number;
    NestedParties4?: INestedParties4[];
    FillLiquidityInd?: number;
}
