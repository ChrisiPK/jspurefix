import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRegistrationInstructionsResponse {
    StandardHeader: IStandardHeader;
    ClOrdID?: string;
    Parties?: IParties[];
    Account?: string;
    StandardTrailer: IStandardTrailer;
}
