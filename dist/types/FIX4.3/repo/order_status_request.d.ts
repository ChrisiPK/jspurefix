import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderStatusRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    ClOrdID: string;
    Parties?: IParties[];
    Account?: string;
    Instrument: IInstrument;
    Side: string;
    StandardTrailer: IStandardTrailer;
}
