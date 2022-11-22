/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IQuotQualGrp } from './set/quot_qual_grp';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IOrderQtyData } from './set/order_qty_data';
import { IStipulations } from './set/stipulations';
import { ILegQuotGrp } from './set/leg_quot_grp';
import { ICommissionData } from './set/commission_data';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
export interface IQuoteResponse {
    QuoteRespID: string;
    QuoteID?: string;
    QuoteMsgID?: string;
    QuoteReqID?: string;
    QuoteRespType: number;
    ClOrdID?: string;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    IOIID?: string;
    QuoteType?: number;
    PreTradeAnonymity?: boolean;
    TrdType?: number;
    RegulatoryTransactionType?: number;
    NegotiationMethod?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Side?: string;
    MinQty?: number;
    SettlType?: string;
    SettlDate?: Date;
    SettlDate2?: Date;
    OrderQty2?: number;
    Currency?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    BidPx?: number;
    OfferPx?: number;
    MktBidPx?: number;
    MktOfferPx?: number;
    MinBidSize?: number;
    BidSize?: number;
    MinOfferSize?: number;
    OfferSize?: number;
    ValidUntilTime?: Date;
    BidSpotRate?: number;
    OfferSpotRate?: number;
    BidForwardPoints?: number;
    OfferForwardPoints?: number;
    MidPx?: number;
    BidYield?: number;
    MidYield?: number;
    OfferYield?: number;
    TransactTime?: Date;
    OrdType?: string;
    BidForwardPoints2?: number;
    OfferForwardPoints2?: number;
    SettlCurrBidFxRate?: number;
    SettlCurrOfferFxRate?: number;
    SettlCurrFxRateCalc?: string;
    CustOrderCapacity?: number;
    ExDestination?: string;
    ExDestinationIDSource?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Price?: number;
    PriceType?: number;
    CoverPrice?: number;
    StrikeTime?: Date;
    StandardHeader?: IStandardHeader;
    QuotQualGrp?: IQuotQualGrp[];
    Parties?: IParties[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    OrderQtyData?: IOrderQtyData;
    Stipulations?: IStipulations[];
    LegQuotGrp?: ILegQuotGrp[];
    CommissionData?: ICommissionData;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
}
