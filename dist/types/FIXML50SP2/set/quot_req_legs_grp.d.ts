import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data';
export interface IQuotReqLegsGrp {
    LegOrderQty?: number;
    LegQty?: number;
    LegMidPx?: number;
    LegSwapType?: number;
    SettlType?: string;
    LegSettlDate?: Date;
    LegRefID?: string;
    InstrumentLeg?: IInstrumentLeg;
    LegStipulations?: ILegStipulations[];
    NestedParties?: INestedParties[];
    LegBenchmarkCurveData?: ILegBenchmarkCurveData;
}
