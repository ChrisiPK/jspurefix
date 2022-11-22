import { INestedParties } from './nested_parties';
export interface IRegistrationInstructionsNoRegistDtls {
    RegistDetls?: string;
    RegistEmail?: string;
    MailingDtls?: string;
    MailingInst?: string;
    NestedParties?: INestedParties;
    OwnerType?: number;
    DateOfBirth?: Date;
    InvestorCountryOfResidence?: string;
}
