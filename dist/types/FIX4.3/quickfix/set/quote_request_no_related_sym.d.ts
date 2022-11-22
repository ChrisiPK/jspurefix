import { IInstrument } from './instrument';
import { IStipulations } from './stipulations';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
export interface IQuoteRequestNoRelatedSym {
    Instrument: IInstrument;
    PrevClosePx?: number;
    QuoteRequestType?: number;
    QuoteType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradeOriginationDate?: string;
    Stipulations: IStipulations;
    Side?: string;
    QuantityType?: number;
    OrderQty?: number;
    CashOrderQty?: number;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    OrdType?: string;
    FutSettDate2?: Date;
    OrderQty2?: number;
    ExpireTime?: Date;
    TransactTime?: Date;
    Currency?: string;
    SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData;
    PriceType?: number;
    Price?: number;
    Price2?: number;
    YieldData: IYieldData;
}
