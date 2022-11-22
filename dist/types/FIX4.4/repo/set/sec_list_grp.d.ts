/// <reference types="node" />
import { IInstrument } from './instrument';
import { IInstrumentExtension } from './instrument_extension';
import { IFinancingDetails } from './financing_details';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IStipulations } from './stipulations';
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
export interface ISecListGrp {
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    Currency?: string;
    Stipulations?: IStipulations[];
    InstrmtLegSecListGrp?: IInstrmtLegSecListGrp[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    RoundLot?: number;
    MinTradeVol?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    ExpirationCycle?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
