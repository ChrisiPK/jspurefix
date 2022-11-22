import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { ILegPreAllocGrp } from './leg_pre_alloc_grp';
import { INestedParties } from './nested_parties';
export interface ILegOrdGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegStipulations?: ILegStipulations[];
    LegAllocID?: string;
    LegPreAllocGrp?: ILegPreAllocGrp[];
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties?: INestedParties[];
    LegRefID?: string;
    LegSettlType?: string;
    LegSettlDate?: Date;
    LegSettlCurrency?: string;
    LegOrderQty?: number;
    LegVolatility?: number;
    LegDividendYield?: number;
    LegCurrencyRatio?: number;
    LegExecInst?: string;
}
