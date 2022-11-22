import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data';
export interface IQuotReqLegsGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegOrderQty?: number;
    LegSwapType?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
    LegStipulations?: ILegStipulations[];
    NestedParties?: INestedParties[];
    LegBenchmarkCurveData?: ILegBenchmarkCurveData;
    LegRefID?: string;
}
