/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IAffectedOrdGrp } from './set/affected_ord_grp';
import { INotAffectedOrdersGrp } from './set/not_affected_orders_grp';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IStandardTrailer } from './set/standard_trailer';
import { ITargetParties } from './set/target_parties';
export interface IOrderMassActionReport {
    StandardHeader: IStandardHeader;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    MassActionReportID: string;
    MassActionType: number;
    MassActionScope: number;
    MassActionResponse: number;
    MassActionRejectReason?: number;
    TotalAffectedOrders?: number;
    AffectedOrdGrp?: IAffectedOrdGrp[];
    NotAffectedOrdersGrp?: INotAffectedOrdersGrp[];
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Parties?: IParties[];
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Side?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    TargetParties?: ITargetParties[];
}
