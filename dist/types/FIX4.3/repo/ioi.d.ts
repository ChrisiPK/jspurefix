/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IIOI {
    StandardHeader: IStandardHeader;
    IOIid: string;
    IOITransType: string;
    IOIRefID?: string;
    Instrument: IInstrument;
    Side: string;
    IOIShares: string;
    PriceType?: number;
    Price?: number;
    Currency?: string;
    ValidUntilTime?: Date;
    IOIQltyInd?: string;
    IOINaturalFlag?: boolean;
    NoIOIQualifiers?: number;
    IOIQualifier?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TransactTime?: Date;
    URLLink?: string;
    NoRoutingIDs?: number;
    RoutingType?: number;
    RoutingID?: string;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Benchmark?: string;
    StandardTrailer: IStandardTrailer;
}
