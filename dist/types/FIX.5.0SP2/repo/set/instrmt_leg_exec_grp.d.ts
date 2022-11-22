import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { ILegPreAllocGrp } from './leg_pre_alloc_grp';
import { INestedParties3 } from './nested_parties_3';
export interface IInstrmtLegExecGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegOrderQty?: number;
    LegSwapType?: number;
    LegStipulations?: ILegStipulations[];
    LegAllocID?: string;
    LegPreAllocGrp?: ILegPreAllocGrp[];
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties3?: INestedParties3[];
    LegRefID?: string;
    LegSettlType?: string;
    LegSettlDate?: Date;
    LegLastPx?: number;
    LegSettlCurrency?: string;
    LegLastForwardPoints?: number;
    LegCalculatedCcyLastQty?: number;
    LegGrossTradeAmt?: number;
    LegVolatility?: number;
    LegDividendYield?: number;
    LegCurrencyRatio?: number;
    LegExecInst?: string;
    LegLastQty?: number;
}
