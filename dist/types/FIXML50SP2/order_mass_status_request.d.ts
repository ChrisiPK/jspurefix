import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IOrderMassStatusRequest {
    MassStatusReqID: string;
    MassStatusReqType: number;
    Account?: string;
    AcctIDSource?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Side?: string;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
}
