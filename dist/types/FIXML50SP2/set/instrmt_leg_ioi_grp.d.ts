import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
export interface IInstrmtLegIOIGrp {
    IOIQty?: string;
    InstrumentLeg?: IInstrumentLeg;
    LegStipulations?: ILegStipulations[];
}
