import { INestedParties } from './nested_parties';
export interface IRgstDtlsGrp {
    RegistDtls?: string;
    RegistEmail?: string;
    MailingDtls?: string;
    MailingInst?: string;
    OwnerType?: number;
    DateOfBirth?: Date;
    InvestorCountryOfResidence?: string;
    NestedParties?: INestedParties[];
}
