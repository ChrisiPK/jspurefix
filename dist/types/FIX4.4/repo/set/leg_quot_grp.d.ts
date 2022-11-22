import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data';
export interface ILegQuotGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
    LegStipulations?: ILegStipulations[];
    NestedParties?: INestedParties[];
    LegPriceType?: number;
    LegBidPx?: number;
    LegOfferPx?: number;
    LegBenchmarkCurveData?: ILegBenchmarkCurveData;
}
