import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
export interface IRegistrationInstructionsResponse {
    RegistID: string;
    RegistTransType: string;
    RegistRefID: string;
    ClOrdID?: string;
    Account?: string;
    AcctIDSource?: number;
    RegistStatus: string;
    RegistRejReasonCode?: number;
    RegistRejReasonText?: string;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
}
