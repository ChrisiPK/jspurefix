import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
export interface IInstrmtLegExecGrpNoLegs {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegStipulations?: ILegStipulations;
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties?: INestedParties;
    LegRefID?: string;
    LegPrice?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
    LegLastPx?: number;
}
