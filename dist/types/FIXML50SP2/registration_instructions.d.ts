import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IRgstDtlsGrp } from './set/rgst_dtls_grp';
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp';
export interface IRegistrationInstructions {
    RegistID: string;
    ClearingBusinessDate?: Date;
    RegistTransType: string;
    RegistRefID: string;
    ClOrdID?: string;
    Account?: string;
    AcctIDSource?: number;
    RegistAcctType?: string;
    TaxAdvantageType?: number;
    OwnershipType?: string;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    RgstDtlsGrp?: IRgstDtlsGrp[];
    RgstDistInstGrp?: IRgstDistInstGrp[];
}
