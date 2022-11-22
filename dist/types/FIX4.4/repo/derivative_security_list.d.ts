import { IStandardHeader } from './set/standard_header';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityList {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    RelSymDerivSecGrp?: IRelSymDerivSecGrp[];
    StandardTrailer: IStandardTrailer;
}
