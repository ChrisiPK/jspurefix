import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data';
export interface ILegQuotGrp {
    LegOrderQty?: number;
    LegQty?: number;
    LegMidPx?: number;
    LegSwapType?: number;
    SettlType?: string;
    LegSettlDate?: Date;
    LegPriceType?: number;
    LegBidPx?: number;
    LegOfferPx?: number;
    LegRefID?: string;
    LegBidForwardPoints?: number;
    LegOfferForwardPoints?: number;
    InstrumentLeg?: IInstrumentLeg;
    LegStipulations?: ILegStipulations[];
    NestedParties?: INestedParties[];
    LegBenchmarkCurveData?: ILegBenchmarkCurveData;
}
