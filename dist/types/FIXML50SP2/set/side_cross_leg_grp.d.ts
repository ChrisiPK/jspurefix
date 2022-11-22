import { ILegStipulations } from './leg_stipulations';
import { ILegPreAllocGrp } from './leg_pre_alloc_grp';
import { INestedParties3 } from './nested_parties_3';
export interface ISideCrossLegGrp {
    LegRefID?: string;
    LegOrderQty?: number;
    LegSwapType?: number;
    LegAllocID?: string;
    LegClearingAccountType?: number;
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    SettlType?: string;
    LegSettlDate?: Date;
    LegSettlCurrency?: string;
    LegVolatility?: number;
    LegDividendYield?: number;
    LegCurrencyRatio?: number;
    LegExecInst?: string;
    LegShortSaleExemptionReason?: number;
    LegStipulations?: ILegStipulations[];
    LegPreAllocGrp?: ILegPreAllocGrp[];
    NestedParties3?: INestedParties3[];
}
