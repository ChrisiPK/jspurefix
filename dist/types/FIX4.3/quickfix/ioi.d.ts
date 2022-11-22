/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IIOINoIOIQualifiers } from './set/ioi_no_ioi_qualifiers';
import { IIOINoRoutingIDs } from './set/ioi_no_routing_i_ds';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IIOI {
    StandardHeader: IStandardHeader;
    IOIid: string;
    IOITransType: string;
    IOIRefID?: string;
    Instrument?: IInstrument;
    Side: string;
    QuantityType?: number;
    IOIQty: string;
    PriceType?: number;
    Price?: number;
    Currency?: string;
    ValidUntilTime?: Date;
    IOIQltyInd?: string;
    IOINaturalFlag?: boolean;
    NoIOIQualifiers?: IIOINoIOIQualifiers[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TransactTime?: Date;
    URLLink?: string;
    NoRoutingIDs?: IIOINoRoutingIDs[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Benchmark?: string;
    StandardTrailer: IStandardTrailer;
}
