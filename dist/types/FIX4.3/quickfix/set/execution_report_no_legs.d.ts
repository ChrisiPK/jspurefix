import { IInstrumentLeg } from './instrument_leg';
import { INestedParties } from './nested_parties';
export interface IExecutionReportNoLegs {
    InstrumentLeg?: IInstrumentLeg;
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties?: INestedParties;
    LegRefID?: string;
    LegPrice?: number;
    LegSettlmntTyp?: string;
    LegFutSettDate?: Date;
    LegLastPx?: number;
}
