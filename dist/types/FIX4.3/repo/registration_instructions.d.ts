import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { INestedParties } from './set/nested_parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRegistrationInstructions {
    StandardHeader: IStandardHeader;
    ClOrdID?: string;
    Parties?: IParties[];
    Account?: string;
    NestedParties?: INestedParties[];
    StandardTrailer: IStandardTrailer;
}
