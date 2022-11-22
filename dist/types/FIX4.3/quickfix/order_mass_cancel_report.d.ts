/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrderMassCancelReportNoAffectedOrders } from './set/order_mass_cancel_report_no_affected_orders';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderMassCancelReport {
    StandardHeader: IStandardHeader;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    OrderID: string;
    SecondaryOrderID?: string;
    MassCancelRequestType: string;
    MassCancelResponse: string;
    MassCancelRejectReason?: string;
    TotalAffectedOrders?: number;
    NoAffectedOrders?: IOrderMassCancelReportNoAffectedOrders[];
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Side?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
