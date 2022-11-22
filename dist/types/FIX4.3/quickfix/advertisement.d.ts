/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAdvertisement {
    StandardHeader: IStandardHeader;
    AdvId: string;
    AdvTransType: string;
    AdvRefID?: string;
    Instrument?: IInstrument;
    AdvSide: string;
    Quantity: number;
    Price?: number;
    Currency?: string;
    TradeDate?: Date;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    URLLink?: string;
    LastMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    StandardTrailer: IStandardTrailer;
}
