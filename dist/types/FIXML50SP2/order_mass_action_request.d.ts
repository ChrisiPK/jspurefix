/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IOrderMassActionRequest {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    MassActionType: number;
    MassActionScope: number;
    MassActionReason?: number;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Side?: string;
    Price?: number;
    TransactTime: Date;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    TargetMarketSegmentGrp?: ITargetMarketSegmentGrp[];
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
}
