import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp';
export interface ITrdInstrmtLegGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegReportID?: string;
    LegNumber?: number;
    LegStipulations?: ILegStipulations[];
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties?: INestedParties[];
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
    TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp[];
}
