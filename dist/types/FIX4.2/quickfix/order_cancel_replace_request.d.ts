/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrderCancelReplaceRequestNoAllocs } from './set/order_cancel_replace_request_no_allocs';
import { IOrderCancelReplaceRequestNoTradingSessions } from './set/order_cancel_replace_request_no_trading_sessions';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelReplaceRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    ClientID?: string;
    ExecBroker?: string;
    OrigClOrdID: string;
    ClOrdID: string;
    ListID?: string;
    Account?: string;
    NoAllocs?: IOrderCancelReplaceRequestNoAllocs[];
    SettlmntTyp?: string;
    FutSettDate?: Date;
    HandlInst: string;
    ExecInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    ExDestination?: string;
    NoTradingSessions?: IOrderCancelReplaceRequestNoTradingSessions[];
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: string;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    ContractMultiplier?: number;
    CouponRate?: number;
    SecurityExchange?: string;
    Issuer?: string;
    EncodedIssuerLen?: number;
    EncodedIssuer?: Buffer;
    SecurityDesc?: string;
    EncodedSecurityDescLen?: number;
    EncodedSecurityDesc?: Buffer;
    Side: string;
    TransactTime: Date;
    OrderQty?: number;
    CashOrderQty?: number;
    OrdType: string;
    Price?: number;
    StopPx?: number;
    PegDifference?: number;
    DiscretionInst?: string;
    DiscretionOffset?: number;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    Currency?: string;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    GTBookingInst?: number;
    Commission?: number;
    CommType?: string;
    Rule80A?: string;
    ForexReq?: boolean;
    SettlCurrency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    FutSettDate2?: Date;
    OrderQty2?: number;
    OpenClose?: string;
    CoveredOrUncovered?: number;
    CustomerOrFirm?: number;
    MaxShow?: number;
    LocateReqd?: boolean;
    ClearingFirm?: string;
    ClearingAccount?: string;
    StandardTrailer: IStandardTrailer;
}