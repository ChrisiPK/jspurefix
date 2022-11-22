import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderMassStatusRequest {
    StandardHeader: IStandardHeader;
    Parties?: IParties[];
    Account?: string;
    TradingSessionID?: string;
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Side?: string;
    StandardTrailer: IStandardTrailer;
}
