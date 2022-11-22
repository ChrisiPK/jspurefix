import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IRegistrationInstructionsNoRegistDtls } from './set/registration_instructions_no_regist_dtls';
import { IRegistrationInstructionsNoDistribInsts } from './set/registration_instructions_no_distrib_insts';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRegistrationInstructions {
    StandardHeader: IStandardHeader;
    RegistID: string;
    RegistTransType: string;
    RegistRefID: string;
    ClOrdID?: string;
    Parties?: IParties;
    Account?: string;
    RegistAcctType?: string;
    TaxAdvantageType?: number;
    OwnershipType?: string;
    NoRegistDtls?: IRegistrationInstructionsNoRegistDtls[];
    NoDistribInsts?: IRegistrationInstructionsNoDistribInsts[];
    StandardTrailer: IStandardTrailer;
}
