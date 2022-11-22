/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStipulations } from './set/stipulations';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    NoRelatedSym: number;
    Instrument: IInstrument;
    PrevClosePx?: number;
    QuoteRequestType?: number;
    TradingSessionID?: string;
    Stipulations?: IStipulations[];
    Side?: string;
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
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    PriceType?: number;
    Price?: number;
    YieldData?: IYieldData;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
