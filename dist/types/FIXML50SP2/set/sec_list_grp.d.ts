/// <reference types="node" />
import { IInstrument } from './instrument';
import { IInstrumentExtension } from './instrument_extension';
import { ISecurityClassificationGrp } from './security_classification_grp';
import { IFinancingDetails } from './financing_details';
import { ISecurityTradingRules } from './security_trading_rules';
import { IStrikeRules } from './strike_rules';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IStipulations } from './stipulations';
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp';
import { IRelatedInstrumentGrp } from './related_instrument_grp';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
import { IPriceMovementGrp } from './price_movement_grp';
export interface ISecListGrp {
    Currency?: string;
    RelSymTransactTime?: Date;
    NumOfSimpleInstruments?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    SecurityClassificationGrp?: ISecurityClassificationGrp[];
    FinancingDetails?: IFinancingDetails;
    SecurityTradingRules?: ISecurityTradingRules;
    StrikeRules?: IStrikeRules[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    Stipulations?: IStipulations[];
    InstrmtLegSecListGrp?: IInstrmtLegSecListGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    PriceMovementGrp?: IPriceMovementGrp[];
}
