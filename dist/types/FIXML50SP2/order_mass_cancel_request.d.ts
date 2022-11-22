/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IOrderMassCancelRequest {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    MassCancelRequestType: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    Side?: string;
    TransactTime: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
}
