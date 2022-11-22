/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IAffectedOrdGrp } from './set/affected_ord_grp';
import { INotAffectedOrdGrp } from './set/not_affected_ord_grp';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IOrderMassCancelReport {
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    OrderID: string;
    MassActionReportID: string;
    SecondaryOrderID?: string;
    MassCancelRequestType: string;
    MassCancelResponse: string;
    MassCancelRejectReason?: number;
    TotalAffectedOrders?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    Side?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    AffectedOrdGrp?: IAffectedOrdGrp[];
    NotAffectedOrdGrp?: INotAffectedOrdGrp[];
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
}
