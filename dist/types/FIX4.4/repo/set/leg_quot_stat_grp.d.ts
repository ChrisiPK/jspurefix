import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INestedParties } from './nested_parties';
export interface ILegQuotStatGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
    LegStipulations?: ILegStipulations[];
    NestedParties?: INestedParties[];
}
