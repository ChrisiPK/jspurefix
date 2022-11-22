import { IInstrumentLeg } from './instrument_leg';
export interface ISecurityDefinitionNoLegs {
    InstrumentLeg?: IInstrumentLeg;
    LegCurrency?: string;
}
