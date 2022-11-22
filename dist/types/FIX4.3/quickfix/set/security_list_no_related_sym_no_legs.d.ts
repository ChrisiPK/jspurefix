import { IInstrumentLeg } from './instrument_leg';
export interface ISecurityListNoRelatedSymNoLegs {
    InstrumentLeg?: IInstrumentLeg;
    LegCurrency?: string;
}
