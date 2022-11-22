import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRegistrationInstructionsResponse {
    StandardHeader: IStandardHeader;
    RegistID: string;
    RegistTransType: string;
    RegistRefID: string;
    ClOrdID?: string;
    Parties?: IParties[];
    Account?: string;
    AcctIDSource?: number;
    RegistStatus: string;
    RegistRejReasonCode?: number;
    RegistRejReasonText?: string;
    StandardTrailer: IStandardTrailer;
}
