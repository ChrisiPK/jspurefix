import { INestedParties4 } from './nested_parties_4';
export interface IFillsGrp {
    FillExecID?: string;
    FillPx?: number;
    FillQty?: number;
    FillMatchID?: string;
    FillMatchSubID?: string;
    FillLiquidityInd?: number;
    FillYieldType?: string;
    FillYield?: number;
    NestedParties4?: INestedParties4[];
}
