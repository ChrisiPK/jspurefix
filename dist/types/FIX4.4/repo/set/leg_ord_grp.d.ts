import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { ILegPreAllocGrp } from './leg_pre_alloc_grp';
import { INestedParties } from './nested_parties';
export interface ILegOrdGrp {
    InstrumentLeg?: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegStipulations?: ILegStipulations[];
    LegPreAllocGrp?: ILegPreAllocGrp[];
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties?: INestedParties[];
    LegRefID?: string;
    LegPrice?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
}
