import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
export interface ILegQuotStatGrp {
    LegOrderQty?: number;
    LegQty?: number;
    LegMidPx?: number;
    LegSwapType?: number;
    SettlType?: string;
    LegSettlDate?: Date;
    InstrumentLeg?: IInstrumentLeg;
    LegStipulations?: ILegStipulations[];
    NestedParties?: INestedParties[];
}
