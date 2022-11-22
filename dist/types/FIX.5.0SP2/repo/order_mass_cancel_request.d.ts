/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IStandardTrailer } from './set/standard_trailer';
import { ITargetParties } from './set/target_parties';
export interface IOrderMassCancelRequest {
    StandardHeader: IStandardHeader;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    MassCancelRequestType: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Parties?: IParties[];
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    MarketID?: string;
    MarketSegmentID?: string;
    Side?: string;
    TransactTime: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    TargetParties?: ITargetParties[];
}
