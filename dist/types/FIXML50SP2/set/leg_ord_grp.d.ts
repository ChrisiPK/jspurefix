import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { ILegPreAllocGrp } from './leg_pre_alloc_grp';
import { INestedParties } from './nested_parties';
export interface ILegOrdGrp {
    LegOrderQty?: number;
    LegQty?: number;
    LegSwapType?: number;
    LegAllocID?: string;
    LegAccount?: string;
    LegClearingAccountType?: number;
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    LegRefID?: string;
    SettlType?: string;
    LegSettlDate?: Date;
    LegSettlCurrency?: string;
    LegVolatility?: number;
    LegDividendYield?: number;
    LegCurrencyRatio?: number;
    LegExecInst?: string;
    LegShortSaleExemptionReason?: number;
    InstrumentLeg?: IInstrumentLeg;
    LegStipulations?: ILegStipulations[];
    LegPreAllocGrp?: ILegPreAllocGrp[];
    NestedParties?: INestedParties[];
}
