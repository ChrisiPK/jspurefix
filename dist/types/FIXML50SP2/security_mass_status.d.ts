import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrumentScope } from './set/instrument_scope';
import { ISecMassStatGrp } from './set/sec_mass_stat_grp';
export interface ISecurityMassStatus {
    SecurityStatusReqID?: string;
    SecurityListID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradeDate?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    UnsolicitedIndicator?: boolean;
    SecurityMassTradingStatus?: number;
    FastMarketIndicator?: boolean;
    SecurityMassTradingEvent?: number;
    MassHaltReason?: number;
    MDBookType?: number;
    MarketDepth?: number;
    TransactTime?: Date;
    Adjustment?: number;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    InstrumentScope?: IInstrumentScope;
    SecMassStatGrp?: ISecMassStatGrp[];
}
